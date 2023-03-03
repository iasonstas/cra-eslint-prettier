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

### `Comments`

The loading-fetching is taking place on the component-Home and the I let the top "navigation area" exist when the app is in loading phase
I have imported the font with the MUI way.
If the user presses again the same line I closed the other description.
The UX does not include the Loading page,the Description sector and the icons as svg's. I have proceeded with Material Icons for faster development.
I also Implemented the paging with the Paginator of Material UI.

I used for the sortBy the default Select from MUI and implemented a dark view.

### `React-router`

Because of the nature of the project which is single page and view I have not use React-router for different paths.

### `React Query`

I have use react query for the fetching so it caches the 100 repos and the makes the application feel faster and more responsive and for the Loading and Error handling. React Query provides a robust error handling mechanism that allows you to handle errors gracefully and display error messages to the user.

### `SOLID principles`

Single Responsibility Principle (SRP): Components in React should have a single responsibility.

Open/Closed Principle (OCP): Components in React should be open for extension but closed for modification.

Liskov Substitution Principle (LSP): React components should be able to be substituted by other components that inherit from them.

Interface Segregation Principle (ISP): React components should have small, focused interfaces.

Dependency Inversion Principle (DIP): React components should depend on abstractions, not on concrete implementations.
