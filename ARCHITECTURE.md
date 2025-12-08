# Component Architecture

## Component Hierarchy

```
App (MLOpsRoadmap)
│
├── SuccessConfetti
│   └── Shows celebration animation when phase completes
│
├── Header
│   ├── Title and description
│   ├── Total progress indicator
│   └── Progress bar
│
├── PhaseCard (for each phase)
│   ├── Phase header (clickable)
│   │   ├── Lock/Unlock icon
│   │   ├── Phase icon
│   │   ├── Title and description
│   │   ├── Progress percentage
│   │   └── Expand/collapse chevron
│   │
│   ├── ModuleCard (for each module in phase)
│   │   ├── Module title with icon
│   │   ├── Complete/incomplete button
│   │   ├── Key topics list
│   │   ├── Exercise (optional)
│   │   └── Resources (optional)
│   │
│   └── ExitCriteria
│       └── List of questions to validate learning
│
├── CapstoneProject
│   ├── Project title
│   ├── Description
│   └── Step-by-step breakdown
│
└── Footer
    └── Motivational message
```

## Data Flow

```
┌─────────────────────────────────────────────────┐
│                   App Component                  │
│                                                  │
│  ┌────────────────────────────────────────────┐ │
│  │         Custom Hooks                        │ │
│  │  ┌──────────────┐  ┌──────────────────┐   │ │
│  │  │ useProgress  │  │ usePhaseExpansion│   │ │
│  │  │              │  │                  │   │ │
│  │  │ - completed  │  │ - expandedPhases │   │ │
│  │  │ - toggleItem │  │ - togglePhase    │   │ │
│  │  └──────────────┘  └──────────────────┘   │ │
│  └────────────────────────────────────────────┘ │
│                                                  │
│  ┌────────────────────────────────────────────┐ │
│  │         Data & Utils                        │ │
│  │  ┌──────────────┐  ┌──────────────────┐   │ │
│  │  │ roadmapData  │  │ progressUtils    │   │ │
│  │  │              │  │                  │   │ │
│  │  │ - phases     │  │ - calculate      │   │ │
│  │  │ - capstone   │  │ - check unlock   │   │ │
│  │  └──────────────┘  └──────────────────┘   │ │
│  └────────────────────────────────────────────┘ │
│                                                  │
│            │                    │                │
│            ▼                    ▼                │
│  ┌─────────────────┐  ┌─────────────────────┐  │
│  │   Components    │  │   localStorage      │  │
│  │                 │  │                     │  │
│  │ - Header        │  │ - save progress     │  │
│  │ - PhaseCard     │  │ - load progress     │  │
│  │ - ModuleCard    │  │                     │  │
│  │ - etc...        │  │                     │  │
│  └─────────────────┘  └─────────────────────┘  │
└─────────────────────────────────────────────────┘
```

## State Management Flow

### Progress Tracking Flow

```
User clicks module checkbox
        ↓
handleToggleModule(itemId)
        ↓
toggleItem(itemId) in useProgress hook
        ↓
Update completedItems state
        ↓
Save to localStorage
        ↓
Check if phase completed
        ↓
If yes → Show confetti animation
```

### Phase Expansion Flow

```
User clicks phase header
        ↓
onTogglePhase(phaseId)
        ↓
togglePhase(phaseId) in usePhaseExpansion hook
        ↓
Update expandedPhases state
        ↓
Component re-renders with expanded/collapsed view
```

### Progress Calculation Flow

```
On every render
        ↓
calculateTotalProgress(phases, completedItems)
        ↓
Count total modules
        ↓
Count completed modules
        ↓
Return percentage
        ↓
Display in Header component
```

## Component Props Flow

### PhaseCard Props

```javascript
<PhaseCard
  phase={phaseData}              // Phase data object
  progress={percentage}           // Calculated progress
  isUnlocked={boolean}           // Can user access?
  isExpanded={boolean}           // Currently expanded?
  completedItems={object}        // All completion states
  onTogglePhase={function}       // Toggle expansion
  onToggleModule={function}      // Mark module complete
/>
```

### ModuleCard Props

```javascript
<ModuleCard
  module={moduleData}            // Module data object
  isCompleted={boolean}          // Completion state
  onToggle={function}            // Toggle completion
/>
```

## File Dependencies

```
App.jsx
├── imports Header from './components/Header'
├── imports PhaseCard from './components/PhaseCard'
│   └── PhaseCard imports ModuleCard
│       └── ModuleCard imports ExitCriteria
├── imports CapstoneProject from './components/CapstoneProject'
├── imports SuccessConfetti from './components/SuccessConfetti'
├── imports useProgress from './hooks/useProgress'
├── imports usePhaseExpansion from './hooks/usePhaseExpansion'
├── imports roadmapData from './data/roadmapData'
├── imports utils from './utils/progressUtils'
└── imports constants from './constants'
```

## Styling Architecture

```
index.css (Global styles)
    ↓
App.css (Application styles)
    ├── Bootstrap import
    ├── CSS variables
    ├── Component-specific classes
    ├── Animations
    └── Responsive breakpoints
```

## Key Design Patterns Used

1. **Container/Presenter Pattern**

   - App.jsx = Container (logic)
   - Components = Presenters (UI)

2. **Custom Hooks Pattern**

   - useProgress = Progress management
   - usePhaseExpansion = UI state management

3. **Composition Pattern**

   - Components compose smaller components
   - Props passed down hierarchy

4. **Single Source of Truth**

   - roadmapData.js = Content data
   - localStorage = Progress data
   - Hooks = State management

5. **Separation of Concerns**
   - Components = UI rendering
   - Hooks = State logic
   - Utils = Business logic
   - Data = Content
   - Constants = Configuration
