# 🧪 Add tests for custom.js

### 🎯 What
This PR introduces tests for `js/custom.js`, filling a previously missing testing gap. Testing global jQuery scripts natively in jsdom can be challenging, but this update sets up a solid mock environment that loads and exercises these scripts effectively.

### 📊 Coverage
The new tests provide coverage for:
- **Theme Functions**: Checks if `setTheme` and `toggleTheme` correctly interact with `localStorage` and modify the document `className`.
- **UI Interactions**: Tests scrolling behavior (`menu-shrink`), the search button overlay toggle, the visibility and animation of the `go-top` button, and the toggling behavior of the accordion UI.

### ✨ Result
These tests offer a robust safety net for refactoring UI interactions and theme behavior in `custom.js` without risking regressions.
