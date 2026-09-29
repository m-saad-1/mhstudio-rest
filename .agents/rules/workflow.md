# Workflow & Regression Prevention Rules

## 1. Document Every Fix
Whenever you apply a bug fix, performance optimization, or structural change to this codebase, you **MUST** explain the fix properly and document it in a separate markdown file (e.g., in this `.agents/rules/` directory or a dedicated `Docs/` directory).

## 2. Prevent Regressions
Before attempting to fix a new issue or refactor code, you **MUST** review the documented past fixes and performance rules. 
- Ensure that your new changes do not undo or break any previously established optimizations (e.g., if a component is specifically configured for SSR or dynamic imports for performance reasons, do not change it without explicit permission).
- If you are optimizing for Desktop, you must ensure that your changes do not degrade Mobile performance metrics, and vice versa.

## 3. Clear Explanations
When delivering a fix, explicitly document the root cause and the exact solution implemented. This context is critical for ensuring that future agents or developers do not inadvertently revert the change.
