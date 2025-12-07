# @dsz-examaware/player

ExamAware 播放器组件包，提供考试信息渲染、提醒服务以及操作工具栏等 UI 组件。

## 工具栏扩展

播放器现在提供可释放的工具栏注册 API，支持在父组件或子组件中动态注入按钮：

```ts
import { providePlayerToolbar } from '@dsz-examaware/player';

const toolbar = providePlayerToolbar();

const dispose = toolbar.register({
  id: 'custom-help',
  label: '帮助',
  tooltip: '查看操作指南',
  icon: HelpCircleIcon,
  order: 120,
  onClick: () => openHelpCenter()
});

// 组件卸载时调用 dispose()，或使用 toolbar.unregister('custom-help')
```

在 `ExamPlayer` 组件实例上也可以通过 `ref` 调用：

```ts
const playerRef = ref<typeof ExamPlayer>();

playerRef.value?.toolbar.register({
  id: 'custom',
  label: '自定义',
  onClick: () => {}
});
```

工具栏按钮会自动出现在底部操作栏中，支持图标 + 文案或自定义组件，所有注册调用都会返回可释放的函数，便于保持代码模块化与可回收性。
