# Portfolio React.tsx + Featured-Sliced Design + SEO Optimization

Welcome to the project powered by a robust tech stack and an organized code structure. This README.md file will guide you through the project setup, folder structure, and provide some context on how to get started.

## Table of Contents

- [About Project](#about-project)
- [Folder Structure](#folder-structure)
- [Tech Stack and API](#tech-stack-and-api)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## About Project
   This website serves as a comprehensive portfolio showcasing my various projects and expertise in programming. Built on a robust tech stack it offers a dynamic and visually appealing user experience.
   
   Utilizing lazy-loading techniques for content and React components, the website achieves an impressive [Page speed score of 92](https://pagespeed.web.dev/analysis/https-semklim-vercel-app/ugefvxtg3c?form_factor=mobile) for mobile devices, ensuring optimal performance. Additionally, meticulous [SEO optimization has resulted in an 86 score](https://sitechecker.perfect-seo.com.ua/en/inner-optimization/analyzer/?url=semklim.vercel.app), enhancing the website's visibility and reach on search engines. Furthermore, it includes [Schema.org](https://schema.org/) microdata in [JSON+LD](https://www.quattr.com/seo-glossary#json-ld) format for enhanced search engine understanding.

   In addition to performance and SEO enhancements, the site incorporates a Content Security Policy (CSP) to prevent XSS attacks, ensuring a secure browsing experience for users.

   The architecture of the project is based on the principles of [Feature-Sliced Design](https://feature-sliced.design/), providing a structured and scalable foundation for seamless development and maintenance. With a focus on both technical excellence and user experience, this website serves as a testament to my skills and dedication to delivering high-quality web solutions.


## Folder Structure

The project is organized using the [Feature-Sliced Design](https://feature-sliced.design/) approach, which divides the codebase into meaningful sections:

- **app**: This folder contains app-wide settings, styles, and providers. It's a great place to configure global settings and provide context to the entire application.

- **pages**: The compositional layer where full pages are constructed from entities, features, and widgets. This is where you define the structure of your application's screens.

- **widgets**: This folder is dedicated to combining entities and features into meaningful blocks. Widgets can be reused across different pages or features, promoting code reusability.

- **features**: Features represent user interactions and actions that bring business value to the user. Each feature should encapsulate a specific piece of functionality.

- **entities**: Business entities live here. These are the core data structures and models that represent the fundamental concepts of your application.

- **shared**: Reusable functionality detached from the specifics of the project/business. This can include utility functions, common components, or any code that can be shared across various parts of your application.

## Tech Stack and API
### Tech

- **_[React](https://react.dev/)_**: A popular JavaScript library for building user interfaces.
- **_[Framer Motion](https://www.framer.com/motion/)_**: A simple and powerful JavaScript animation library for React.
- **_[TypeScript](https://www.typescriptlang.org/)_**: Adds static types to JavaScript, enhancing code quality and developer experience.
- **_[Vite](https://vitejs.dev/)_**: A fast build tool for modern web development.
- **_[SCSS](https://sass-lang.com/)_**: A preprocessor for CSS, providing a more organized and maintainable way to style your components.
- **_[SVGR](https://react-svgr.com/)_**: A tool to transform SVG files into React components, making it easy to work with SVG graphics in your project.
- **_[ESLint](https://eslint.org/)_**: A linter tool to analyze your code for potential errors and enforce code style conventions.
- **_[Prettier](https://prettier.io/)_**: An opinionated code formatter to ensure consistent code formatting.
- **_[AirBnB](https://airbnb.io/javascript/react/)_**: A popular ESLint and Prettier configuration that enforces coding standards and best practices.
  
### API
- **_[Emailjs](https://www.emailjs.com/)_**: Send text/html emails from your code to any smtp server.

  
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
