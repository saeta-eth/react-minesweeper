# Minesweeper

> Minesweeper built on React and Redux.

<p align="center">
  <img src="https://github.com/slorenzo/react-stopwatch/blob/master/media/minesweeper.gif?raw=true" alt="Demo"/>
</p>

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/slorenzo/react-minesweeper.git
```

### Installation

```sh
  yarn
```

### Run

```sh
  yarn start
```

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will see the build errors and lint warnings in the console.

### Deployment

```sh
  yarn deploy
```

Every time you deploy a project, `now` will provide you with a new, unique URL.

### Technical Decisions.

- I used [create-react-app](https://github.com/facebookincubator/create-react-app) to build the base scaffold.
- I used [React-Router](https://reacttraining.com/react-router/web) to use different URLs.

### Folder Structure.

All the application code are in `src` folder:
- Actions: You will see the redux actions. For more information, visit: [Redux-Actions](http://redux.js.org/docs/basics/Actions.html)
- Components: You will see stateless components, just JSX and properties are passed as arguments.
- Constants: You will see all constant variables.
- Containers: You will see the react-redux connection, it is statefull or it could be if the project were to grow.
- Reducers: You will see the reduction reducer. For more information visit: [Redux-Reducers](http://redux.js.org/docs/basics/Reducers.html)
- Routes: You will see all routes.
- Store: You will see the store settings.
- Utils: You will see functions that help in the logic of the business and it sort the code.

## Made with ❤ by

- Sebastian Lorenzo (Javascript developer)
- E-mail: [SebastianLorenzo@gmail.com](mailto:SebastianLorenzo@gmail.com)
- StackOverflow: [sebastian-lorenzo](http://stackoverflow.com/users/1741027/sebastian-lorenzo?tab=profile)

## License

MIT license. Copyright © 2017.