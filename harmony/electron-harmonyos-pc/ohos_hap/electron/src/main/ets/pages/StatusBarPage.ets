// Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { common } from '@kit.AbilityKit';
import commonEventManager from '@ohos.commonEventManager';

const TRAY_MENU_CLICK_EVENT: string = 'org.examaware.desktop2.TRAY_MENU_CLICK';
const TRAY_MENU_BUNDLE: string = 'org.examaware.desktop2';

@Entry
@Component
struct StatusBarPage {
  private selectMenuItem(menuIndex: number): void {
    const context = getContext(this) as common.UIExtensionContext;
    commonEventManager.publish(TRAY_MENU_CLICK_EVENT, {
      bundleName: TRAY_MENU_BUNDLE,
      code: menuIndex
    }, () => {
      context.terminateSelf().catch(() => {});
    });
  }

  build() {
    Menu() {
      MenuItem({ content: '打开主界面' })
        .onClick(() => this.selectMenuItem(0))
      MenuItem({ content: '设置' })
        .onClick(() => this.selectMenuItem(1))
      MenuItem({ content: '退出' })
        .onClick(() => this.selectMenuItem(2))
    }
    .width('100%')
    .height('100%')
  }
}
