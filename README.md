# React + Vite

Vite is essentially a modern frontend build tool that is designed to be super fast and developer-friendly, especially for frameworks like React, Vue, and Svelte.

Vite (pronounced like “veet”) is not a bundler like Webpack, though it does bundle for production.

Think of it as a development and build tool that replaces older tools like Webpack or Create React App (CRA).

```
npm create vite@latest my-app      # Scaffold a new app
npm install                        # Install dependencies
npm run dev                         # Run dev server with HMR
npm run build                       # Build for production (output in dist/)
npm run preview                     # Preview production build locally
```
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React 18 + GraphQL 16 + Apollo 3 
by default vite installed React 19, but due to version mismatch with Apollo 4

installed React 18

npm uninstall react react-dom

npm install react@18 react-dom@18

npm install @apollo/client@3 graphql

then imports

```
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
```

npm run dev starts at http://localhost:5173/

💡 Tip: For React + Vite apps, Static Site deployment is simpler than Web Service, unless you need server-side logic.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
