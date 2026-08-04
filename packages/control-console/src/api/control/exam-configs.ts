import type { ExamConfig } from '@dsz-examaware/core';
import { apiRequest } from '../http';
import type { ExamConfigDetail, ExamConfigSummary, ExamConfigVersion, PageResponse } from './types';

const EXAM_CONFIGS_PATH = '/api/v1/exam-configs';

export const examConfigsApi = {
  list(page = 1, pageSize = 20) {
    const query = new URLSearchParams({ page: String(page), pageSize: String(pageSize) });
    return apiRequest<PageResponse<ExamConfigSummary>>(`${EXAM_CONFIGS_PATH}?${query}`);
  },
  get(id: string) {
    return apiRequest<ExamConfigDetail>(`${EXAM_CONFIGS_PATH}/${encodeURIComponent(id)}`);
  },
  create(name: string, content: ExamConfig) {
    return apiRequest<ExamConfigDetail>(EXAM_CONFIGS_PATH, {
      method: 'POST',
      body: JSON.stringify({ name, content })
    });
  },
  createVersion(id: string, content: ExamConfig) {
    return apiRequest<ExamConfigVersion>(
      `${EXAM_CONFIGS_PATH}/${encodeURIComponent(id)}/versions`,
      { method: 'POST', body: JSON.stringify({ content }) }
    );
  }
};
