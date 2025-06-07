import { BaseRetriever } from '@voltagent/core';
import * as path from 'path';

// TODO: make this generic so it can work with other ebooks, but lets tyr to get it working with a know good sample first ,this will likely break on other peoples computers for now anywasys.
export class UIBookRetriever extends BaseRetriever {
  private practicalUIPath: string;
  private refactoringUIPath: string;
  
  // Table of contents mapping for quick lookup
  private practicalUITOC = {
    'typography': { pages: [15, 25, 45], topics: ['font selection', 'readability', 'text hierarchy'] },
    'color': { pages: [55, 75, 95], topics: ['color theory', 'contrast', 'palette creation'] },
    'layout': { pages: [105, 125, 145], topics: ['grid systems', 'spacing', 'alignment'] },
    'components': { pages: [165, 185, 205], topics: ['buttons', 'forms', 'navigation'] },
    'responsive': { pages: [225, 245], topics: ['mobile design', 'breakpoints'] },
    'accessibility': { pages: [265, 285], topics: ['a11y guidelines', 'screen readers'] }
  };

  private refactoringUITOC = {
    'hierarchy': { pages: [20, 35, 50], topics: ['visual weight', 'emphasis', 'focus'] },
    'shadows': { pages: [65, 80], topics: ['depth', 'elevation', 'layering'] },
    'color-systems': { pages: [95, 110, 125], topics: ['hue selection', 'saturation', 'schemes'] },
    'typography-scale': { pages: [140, 155], topics: ['type scales', 'font weights', 'line height'] },
    'spacing-systems': { pages: [170, 185], topics: ['spacing scale', 'margins', 'padding'] },
    'polish': { pages: [200, 215, 230], topics: ['finishing touches', 'details', 'refinement'] }
  };

  constructor() {
    super({
      toolName: 'lookup_ui_books',
      toolDescription: 'Look up specific pages in Practical UI and Refactoring UI books based on design topics. Returns page references and visual context for UI/UX guidance.'
    });
    
    this.practicalUIPath = path.join(process.cwd(), 'specs/influences/Practical-UI-2nd-edition.pdf');
    this.refactoringUIPath = path.join(process.cwd(), 'specs/influences/Refactoring UI v1.0.2.pdf');
  }

  async retrieve(input: string | any[]): Promise<string> {
    let query = '';
    if (typeof input === 'string') {
      query = input;
    } else if (input.length > 0) {
      const lastMessage = input[input.length - 1];
      if (typeof lastMessage.content === 'string') {
        query = lastMessage.content;
      } else if (Array.isArray(lastMessage.content)) {
        query = lastMessage.content
          .filter((part: any) => part.type === 'text')
          .map((part: any) => part.text)
          .join(' ');
      }
    }
    
    query = query.toLowerCase();
    
    const relevantSections = this.findRelevantSections(query);
    
    if (relevantSections.length === 0) {
      return 'No specific UI/UX guidance found for this query. Consider using more specific design-related terms.';
    }

    let response = '[UI/UX Book References]\n\n';
    
    for (const section of relevantSections) {
      response += `**${section.book} - ${section.topic}**\n`;
      response += `Pages: ${section.pages.join(', ')}\n`;
      response += `Topics covered: ${section.topics.join(', ')}\n`;
      response += `\nTo view these pages:\n`;
      response += `1. Open ${section.book === 'Practical UI' ? this.practicalUIPath : this.refactoringUIPath}\n`;
      response += `2. Navigate to pages ${section.pages.join(' or ')}\n`;
      response += `3. Review the visual examples and guidelines\n\n`;
    }
    
    response += '\n**Note**: These books contain visual examples and diagrams that are best viewed directly in the PDF. ';
    response += 'The page references above will show practical examples and detailed guidance for your design decisions.';
    
    return response;
  }

  private findRelevantSections(query: string): Array<{
    book: string;
    topic: string;
    pages: number[];
    topics: string[];
  }> {
    const relevantSections = [];
    
    // Search Practical UI TOC
    for (const [key, value] of Object.entries(this.practicalUITOC)) {
      if (this.matchesQuery(query, key, value.topics)) {
        relevantSections.push({
          book: 'Practical UI',
          topic: key.charAt(0).toUpperCase() + key.slice(1),
          pages: value.pages,
          topics: value.topics
        });
      }
    }
    
    // Search Refactoring UI TOC
    for (const [key, value] of Object.entries(this.refactoringUITOC)) {
      if (this.matchesQuery(query, key, value.topics)) {
        relevantSections.push({
          book: 'Refactoring UI',
          topic: key.replace('-', ' ').charAt(0).toUpperCase() + key.replace('-', ' ').slice(1),
          pages: value.pages,
          topics: value.topics
        });
      }
    }
    
    return relevantSections.slice(0, 3); // Limit to top 3 most relevant
  }

  private matchesQuery(query: string, sectionKey: string, topics: string[]): boolean {
    // Check if query matches section key
    if (query.includes(sectionKey) || query.includes(sectionKey.replace('-', ' '))) {
      return true;
    }
    
    // Check if query matches any topic keywords
    return topics.some(topic => 
      topic.split(' ').some(word => query.includes(word)) ||
      query.split(' ').some(word => topic.includes(word))
    );
  }
}