# Blink Form Components - Design Analysis & Updates

## Analysis Date
2026-03-05

## Material Design Specifications (Blink uses MDC)

### Typography
- **Label:** 12px, font-weight 600, uppercase, letter-spacing 0.5px, rgba(0,0,0,0.87)
- **Input Text:** 14px, font-weight 400, rgba(0,0,0,0.87)
- **Helper Text:** 12px, font-weight 400, rgba(0,0,0,0.54)
- **Error Text:** 12px, font-weight 500, color #ED5958

### Spacing (8px Grid)
- Label to input: 8px
- Container padding: 12px (horizontal), 10px (vertical for standard)
- Between elements: 8px

### Borders & Rounding
- **Border Radius:** 8px (Material Design standard for inputs)
- **Border Width:** 1px
- **Border Color (default):** rgba(0,0,0,0.12)
- **Border Color (hover):** rgba(0,0,0,0.2)
- **Border Color (focus):** #77c2f7
- **Border Color (error):** #ED5958

### Elevation (Box Shadows)
- **Default (resting):** 0 2px 4px rgba(0,0,0,0.08)
- **Hover:** 0 4px 8px rgba(0,0,0,0.12)
- **Focus:** 0 4px 8px rgba(119,194,247,0.2)
- **Error:** 0 2px 4px rgba(237,89,88,0.12)
- **Disabled:** none

### Background Colors
- **Default:** #ffffff
- **Hover (if not focused):** #ffffff with elevated shadow
- **Focus:** #ffffff
- **Disabled:** rgba(0,0,0,0.05)
- **Error:** #ffffff (not tinted)

### Components to Update

#### 1. Input (Base Component)
Current issues:
- Border-radius 4px → should be 8px
- No elevation/shadow
- Missing hover state
- Padding inconsistent

#### 2. TextInput (Form Component)
Current issues:
- Background color #f5f5f5 → should be #ffffff
- Border-radius 4px → should be 8px
- Missing proper elevation
- Focus shadow outdated (3px spread) → should be modern elevation
- Label typography needs refinement
- Missing hover state

#### 3. Select (Dropdown)
Current issues:
- Just updated but verify border-radius is 8px (not 6px)
- Verify shadows match elevation system
- Option styling needs to match

#### 4. Additional Components Needed
- DateInput (uses date picker)
- TimeInput (uses time picker)
- TextArea (multi-line text)
- Checkbox (already fixed SVG)
- Radio (if exists)

### Color Palette Reference
- Primary Blue: #77c2f7 (focus/active states)
- Error Red: #ED5958
- Text Primary: rgba(0,0,0,0.87)
- Text Secondary: rgba(0,0,0,0.54)
- Border: rgba(0,0,0,0.12)
- Background: #ffffff
- Disabled Background: rgba(0,0,0,0.05)

### Implementation Strategy
1. Create a unified design tokens file (variables)
2. Update all input/select/textarea components with consistent styles
3. Ensure all states covered (default, hover, focus, disabled, error)
4. Test all components in Storybook with visual regression
