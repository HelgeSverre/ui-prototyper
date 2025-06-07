# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VoltAgent application for building AI agents. The project is called "ui-prototyper" and uses the VoltAgent framework with OpenAI integration.

## Development Commands

```bash
# Run development server with hot-reload
npm run dev

# Build TypeScript to JavaScript
npm run build

# Run compiled JavaScript
npm start

# Run VoltAgent CLI
npm run volt
```

## Architecture

The codebase implements a multi-agent UI prototyping system:

### Agent Pipeline
1. **Orchestrator** (`src/agents/orchestrator.ts`) - Coordinates the entire process
2. **Clarifier** - Converts vague requests into structured briefs
3. **UI Scope Decomposer** - Breaks down into components and screens
4. **UX Strategist** - Maps usage scenarios and workflows
5. **Design Stylist** - Creates cohesive design systems
6. **Component Notes Generator** - Adds usability/accessibility tips
7. **Implementation Planner** - Orders components by priority
8. **SVG Mockup Composer** - Generates visual mockups

### Key Components
- **Agents**: `src/agents/` - Each specialized agent
- **Tools**: `src/tools/` - File writing and inter-agent communication
- **Types**: `src/types/` - TypeScript interfaces for data structures
- **Retrievers**: `src/retrievers/` - UI/UX book reference system
- **Output**: `output/` - Generated mockups and documentation

### UI/UX Book References
The Design Stylist and SVG Composer agents have access to a UI book retriever that references:
- **Practical UI** (2nd edition) - For practical design principles
- **Refactoring UI** - For tactical design patterns

These PDFs are stored in `specs/influences/` but are not committed to git. The retriever provides page references for specific design topics.

### Technical Details
- **TypeScript**: Strict mode, ES2022 target, NodeNext modules
- **Build Output**: Compiles to `dist/` directory
- **Agent Communication**: Uses in-memory data store via `passDataTool`
- **File Output**: Automatically creates `output/` directory for results

## Usage

Send a UI request to the orchestrator agent. It will generate:
- PROJECT-BRIEF.md - Clarified requirements
- UI-COMPONENTS.md - Component breakdown
- UX-FLOW-NOTES.md - User workflows
- DESIGN-SYSTEM.json - Visual design specs
- COMPONENT-NOTES.md - Usability tips
- IMPLEMENTATION-ORDER.md - Build sequence
- UI-MOCKUPS.svg - Visual mockups