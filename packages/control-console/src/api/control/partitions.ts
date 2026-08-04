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
  createNode(dimensionId: string, input: CreatePartitionNodeInput) {
    return apiRequest<PartitionNode>(
      `${DIMENSIONS_PATH}/${encodeURIComponent(dimensionId)}/nodes`,
      { method: 'POST', body: JSON.stringify(input) }
    );
  }
};
