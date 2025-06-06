export interface ProjectBrief {
  title: string;
  description: string;
  goals: string[];
  targetAudience: string;
  technicalRequirements: string[];
  constraints?: string[];
}

export interface UIComponent {
  name: string;
  type: 'screen' | 'component' | 'feature';
  description: string;
  states?: string[];
  priority: 'high' | 'medium' | 'low';
  dependencies?: string[];
}

export interface UXFlowNote {
  component: string;
  scenario: string;
  requirements: string[];
  interactions: string[];
}

export interface DesignSystem {
  colorPalette: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    accent?: string;
  };
  typography: {
    fontFamily: string;
    headingSize: string;
    bodySize: string;
    lineHeight: string;
  };
  spacing: {
    unit: string;
    scale: number[];
  };
  borderRadius: string;
  shadows: string[];
  theme: 'light' | 'dark' | 'auto';
}

export interface ComponentNote {
  component: string;
  usabilityTips: string[];
  accessibilityNotes: string[];
  performanceConsiderations?: string[];
}

export interface ImplementationOrder {
  phase: number;
  components: string[];
  rationale: string;
}

export interface MockupSpec {
  component: string;
  dimensions: { width: number; height: number };
  elements: any[];
  styles: Partial<DesignSystem>;
}

export interface AgentOutput {
  type: string;
  content: any;
  timestamp: string;
}