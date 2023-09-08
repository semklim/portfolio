# React + TypeScript + Vite + SCSS + SVGR + ESLint + Prettier + AirBnB + Feature Sliced Design

Welcome to the project powered by a robust tech stack and an organized code structure. This README.md file will guide you through the project setup, folder structure, and provide some context on how to get started.

## Table of Contents

- [Folder Structure](#folder-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Folder Structure

The project is organized using the [Feature Sliced Design](https://feature-sliced.design/) approach, which divides the codebase into meaningful sections:

- **app**: This folder contains app-wide settings, styles, and providers. It's a great place to configure global settings and provide context to the entire application.

- **pages**: The compositional layer where full pages are constructed from entities, features, and widgets. This is where you define the structure of your application's screens.

- **widgets**: This folder is dedicated to combining entities and features into meaningful blocks. Widgets can be reused across different pages or features, promoting code reusability.

- **features**: Features represent user interactions and actions that bring business value to the user. Each feature should encapsulate a specific piece of functionality.

- **entities**: Business entities live here. These are the core data structures and models that represent the fundamental concepts of your application.

- **shared**: Reusable functionality detached from the specifics of the project/business. This can include utility functions, common components, or any code that can be shared across various parts of your application.

## Tech Stack

- **_[React](https://react.dev/)_**: A popular JavaScript library for building user interfaces.
- **_[TypeScript](https://www.typescriptlang.org/)_**: Adds static types to JavaScript, enhancing code quality and developer experience.
- **_[Vite](https://vitejs.dev/)_**: A fast build tool for modern web development.
- **_[SCSS](https://sass-lang.com/)_**: A preprocessor for CSS, providing a more organized and maintainable way to style your components.
- **_[SVGR](https://react-svgr.com/)_**: A tool to transform SVG files into React components, making it easy to work with SVG graphics in your project.
- **_[ESLint](https://eslint.org/)_**: A linter tool to analyze your code for potential errors and enforce code style conventions.
- **_[Prettier](https://prettier.io/)_**: An opinionated code formatter to ensure consistent code formatting.
- **_[AirBnB](https://airbnb.io/javascript/react/)_**: A popular ESLint and Prettier configuration that enforces coding standards and best practices.

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see your application in action.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE), which means you are free to use, modify, and distribute the code in accordance with the terms of the license.
