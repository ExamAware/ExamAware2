import { apiRequest } from '../http';
import type {
  CreatePartitionDimensionInput,
  CreatePartitionNodeInput,
  PartitionDimension,
  PartitionDimensionDetail,
  PartitionNode
} from './types';

const DIMENSIONS_PATH = '/api/v1/partition-dimensions';

export const partitionsApi = {
  listDimensions() {
    return apiRequest<PartitionDimension[]>(DIMENSIONS_PATH);
  },
  getDimension(id: string) {
    return apiRequest<PartitionDimensionDetail>(`${DIMENSIONS_PATH}/${encodeURIComponent(id)}`);
  },
  createDimension(input: CreatePartitionDimensionInput) {
    return apiRequest<PartitionDimension>(DIMENSIONS_PATH, {
      method: 'POST',
      body: JSON.stringify(input)
    });
  },
  updateDimension(id: string, patch: { name?: string; description?: string | null }) {
    return apiRequest<PartitionDimension>(`${DIMENSIONS_PATH}/${encodeURIComponent(id)}`, {
      method: 'PATCH',
      body: JSON.stringify(patch)
    });
  },
  removeDimension(id: string) {
    return apiRequest<void>(`${DIMENSIONS_PATH}/${encodeURIComponent(id)}`, {
      method: 'DELETE'
    });
  },
  createNode(dimensionId: string, input: CreatePartitionNodeInput) {
    return apiRequest<PartitionNode>(
      `${DIMENSIONS_PATH}/${encodeURIComponent(dimensionId)}/nodes`,
      { method: 'POST', body: JSON.stringify(input) }
    );
  },
  updateNode(
    id: string,
    patch: { name?: string; description?: string | null; sortOrder?: number }
  ) {
    return apiRequest<PartitionNode>(`/api/v1/partition-nodes/${encodeURIComponent(id)}`, {
      method: 'PATCH',
      body: JSON.stringify(patch)
    });
  },
  removeNode(id: string) {
    return apiRequest<void>(`/api/v1/partition-nodes/${encodeURIComponent(id)}`, {
      method: 'DELETE'
    });
  }
};
