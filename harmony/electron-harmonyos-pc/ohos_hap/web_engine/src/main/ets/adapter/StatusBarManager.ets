// Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { injectable, inject } from 'inversify';
import { image } from '@kit.ImageKit';
import { JSON } from '@kit.ArkTS';
import { statusBarManager } from '@kit.StatusBarExtensionKit';

import { BaseAdapter } from '../common/BaseAdapter';
import LogUtil from '../utils/LogUtil';
import LogMethod from '../common/LogDecorator';
import emitter from '@ohos.events.emitter';
import Base from '@ohos.base';
import CommonEventManager from '@ohos.commonEventManager';
import { ContextAdapter } from './ContextAdapter';

const TAG: string = 'statusBar';
const TRAY_IMAGE_EDITABLE: boolean = false;
const TRAY_IMAGE_PIXEL_FORMAT: number = 4;
const TRAY_MENU_CLICK_EVENT: string = 'org.examaware.desktop2.TRAY_MENU_CLICK';
const TRAY_MENU_BUNDLE: string = 'org.examaware.desktop2';

interface MenuItem {
  title?: string,
  subTitle?: string,
  menuAction?: statusBarManager.StatusBarMenuAction,
  subMenu?: MenuItem[]
};

interface MenuRawData {
  acceleratorWorksWhenHidden?: boolean,
  checked?: boolean,
  commandId?: number,
  enabled?: boolean,
  label?: string,
  registerAccelerator?: boolean,
  role?: string,
  sublabel?: string,
  submenu?: MenuRawData[],
  toolTip?: string,
  type?: number,
  visible?: boolean
}

@injectable()
export class StatusBarManagerAdapter extends BaseAdapter {
  private TOOLTIPS: string = '';
  private TITLE: string = 'ExamAware';
  private isCreated: boolean = false;
  private quickOperationHeight: number = 120;
  private leftClickCallback: Function | undefined;
  private rightMenuCallback: Function | undefined;
  private leftMenuCommandIds: number[] = [];
  private trayMenuSubscriber: CommonEventManager.CommonEventSubscriber | undefined;
  private ctxAdapter: ContextAdapter;

  constructor(
    @inject(ContextAdapter) ctxAdapter: ContextAdapter
  ) {
    super();
    this.ctxAdapter = ctxAdapter;
    this.subscribeLeftMenuClicks();
  }

  private subscribeLeftMenuClicks(): void {
    const subscribeInfo: CommonEventManager.CommonEventSubscribeInfo = {
      events: [TRAY_MENU_CLICK_EVENT],
      publisherBundleName: TRAY_MENU_BUNDLE
    };
    CommonEventManager.createSubscriber(subscribeInfo,
      (err: Base.BusinessError, subscriber: CommonEventManager.CommonEventSubscriber) => {
        if (err) {
          LogUtil.error(TAG, `create tray menu subscriber failed: ${err.code} ${err.message}`);
          return;
        }
        this.trayMenuSubscriber = subscriber;
        CommonEventManager.subscribe(subscriber,
          (subscribeErr: Base.BusinessError, data: CommonEventManager.CommonEventData) => {
            if (subscribeErr) {
              LogUtil.error(TAG, `subscribe tray menu event failed: ${subscribeErr.code} ${subscribeErr.message}`);
              return;
            }
            const menuIndex = Number(data.code);
            const commandId = this.leftMenuCommandIds[menuIndex];
            if (commandId !== undefined) {
              LogUtil.info(TAG, `leftMenuClickCallback is called. menuCode: ${commandId}`);
              this.rightMenuCallback?.(commandId);
            }
          });
      });
  }

@LogMethod
async SetImage(
  whiteWidth: number,
  whiteHeight: number,
  whiteIconBuffer: ArrayBuffer,
  onCompleted: (ret: boolean) => void,
  callback: () => void,
  blackWidth?: number,
  blackHeight?: number,
  blackIconBuffer?: ArrayBuffer
) {
  let whiteTrayIcon: image.PixelMap | undefined = this.convertImagePixelMap(whiteWidth, whiteHeight, whiteIconBuffer);
  let blackTrayIcon: image.PixelMap | undefined;

  if (blackWidth !== undefined && blackHeight !== undefined && blackIconBuffer !== undefined) {
    blackTrayIcon = this.convertImagePixelMap(blackWidth, blackHeight, blackIconBuffer);
  }

  if (!this.isCreated) {
    try {
      statusBarManager.addToStatusBar(this.ctxAdapter.getActiveContext(), {
        icons: {
          white: whiteTrayIcon,
          black: blackTrayIcon ?? whiteTrayIcon
        },
        quickOperation: {
          title: this.TITLE,
          height: this.quickOperationHeight,
          moduleName: "electron",
          abilityName: "StatusBarEntryAbility",
        },
        statusBarGroupMenu: [],
      }, () => {
        this.leftClickCallback = callback;
        statusBarManager.on('statusBarIconClick', () => {
          this.leftClickCallback?.();
        });
        let rightMenuClickCallback = (eventData: emitter.EventData) => {
          LogUtil.info(TAG, `rightMenuClickCallback is called. menuCode: ${eventData?.data?.menuCode}`);
          this.rightMenuCallback?.(Number(eventData?.data?.menuCode));
        }
        statusBarManager.on('rightMenuClick', rightMenuClickCallback);
        this.isCreated = true;
        onCompleted && onCompleted(true);
      });
    } catch (err) {
      LogUtil.error(TAG, `addToStatusBar failed. err: ${JSON.stringify(err)}`);
      onCompleted && onCompleted(false);
    }
  } else {
    try {
      statusBarManager.updateStatusBarIcon(this.ctxAdapter.getActiveContext(), {
        white: whiteTrayIcon,
        black: blackTrayIcon ?? whiteTrayIcon
      }, () => {
        onCompleted && onCompleted(true);
      });
    } catch(err) {
      LogUtil.error(TAG, `updateStatusBarIcon failed. err: ${JSON.stringify(err)}`);
      onCompleted && onCompleted(false);
    }
  }
}

