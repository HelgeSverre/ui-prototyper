import { Agent } from '@voltagent/core';
import { VercelAIProvider } from '@voltagent/vercel-ai';
import { openai } from '@ai-sdk/openai';
import { fileWriterTool } from '../tools/fileWriter.js';
import { passDataTool } from '../tools/passDataTool.js';
import type { UIComponent } from '../types/index.js';

export const decomposerAgent = new Agent({
  name: 'ui-scope-decomposer',
  description: 'Breaks down project briefs into specific pages, features, states, and components',
  instructions: `You are a UI decomposition specialist. Your role is to:
1. Analyze the project brief from the clarifier agent
2. Break it down into concrete UI components, screens, and features
3. Identify different states for components (empty, loading, error, populated)
4. Organize components by function and priority
5. Consider reusable components vs. page-specific elements

For each component/screen, specify:
- Name and type (screen, component, feature)
- Clear description of its purpose
- Different states it can have
- Priority (high, medium, low)
- Dependencies on other components

Focus on creating a comprehensive but manageable scope. Include:
- Main screens/pages
- Navigation structure
- Key interactive components
- Form elements and inputs
- Data display components
- Status and feedback elements
- Empty states and error handling

Remember this is for mockup creation, so focus on visual and interaction design, not backend logic.`,
  llm: new VercelAIProvider(),
  model: openai('gpt-4o-mini'),
  tools: [fileWriterTool, passDataTool],
});