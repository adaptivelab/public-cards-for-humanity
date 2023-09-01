## Project structure 

```
├── .github - GH actions config
├── functions - cloud functions
├── public - static assets
└── src - CRA-based frontend
    ├── assets
    ├── components
    ├── data
    ├── hooks
    ├── style
    └── utilities
```

## Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### Get content/translations

The content and translations are stored in Google Spreadsheets. You'll need to add the `GOOGLE_API_KEY` and `GOOGLE_SPREADSHEET_ID` to your `.env` file.

To get the content you run the following node script:

`yarn run get:content`

## Backend

This project is being built within Firebase's ecosystem. The project can be found on the [Firebase console, here](https://console.firebase.google.com/project/cards-for-humanity-3b28f/overview).

### Setup

To work on this locally, you'll have to install the [Firebase CLI](https://firebase.google.com/docs/cli#install-cli-mac-linux) on your system.

Run `firebase login` and you should be good to go. If you have any issues, let Sidd know.

### Cloud functions

Cloud functions can be found and developed somewhat independently in the `functions` folder. This may be a little confusing as it's sort of a project inside a project. The build process for this uses `npm` rather than `yarn` due to how Firebase bootstraps it, and runs on node 10.

To work on this locally, you'll need to first cd into the functions folder in your terminal and run `npm run setup` this will retrieve the environment configuration from the Firebase project and echo it localy so you can develop on it. You can then run `npm start` to spin up a local instance of the Firebase emulator with the functions running.

CI/CD is not set up for functions yet, so to deploy, you'll need to deploy them manually when you're done working on them by running `npm run deploy:be`

### Hosting

CI/CD is setup so that any new changes to master will deploy the frontend to Firebase. To deploy the frontend manually use the `yarn deploy:fe` command from the root of the project.