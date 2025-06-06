## ✅ Simplified Goal Summary

> **The goal is to take a vague product UI request and turn it into a thoughtful, clean, and visually appealing UI
mockup using a team of AI agents, each specializing in a step of the process.**

These mockups should:

* Make design decisions based on logic, usability, and modern UX patterns.
* Avoid generic/boilerplate designs (e.g. Tailwind default UIs).
* Produce beautiful and functional SVG mockups quickly, without implementing actual code.

---
[GoogleService-Info.plist](../../../../../Applications/PDFgear.app/Contents/Resources/GoogleService-Info.plist)
## ✅ The AI Agent System (Simplified Version)

Here’s a modular breakdown of the AI agents with a clean naming convention, their responsibilities, and orchestration
flow.

---

### 🔧 1. **Clarifier Agent**

* **Purpose**: Converts a vague or casually phrased request into a precise, well-structured project brief.
* **Goal**: Ensure the task is specific and aligned with common UX/UI expectations.
* **Example Output**: "Build an automation platform UI for managing Linux servers, with an analytics dashboard, server
  list, setup wizard, and templating interface."

---

### 📦 2. **UI Scope Decomposer**

* **Purpose**: Breaks the clarified request into specific pages, features, states, and components.
* **Goal**: Output a list of UI components, screens, and features — organized by function and priority.
* **Example Output**:

    * Dashboard
    * Server List Table (empty + populated states)
    * Server Setup Wizard (multi-step)
    * Template Library UI
    * Templating Editor

---

### 🧠 3. **UX Strategist**

* **Purpose**: Maps out usage scenarios and decides which features are critical in common workflows.
* **Goal**: Propose layout and interaction ideas that serve real user needs.
* **Example Output**:

    * Server list must be searchable and filterable.
    * Wizard should autosave progress.
    * Templates should support inline editing.

---

### 🎨 4. **Design Stylist Agent** (aka “Vibe Director”)

* **Purpose**: Applies an overall aesthetic direction (color palette, spacing rules, typography choices).
* **Goal**: Ensure UI is modern, minimal, and doesn’t look like default Tailwind/Bootstrap.
* **Design logic**: Not just trendy — grounded in UI consistency and brand fit.

---

### 🔍 5. **Component Notes Generator**

* **Purpose**: Adds context-aware tips to each UI component (e.g., for usability, accessibility, performance).
* **Goal**: Annotate each UI part with “how to make this better for real users.”
* **Example Output**:

    * Use progressive disclosure in the setup wizard.
    * Use monospace font for server command input areas.

---

### 🧩 6. **Implementation Planner**

* **Purpose**: Orders the components for design implementation based on dependency and impact.
* **Goal**: Work on core/shared elements first to speed up useful feedback loops.

---

### 🖼️ 7. **SVG Mockup Composer**

* **Purpose**: Turns the structured design spec, aesthetic direction, and UX tips into a complete SVG mockup.
* **Goal**: Output clean, readable SVGs that communicate intent clearly — like high-quality wireframes with design
  polish.

---

## ✅ High-Level Agent Orchestration Plan

Here’s the flow:

1. **User Input**: “Build an automation UI for managing Linux servers with analytics, server list, setup wizard, and
   templates.”

2. **Step 1 – Clarifier Agent**
   → Reformulates vague input into a clear, actionable brief.

3. **Step 2 – UI Scope Decomposer**
   → Breaks that brief into concrete screens/components.

4. **Step 3 – UX Strategist**
   → Proposes layout logic, user flows, and key usage scenarios.

5. **Step 4 – Design Stylist Agent**
   → Chooses design direction (e.g. dark theme, soft borders, clean typography).

6. **Step 5 – Component Notes Generator**
   → Adds usability and interaction notes to each component.

7. **Step 6 – Implementation Planner**
   → Orders the build (e.g., shared header → server list → setup wizard).

8. **Step 7 – SVG Mockup Composer**
   → Renders everything as polished, SVG-based mockups.

---

## ✅ Example Output Artifact

Each run of the pipeline could result in:

* `PROJECT-BRIEF.md` – from the Clarifier
* `UI-COMPONENTS.md` – from the Decomposer
* `UX-FLOW-NOTES.md` – from the UX Strategist
* `DESIGN-SYSTEM.json` – from the Design Stylist
* `COMPONENT-NOTES.md` – from the Notes Generator
* `IMPLEMENTATION-ORDER.md` – from the Planner
* `UI-MOCKUPS.svg` – from the SVG Composer

---

Would you like help turning this into a prompt template, or should we mock up a full example run-through with one of
your input requests?
