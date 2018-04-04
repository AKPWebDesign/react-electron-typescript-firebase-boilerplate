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
the app with your Firebase project. See https://firebase.google.com/docs/hosting/quickstart
for more information.

## Folder Overview

`electron-wrapper`: Contains the very simple Electron wrapper, used to load either
the live (published) version of your app, or the development version. Only portion
of the boilerplate that uses JavaScript, rather than TypeScript.  

`functions`: Firebase functions folder, set up for TypeScript, ready to be added to
and deployed.  

`react`: The React boilerplate, set up for TypeScript. This is where you'll likely
want to start adding new things.  

## Script Overview

For the most part, you'll want to run scripts from within the `react` folder, unless
you change things significantly. I'll be documenting the scripts using `yarn`, but
you can also run them with `npm` if you wish. Available scripts:  

`yarn start`: Starts the React packager with Webpack hot reload enabled for development.  
`yarn start:electron`: Same as above, additionally opening the Electron wrapper in development mode.  
`yarn start:prebuilt`: Builds the app for deployment and begins serving it on localhost:3000 statically.  
`yarn start:prebuilt:electron`: Same as above, additionally opening the Electron wrapper in development mode.  
`yarn build`: Builds the app for deployment.  
`yarn test`: Runs tests on the app.  
`yarn serve`: Serves the build folder on localhost:3000.  
`yarn electron`: Starts the Electron wrapper in production mode.  
`yarn electron:dev`: Starts the Electron wrapper in development mode.  
`yarn deploy`: Deploys the app and functions to Firebase.  
`yarn deploy:web`: Deploys only the React app to Firebase.  
`yarn deploy:functions`: Deploys only the functions to Firebase.  
