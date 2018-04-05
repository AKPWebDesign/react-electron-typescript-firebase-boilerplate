/**
 * This file declares any modules that should be considered globally available,
 * but aren't being properly picked up by TSLint.
 */

// Images
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'

// window.__REDUX_DEVTOOLS_EXTENSION__, for redux dev tools compatibility
declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any,
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
}
