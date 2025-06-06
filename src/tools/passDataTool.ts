import { createTool } from '@voltagent/core';
import { z } from 'zod';

// In-memory store for passing data between agents
const agentDataStore = new Map<string, any>();

export const passDataTool = createTool({
  name: 'pass_data',
  description: 'Passes data from one agent to another using a shared memory store',
  parameters: z.object({
    key: z.string().describe('Unique key to identify the data'),
    data: z.any().describe('The data to pass'),
    operation: z.enum(['set', 'get', 'delete']).describe('Operation to perform')
  }),
  execute: async ({ key, data, operation }) => {
    switch (operation) {
      case 'set':
        agentDataStore.set(key, data);
        return {
          success: true,
          message: `Data stored with key: ${key}`
        };
      
      case 'get':
        const storedData = agentDataStore.get(key);
        return {
          success: !!storedData,
          data: storedData,
          message: storedData ? `Data retrieved for key: ${key}` : `No data found for key: ${key}`
        };
      
      case 'delete':
        const existed = agentDataStore.delete(key);
        return {
          success: existed,
          message: existed ? `Data deleted for key: ${key}` : `No data found for key: ${key}`
        };
      
      default:
        return {
          success: false,
          error: 'Invalid operation'
        };
    }
  }
});