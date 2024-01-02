# React Redux Fruit Management App

This is a simple React application demonstrating two different methods of managing state with Redux: the traditional `connect` method and the modern `useSelector` and `useDispatch` hooks.

## Table of Contents

- [Project Overview](#project-overview)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Methods](#methods)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project showcases two methods of integrating Redux with a React application to manage a list of fruits. It consists of two main components:

1. **First Method: Using the `connect` Method**
   - `AjouterFruit.js`: Component for adding a fruit using `connect`.
   - `ListeFruits.js`: Component for displaying and clearing the list using `connect`.
   - `App.js`: Entry point for the first method.

2. **Second Method: Using Hooks (`useSelector` and `useDispatch`)** 
   - `AjouterFruit2.js`: Component for adding a fruit using hooks.
   - `ListeFruits2.js`: Component for displaying and clearing the list using hooks.
   - `App2.js`: Entry point for the second method.

## Folder Structure

- `/composants`: Contains React components for adding and listing fruits.
- `/store`: Contains the Redux root reducer (`reducerRoot.js`).

## Installation

1. Clone the repository.

2. Navigate to the project folder.

3. Install dependencies.

## Usage

1. Run the application: `npm start`

2. Open your browser and go to `http://localhost:3000`

## Methods

- **First Method (`connect`):**
  - Open `App.js` to see the entry point for the first method.
  - Components using `connect` method are located in the `/composants` folder.

- **Second Method (Hooks):**
  - Open `App2.js` to see the entry point for the second method.
  - Components using hooks are located in the `/composants` folder.

## Contributing

1. Fork the repository.

2. Create a new branch: `git checkout -b feature-name`.

3. Make your changes and commit: `git commit -m 'Add new feature'`.

4. Push to the branch: `git push origin feature-name`.

5. Submit a pull request.