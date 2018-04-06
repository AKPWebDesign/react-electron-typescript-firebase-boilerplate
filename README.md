# react-electron-typescript-firebase-boilerplate

This is a boilerplate for using React with TypeScript, publishing to Firebase,
and optionally loading the published and development sites in an Electron wrapper.  

**I don't recommend using this for anything.** But hey, don't listen to me, I'm not
your boss.  

## Getting Started

First, you'll need to clone this repo with `git clone https://github.com/AKPWebDesign/react-electron-typescript-firebase-boilerplate.git`.
Next, navigate to each directory within the repo, running either `yarn` or `npm install`
to grab all the necessary dependencies. Finally, begin hacking away on your app
in the `react` folder. Once you're done hacking away, you can run some of the scripts
available in that folder to test and/or deploy the app.

*Note: At some point, you'll likely need to set up the app for Firebase.*
Most of the configuration for this has been done, but you'll still need to associate
the app with your Firebase project. You can accomplish this by running the command
`firebase use <project-id>`, after installing `firebase-tools` and logging in. 
See https://firebase.google.com/docs/hosting/quickstart for more information.

## Folder Overview

`electron-wrapper`: Contains the very simple Electron wrapper, used to load either
the live (published) version of your app, or the development version. Only portion
of the boilerplate that uses JavaScript, rather than TypeScript.  

`functions`: Firebase functions folder, set up for TypeScript, ready to be added to
and deployed.  

`react`: The React boilerplate, set up for TypeScript. This is where you'll likely
want to start adding new things.  

## Script Overview

There are helpful aliases for all npm scripts located at the top level of the project,
for ease of access. Each script alias just calls the proper script from one of the
other folders. Feel free to look at the `package.json` files in each folder to see
how this has been configured.

#### General
`yarn start`: Starts the React packager with Webpack hot reload enabled for development.  
`yarn start:electron`: Same as above, additionally opening the Electron wrapper in development mode.  
`yarn start:prebuilt`: Builds the app for deployment and begins serving it on localhost:3000 statically.  
`yarn start:prebuilt:electron`: Same as above, additionally opening the Electron wrapper in development mode.  
`yarn lint`: Lints each subproject.  
`yarn build`: Builds the React app and Cloud Functions.  
`yarn test`: Runs tests on the React portion of the app.  
`yarn serve`: Serves the React build folder on localhost:3000.  

#### Electron-specific
`yarn electron:start`: Starts the Electron wrapper in production mode.  
`yarn electron:start:dev`: Starts the Electron wrapper in development mode.  
`yarn electron:package`: Packages the Electron wrapper.  
`yarn electron:make`: Builds the Electron wrapper into a final executible/installer.  
`yarn electron:lint`: Lints the Electron wrapper.  

#### Functions-specific
`yarn functions:lint`: Lints the Firebase Cloud Functions.  
`yarn functions:build`: Compiles the Firebase Cloud Functions TypeScript.  
`yarn functions:serve`: Serves the Firebase Cloud Functions locally.  
`yarn functions:shell`: Runs the Firebase Cloud Functions shell.  
`yarn functions:start`: Alias for `yarn functions:shell`.  
`yarn functions:logs`: View the Firebase Cloud Functions logs in your console.

#### Deployment
`yarn deploy`: Deploys the app and functions to Firebase.  
`yarn deploy:web`: Deploys only the React app to Firebase.  
`yarn deploy:functions`: Deploys only the functions to Firebase.  
`yarn deploy:electron`: Deploys the Electron app to GitHub Releases.  
