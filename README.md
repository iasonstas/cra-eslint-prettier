## Available Scripts

In the project directory, you can run:

### `npm i`

To install all the packages and dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `Comments on the project`

Our application is built with TypeScript and adheres to the Airbnb style guide through the use of ESLint. We also use Prettier to ensure consistent formatting throughout the codebase. As a best practice, we have implemented a Husky pre-commit action to automate code quality checks before any changes are committed to version control.

The loading-fetching is taking place on the component-Home and the I let the top "navigation area" exist when the app is in loading phase.

Imported the font with the MUI way.

If the user presses again the same line I closed the other description.

The UX does not include the Loading page,the Description sector and the icons as svg's. I have proceeded with Material Icons for faster development.

Implemented the paging with the Paginator of Material UI.

For the SortBy the default Select from MUI is used

Implemented a dark view.

SortBy field animation for cleaner UX feel.

Utilized React Context for state management in our application, which features a double filtering mechanism to efficiently share state between a limited number of components. However, as the application grows in size and complexity, we recognize that more advanced state management solutions like React Query or Redux Toolkit may be better suited to handle the more complex state management needs of a larger application.

### `React-router`

Because of the nature of the project which is single page and view I have not used React-router for different paths.

### `SOLID principles`

Throughtout the project there have been used the SOLID principles.

Single Responsibility Principle (SRP): Components in React should have a single responsibility.

Open/Closed Principle (OCP): Components in React should be open for extension but closed for modification.

Liskov Substitution Principle (LSP): React components should be able to be substituted by other components that inherit from them.

Interface Segregation Principle (ISP): React components should have small, focused interfaces.

Dependency Inversion Principle (DIP): React components should depend on abstractions, not on concrete implementations.

# `Tests`

Few tests where implemented because of time constrictions I had with the use of React-testing-library and Jest.
