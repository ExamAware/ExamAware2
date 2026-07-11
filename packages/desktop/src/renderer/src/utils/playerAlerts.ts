export const formatExamAlertMessage = (exam: { name: string }, alertTime: number): string =>
  `${exam.name} 将在 ${alertTime} 分钟后结束`
