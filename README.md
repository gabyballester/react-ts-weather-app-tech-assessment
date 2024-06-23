# Project: Weather App

This is a weather forecast application that allows users to switch between different languages [Spanish, English] and cities [London, Toronto, Singapore]. This capability provides a personalized and adaptable experience, ensuring users can access relevant information conveniently and effectively.

## Used Technologies

- **Vite**: Fast, modern development setup.
- **React**: Front-end library for building user interfaces.
- **TypeScript**: Typed JavaScript at scale.
- **ESLint**: Pluggable linting utility for JavaScript and TypeScript.
- **Prettier**: Opinionated code formatter.
- **Husky**: Git hooks made easy.
- **Jest**: Delightful JavaScript testing.
- **React Testing Library**: Lightweight testing library for React.
- **Chakra UI**: Component library for styling.
- **i18Next**: Internationalization library for English and Spanish translations.
- **Redux Toolkit**: State management library for managing global states.

### Getting Started

1. **Clone the repository**

```
  git clone <repository-url>
  cd <repository-directory>
```

2. **Set up environment variables**

Ensure you have a .env file in the root of your project. You can use the provided .env.sample file as a template. This file should include the necessary endpoints and API key for the application to run correctly.

3. **Install dependencies**:

```
npm install
```

4. **Start the development server:**

```
  npm run dev
```

### Available Scripts

In the project directory, you can run:

```npm run dev: Runs Vite in development mode.
npm run build: Compiles TypeScript and builds the project for production.
npm run lint: Lints TypeScript and TypeScript React files using ESLint.
npm run lint:fix: Lints and fixes TypeScript and TypeScript React files using ESLint.
npm run format: Formats code using Prettier.
npm run preview: Starts Vite in preview mode.
npm run prepare: Sets up Husky Git hooks.
npm run pre-commit: Runs lint-staged and then tests before committing.
npm run test: Runs Jest to execute tests.
npm run test:watch: Runs Jest in watch mode.
npm run test:watch:all: Runs Jest in watch all mode.
```

### Testing

In addition to a dummy test, there are tests to ensure it behaves as expected, which are listed here:

- App.test.tsx

### Contributing

This is a public contribution, so feel free to customize it, and submit pull requests if you have any improvements to suggest.
