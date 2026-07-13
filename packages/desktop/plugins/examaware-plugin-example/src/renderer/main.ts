import type { PluginRuntimeContext } from '@dsz-examaware/plugin-sdk'
import { createEauiWindowForPlugin } from '@dsz-examaware/plugin-sdk'

export default async function setupRenderer(ctx: PluginRuntimeContext) {
  const routeId = 'plugin-example-eaui'
  const isPluginWindow = typeof location !== 'undefined' && location.hash.includes(`#/${routeId}`)

  const openWindow = async () =>
    createEauiWindowForPlugin(ctx, {
      routeId,
      electronWindow: {
        width: 760,
        height: 640,
        resizable: true,
        fullscreenable: false,
        extraOptions: {
          frame: false,
          titleBarStyle: 'hidden',
          titleBarOverlay: {
            color: '#ffffff',
            symbolColor: '#000000',
            height: 36
          }
        }
      },
      buildUi: (runtimeCtx) => {
        const eaui = runtimeCtx.ui?.eaui
        runtimeCtx.logger.info('[examaware-plugin-example] creating eaui window...')
        if (!eaui) {
          runtimeCtx.logger.warn('[examaware-plugin-example] ctx.ui.eaui is unavailable')
          return
        }

        // Drive the WindowFrame title via document.title instead of an inner eaui header.
        document.title = 'Example Plugin'

        const windowId = routeId
        const win = eaui.createWindow({})
        const layout = eaui.createVBoxLayout()

        const title = eaui.createLabel('Hello from Example Plugin')
        const input = eaui.createLineEdit('Type something...')
        const check = eaui.createCheckBox('Enable option', true)
        const status = eaui.createLabel('Ready')

        const td = eaui.tdesign
        const dropdown = td?.createDropdown({
          label: 'Pick an option',
          trigger: 'click',
          options: [
            { label: 'Option A', value: 'A' },
            { label: 'Option B', value: 'B' },
            { label: 'Option C', value: 'C' }
          ]
        })

        const tabs = td?.createTabs({
          tabs: [
            { label: 'Tab 1', value: 'tab1' },
            { label: 'Tab 2', value: 'tab2' },
            { label: 'Tab 3', value: 'tab3' }
          ],
          value: 'tab1',
          theme: 'card'
        })

        const textInput = td?.createInput({ placeholder: 'Enter something', clearable: true })

        const radioGroup = td?.createRadioGroup({
          options: [
            { label: 'Radio A', value: 'ra' },
            { label: 'Radio B', value: 'rb' },
            { label: 'Radio C', value: 'rc' }
          ],
          value: 'ra'
        })

        const checkboxGroup = td?.createCheckboxGroup({
          options: [
            { label: 'Check A', value: 'ca' },
            { label: 'Check B', value: 'cb' },
            { label: 'Check C', value: 'cc' }
          ],
          value: ['ca']
        })

        const button = td?.createButton({
          text: 'Close',
          theme: 'primary',
          variant: 'base',
          block: true
        }) ?? eaui.createButton('Close')

        if (dropdown) {
          dropdown.clicked.connect((payload) => {
            const item = (payload as any)?.item as { content?: string; value?: unknown }
            status.setText(`Selected: ${item?.content ?? item?.value ?? ''}`)
          })
        }

        if (tabs) {
          tabs.changed.connect((val) => {
            status.setText(`Active tab: ${val as string}`)
          })
        }

        if (textInput) {
          textInput.changed.connect((val) => {
            status.setText(`Input: ${String(val ?? '')}`)
          })
          textInput.entered.connect((val) => {
            status.setText(`Enter pressed: ${String(val ?? '')}`)
          })
        }

        if (radioGroup) {
          radioGroup.changed.connect((val) => {
            status.setText(`Radio: ${String(val ?? '')}`)
          })
        }

        if (checkboxGroup) {
          checkboxGroup.changed.connect((vals) => {
            status.setText(`Checked: ${Array.isArray(vals) ? vals.join(', ') : String(vals ?? '')}`)
          })
        }

        button.clicked.connect(async () => {
          try {
            const desktopApi = runtimeCtx.desktopApi as
              | { ui?: { windows?: { close?: (id: string) => Promise<void> } } }
              | undefined
            await desktopApi?.ui?.windows?.close?.(windowId)
          } catch (err) {
            runtimeCtx.logger.warn(
              '[examaware-plugin-example] failed to close window, hiding instead',
              err as any
            )
            win.hide()
          }
        })

        layout.addWidget(title)
        layout.addWidget(input)
        layout.addWidget(check)
        if (dropdown) layout.addWidget(dropdown)
        if (tabs) layout.addWidget(tabs)
        if (textInput) layout.addWidget(textInput)
        if (radioGroup) layout.addWidget(radioGroup)
        if (checkboxGroup) layout.addWidget(checkboxGroup)
        layout.addWidget(status)
        layout.addWidget(button)

        win.setLayout(layout)
        win.show()

        runtimeCtx.effect(() => () => {
          runtimeCtx.logger.info('[examaware-plugin-example] disposing eaui window')
          win.dispose()
        })
      }
    })

  // In the dedicated plugin window, just build the UI.
  if (isPluginWindow) {
    await openWindow()
    return
  }

  // Register a home button to launch the demo on demand instead of auto-opening.
  const addHomeButton = (ctx.desktopApi as any)?.ctx?.addHomeButton as
    | ((meta: { id: string; label: string; icon: string; order?: number; action: () => any }) =>
        Promise<void>)
    | undefined

  if (typeof addHomeButton === 'function') {
    await addHomeButton({
      id: 'plugin-example-demo',
      label: 'Demo',
      icon: 'api',
      order: 90,
      action: () => openWindow()
    })
  } else {
    ctx.logger.warn('[examaware-plugin-example] addHomeButton is unavailable')
  }
}
