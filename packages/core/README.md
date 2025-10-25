# @dsz-examaware/core

ExamAware 核心库 - 提供考试配置解析、验证和时间处理等核心功能。

## 功能特性

- 🔧 考试配置解析和验证
- ⏰ 时间格式化和处理工具
- 📝 类型安全的 TypeScript 接口
- 🔄 跨平台支持 (Desktop & Web)
- 📦 支持 ESM 和 CommonJS

## 安装

```bash
pnpm add @dsz-examaware/core
```

## 使用方法

### 类型定义

```typescript
import type { ExamConfig, ExamInfo, ExamMaterial } from '@dsz-examaware/core';

const examConfig: ExamConfig = {
  examName: '期中考试',
  message: '请各位同学认真对待',
  examInfos: [
    {
      name: '语文',
      start: '2024-01-15 09:00:00',
      end: '2024-01-15 11:00:00',
      alertTime: 15,
      materials: [
        { name: '试卷', quantity: 1, unit: '份' },
        { name: '答题卡', quantity: 1, unit: '张' }
      ]
    }
  ]
};
```

### 配置解析和验证

```typescript
import {
  parseExamConfig,
  validateExamConfig,
  hasExamTimeOverlap,
  getSortedExamConfig
} from '@dsz-examaware/core';

// 解析 JSON 配置
const config = parseExamConfig(jsonString);

// 验证配置
const isValid = validateExamConfig(config);

// 检查时间冲突
const hasConflict = hasExamTimeOverlap(config);

// 获取排序后的配置
const sortedConfig = getSortedExamConfig(config);
```

### 时间工具

```typescript
import {
  formatLocalDateTime,
  formatDisplayTime,
  formatTimeRange,
  parseDateTime,
  isTimeRangeOverlap
} from '@dsz-examaware/core';

// 格式化时间
const formatted = formatLocalDateTime(new Date());

// 解析时间字符串
const date = parseDateTime('2024-01-15 09:00:00');

// 检查时间重叠
const overlap = isTimeRangeOverlap(start1, end1, start2, end2);
```

## API 文档

### 类型定义

#### `ExamMaterial`

考试材料信息接口

- `name: string` - 材料名称
- `quantity: number` - 材料数量
- `unit: string` - 材料单位

#### `ExamInfo`

考试信息接口

- `name: string` - 考试名称
- `start: string` - 考试开始时间
- `end: string` - 考试结束时间
- `alertTime: number` - 考试结束前几分钟提醒
- `materials?: ExamMaterial[]` - 考试材料清单

#### `ExamConfig`

考试配置接口

- `examName: string` - 考试名称
- `message: string` - 考试相关消息
- `examInfos: ExamInfo[]` - 考试信息数组

### 解析和验证功能

#### `parseExamConfig(jsonString: string): ExamConfig | null`

解析考试配置的 JSON 字符串

#### `validateExamConfig(config: ExamConfig): boolean`

验证考试配置是否有效

#### `hasExamTimeOverlap(config: ExamConfig): boolean`

检查考试时间是否有重叠

#### `getSortedExamInfos(config: ExamConfig): ExamInfo[]`

获取排序后的考试信息列表

#### `getSortedExamConfig(config: ExamConfig): ExamConfig`

获取包含排序后考试信息的完整配置对象

### 工具函数

#### `formatLocalDateTime(date: Date): string`

将 Date 对象格式化为本地时间字符串 (YYYY-MM-DD HH:mm:ss)

#### `formatDisplayTime(date: Date): string`

将 Date 对象格式化为显示用的时间字符串 (MM/DD HH:mm)

#### `formatTimeRange(start: Date, end: Date): string`

将 Date 对象格式化为时间段显示字符串

#### `parseDateTime(dateStr: string): Date`

解析时间字符串为 Date 对象

#### `getCurrentLocalDateTime(): string`

获取当前本地时间字符串

#### `isTimeRangeOverlap(start1, end1, start2, end2): boolean`

检查两个时间段是否重叠

#### `getMinutesDifference(start, end): number`

计算两个时间点之间的分钟差

## 开发

```bash
# 开发模式
pnpm dev

# 构建
pnpm build

# 类型检查
pnpm type-check

# 代码检查
pnpm lint
```

## 许可证

GPL-3.0
