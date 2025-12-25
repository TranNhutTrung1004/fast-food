# Project Structure

This document describes the recommended, company-standard React + Vite project structure for this repository.

Top-level layout (recommended):

- /public - static public assets used by Vite (already present)
- /src - application source code
  - /src/components - small, reusable UI components
  - /src/pages - route-level components (one per route)
  - /src/layouts - layout wrappers (Header/Footer, page shells)
  - /src/features - feature folders grouping domain logic (optional)
  - /src/hooks - custom React hooks
  - /src/services - API clients, data fetching, wrappers
  - /src/store - state management (Redux/Context/other)
  - /src/utils - pure helpers and utility functions
  - /src/styles - global CSS / variables / theme
  - /src/assets - images, icons, fonts
  - /src/config - runtime/static configuration
  - /src/types - TypeScript types (if using TS)
  - /src/constants - app-wide constants
  - /src/lib - third-party integrations or small libraries

- /docs - project documentation (this file)
- /tests - unit/e2e tests
- /ci - CI pipeline configs
- /scripts - helper scripts and dev tooling

## Migration notes

1. Create feature or page folders and move files in small commits. Example:
   - Move `src/component/Button.jsx` -> `src/components/Button/Button.jsx` and add an `index.js` to export it.
2. Update imports using an automated codemod or a find-and-replace across the repo. Replace old paths like `../component` with `../components`.
3. Consider adding path aliases (in `vite.config.js` and `jsconfig.json`/`tsconfig.json`) to simplify imports:
   ```json
   // example jsconfig.json
   {
     "compilerOptions": {
       "baseUrl": "./",
       "paths": {
         "@/*": ["src/*"]
       }
     }
   }
   ```
4. Add tests for moved components and run lint/build to validate.

## Next steps (recommended)

- I can help move existing files and update imports automatically with a codemod if you want.
- Add `jsconfig.json`/`tsconfig.json` path aliases and update `vite.config.js` accordingly.
- Add baseline tests and CI pipeline if required.
