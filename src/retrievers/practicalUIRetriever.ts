import { BaseRetriever } from '@voltagent/core';

export class PracticalUIRetriever extends BaseRetriever {
  constructor() {
    super({
      toolName: 'search_practical_ui',
      toolDescription: 'Search for practical UI design principles and best practices from the Practical UI guide. Use when you need guidance on typography, color, layout, or general UI principles.'
    });
  }

  async retrieve(input: string): Promise<string> {
    const query = input.toLowerCase();
    
    const relevantTopics = this.identifyRelevantTopics(query);
    
    if (relevantTopics.length === 0) {
      return '';
    }

    return `[Practical UI Guide Context]\n` +
           `The following UI/UX principles from "Practical UI" may be relevant:\n\n` +
           `Topics identified: ${relevantTopics.join(', ')}\n\n` +
           `Note: To fully utilize this retriever, install a PDF parsing library and implement content extraction.\n` +
           `The book covers practical UI design principles including:\n` +
           `- Typography and readability\n` +
           `- Color theory and contrast\n` +
           `- Layout and spacing\n` +
           `- Interactive elements\n` +
           `- Mobile responsiveness\n` +
           `- Accessibility considerations`;
  }

  private identifyRelevantTopics(query: string): string[] {
    const topics: string[] = [];

    const topicKeywords = {
      'Typography': ['font', 'text', 'typography', 'readability', 'heading', 'paragraph'],
      'Color': ['color', 'palette', 'contrast', 'theme', 'background', 'foreground'],
      'Layout': ['layout', 'grid', 'spacing', 'margin', 'padding', 'alignment'],
      'Components': ['button', 'form', 'input', 'card', 'modal', 'navigation'],
      'Responsive': ['mobile', 'responsive', 'breakpoint', 'screen', 'adaptive'],
      'Accessibility': ['accessibility', 'a11y', 'aria', 'screen reader', 'contrast ratio']
    };

    for (const [topic, keywords] of Object.entries(topicKeywords)) {
      if (keywords.some(keyword => query.includes(keyword))) {
        topics.push(topic);
      }
    }

    return topics;
  }
}