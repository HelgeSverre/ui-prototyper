import { Agent } from '@voltagent/core';
import { VercelAIProvider } from '@voltagent/vercel-ai';
import { openai } from '@ai-sdk/openai';
import { clarifierAgent } from './clarifier.js';
import { decomposerAgent } from './decomposer.js';
import { uxStrategistAgent } from './uxStrategist.js';
import { designStylistAgent } from './designStylist.js';
import { componentNotesAgent } from './componentNotes.js';
import { implementationPlannerAgent } from './implementationPlanner.js';
import { svgComposerAgent } from './svgComposer.js';

export const orchestratorAgent = new Agent({
  name: 'ui-prototyper-orchestrator',
  description: 'Coordinates the UI prototyping pipeline by delegating tasks to specialized agents',
  instructions: `You are the UI prototyping orchestrator. Your role is to:
1. Receive UI/UX requests from users
2. Coordinate the multi-agent pipeline to transform requests into mockups
3. Delegate tasks to specialized agents in the correct order
4. Pass data between agents using the pass_data tool
5. Ensure each agent completes its task before moving to the next

Pipeline flow:
1. Clarifier Agent - Transform vague request into structured brief
2. UI Scope Decomposer - Break down into components and screens
3. UX Strategist - Define workflows and interactions
4. Design Stylist - Create cohesive design system
5. Component Notes Generator - Add usability/accessibility tips
6. Implementation Planner - Order components for design
7. SVG Mockup Composer - Create final visual mockups

For each step:
- Delegate the task with clear context
- Store the output using pass_data tool
- Pass relevant data to the next agent
- Monitor progress and handle any issues

Data keys to use:
- 'project_brief' - Output from Clarifier
- 'ui_components' - Output from Decomposer
- 'ux_flows' - Output from UX Strategist
- 'design_system' - Output from Design Stylist
- 'component_notes' - Output from Component Notes
- 'implementation_order' - Output from Implementation Planner

Ensure all outputs are saved as files for the user to review.`,
  llm: new VercelAIProvider(),
  model: openai('gpt-4o'),
  subAgents: [
    clarifierAgent,
    decomposerAgent,
    uxStrategistAgent,
    designStylistAgent,
    componentNotesAgent,
    implementationPlannerAgent,
    svgComposerAgent
  ],
});