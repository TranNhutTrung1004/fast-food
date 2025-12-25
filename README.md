# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Project structure (recommended)

I've added a company-friendly folder layout for this React + Vite project and a detailed description at `docs/PROJECT_STRUCTURE.md`.

Short summary:

- `src/components` — reusable UI components
- `src/pages` — route-level page components
- `src/layouts` — layout wrappers (header/footer)
- `src/features` — grouped feature/domain folders (optional)
- `src/hooks` — custom hooks
- `src/services` — API clients and data-layer
- `src/store` — state management
- `src/utils` — utility functions
- `src/styles` — global styles / theme
- `src/assets` — images / icons / fonts
- `src/config`, `src/types`, `src/constants`, `src/lib`

See `docs/PROJECT_STRUCTURE.md` for migration notes and next steps (automated codemods, path aliases, tests, CI).
