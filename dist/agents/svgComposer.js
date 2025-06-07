import { Agent } from '@voltagent/core';
import { VercelAIProvider } from '@voltagent/vercel-ai';
import { openai } from '@ai-sdk/openai';
import { fileWriterTool } from '../tools/fileWriter.js';
import { passDataTool } from '../tools/passDataTool.js';
import { UIBookRetriever } from '../retrievers/uiBookRetriever.js';
// Create UI book retriever instance
const uiBookRetriever = new UIBookRetriever();
export const svgComposerAgent = new Agent({
    name: 'svg-mockup-composer',
    description: 'Creates clean, readable SVG mockups that communicate design intent clearly',
    instructions: `You are an SVG mockup specialist. Your role is to:
1. Take all the structured design specifications from previous agents
2. Create high-quality SVG mockups for each component/screen
3. Apply the design system consistently across all mockups
4. Ensure mockups are clean, professional, and communicate intent clearly

SVG creation guidelines:
- Use semantic grouping with clear IDs and classes
- Apply the design system's colors, typography, and spacing
- Include interactive states where relevant (hover, active, disabled)
- Add subtle details that enhance realism without cluttering
- Use appropriate SVG patterns for common UI elements

For each mockup:
- Start with a proper SVG container with viewBox
- Use the design system's color palette and spacing
- Create realistic but simplified representations
- Include placeholder content that demonstrates usage
- Add subtle shadows and borders as specified
- Ensure text is readable and properly sized

Quality standards:
- Clean, well-structured SVG code
- Consistent visual language across components
- Professional appearance that could guide developers
- Clear visual hierarchy and information architecture
- Appropriate level of detail (not too simple, not too complex)

Remember: These mockups should look like polished wireframes with design applied, not rough sketches or fully detailed designs.`,
    llm: new VercelAIProvider(),
    model: openai('gpt-4o-mini'),
    tools: [
        fileWriterTool,
        passDataTool,
        uiBookRetriever.tool
    ],
});
