# HarmonyOS PC

The HarmonyOS Electron HAP project lives in `harmony/electron-harmonyos-pc/ohos_hap`.
The desktop build copies the unpacked Electron application into this project and then builds the HAP.

Requirements:

- DevEco Studio at `/Applications/DevEco-Studio.app/Contents`
- Git LFS for the prebuilt native libraries in `electron-harmonyos-pc/ohos_hap/electron/libs`

Build from the workspace root:

```sh
pnpm --filter @dsz-examaware/desktop build:hmos:hap
```

`DEVECO_STUDIO_HOME`, `DEVECO_SDK_HOME`, and `OHOS_HAP_PATH` can override the default local paths when needed.

The unsigned HAP is generated at:

```text
harmony/electron-harmonyos-pc/ohos_hap/electron/build/default/outputs/default/examaware-harmonyos-pc-unsigned.hap
```