  @LogMethod
  SetToolTips(tooltips: string) {
    this.TOOLTIPS = tooltips;
  }

  @LogMethod
  SetContextMenu(menu_model: string, onCompleted: (ret: boolean) => void, callback: (id: Number) => void) {
    LogUtil.debug(TAG, `JS SetContextMenu:: ${menu_model}`);
    try {
      let menu_json: MenuRawData[] = JSON.parse(menu_model) as MenuRawData[];
      this.leftMenuCommandIds = menu_json
        .filter((item: MenuRawData) => item.visible !== false && item.type !== 3 && item.commandId !== undefined)
        .map((item: MenuRawData) => item.commandId as number);
      const menus: statusBarManager.StatusBarGroupMenu[] = this.transformJsonToMenuGroups(menu_json);
      try {
        statusBarManager.updateStatusBarMenu(this.ctxAdapter.getActiveContext(), menus, () => {onCompleted && onCompleted(true)});
      } catch (err){
        LogUtil.info(TAG, `updateStatusBarMenu failed. err: ${JSON.stringify(err)}`);
        onCompleted && onCompleted(false);
      }
      this.rightMenuCallback = callback;
    } catch (err) {
      LogUtil.error(TAG, 'SetContextMenu Error: ' + err);
      onCompleted && onCompleted(false);
    }
  }

  @LogMethod
  async RemoveFromStatusBar(onCompleted: (ret: boolean) => void) {
    try {
      try {
        statusBarManager.removeFromStatusBar(this.ctxAdapter.getActiveContext(), () => {
          this.isCreated = false;
          onCompleted && onCompleted(true);
        });
      } catch (err) {
        LogUtil.info(TAG, `removeFromStatusBar failed. err: ${JSON.stringify(err)}`);
        onCompleted && onCompleted(false);
      }
    } catch (err) {
      LogUtil.error(TAG, 'RemoveFromStatusBar Error: ' + err);
      onCompleted && onCompleted(false);
    } finally {
      statusBarManager.off('statusBarIconClick');
      statusBarManager.off('rightMenuClick');
    }
  }

  private recurse(items: MenuItem[] | undefined, isTopLevel: boolean = true): undefined | MenuItem[] {
    if (items === undefined) {
      return items;
    }
    items.map((item: MenuItem) => {
      if (!isTopLevel) {
        item.subTitle = item.title;
        item.title = undefined;
      }
      this.recurse(item.subMenu, false);
    });
    return items;
  }

  private processData(rawData: statusBarManager.StatusBarMenuItem[]) : MenuItem[] {
    let modifiedData: MenuItem[]  = JSON.parse(JSON.stringify(rawData)) as MenuItem[];
    return this.recurse(modifiedData) as MenuItem[];
  }


  private transformMenuItem(jsonItem: MenuRawData): statusBarManager.StatusBarMenuItem | statusBarManager.StatusBarSubMenuItem {
    const menuAction: statusBarManager.StatusBarMenuAction = {
      abilityName: 'StatusBarEntryAbility',
      moduleName: 'electron',
      notifyOnly: true,
      menuCode: jsonItem.commandId?.toString()
    };

    const menuItem: statusBarManager.StatusBarMenuItem = {
      title: jsonItem.label as string,
      menuAction: menuAction
    };

    if (jsonItem.submenu && jsonItem.submenu.length > 0) {
      menuItem.subMenu = jsonItem.submenu.map((subItem) => this.transformMenuItem(subItem) as statusBarManager.StatusBarSubMenuItem);
    }

    return menuItem;
  }

  private transformJsonToMenuGroups(jsonData: MenuRawData[]): statusBarManager.StatusBarGroupMenu[] {
    const groups: statusBarManager.StatusBarGroupMenu[] = [];
    let group: statusBarManager.StatusBarMenuItem[] = [];
    for (const item of jsonData) {
      if (item.visible === false) {
        continue;
      }
      if (item.type === 3) {
        if (group.length > 0) {
          groups.push(this.processData(group) as statusBarManager.StatusBarMenuItem[]);
          group = [];
        }
        continue;
      }
      // HarmonyOS supplies its own final Quit item in the system context menu.
      if (item.role === 'quit') {
        continue;
      }
      group.push(this.transformMenuItem(item) as statusBarManager.StatusBarMenuItem);
    }
    if (group.length > 0) {
      groups.push(this.processData(group) as statusBarManager.StatusBarMenuItem[]);
    }
    return groups;
  }

  private convertImagePixelMap(width: number, height: number, buff: ArrayBuffer): image.PixelMap | undefined {
    if (width === 0 || height === 0) {
      LogUtil.warn(TAG, 'image is empty, no conversion required');
      return undefined;
    }
    let opts: image.InitializationOptions = {
      editable: TRAY_IMAGE_EDITABLE,
      pixelFormat: TRAY_IMAGE_PIXEL_FORMAT,
      size: {
        height: height,
        width: width
      }
    }
    try {
      return image.createPixelMapSync(buff, opts);
    } catch (error) {
      LogUtil.error(TAG, 'failed convert image pixel map because: ' +  JSON.stringify(error));
      return undefined;
    }
  }
}
