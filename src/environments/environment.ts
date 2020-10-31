// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDcqUYA_ATPB0JU-bJaDxS69C2gC1BhN0I",
    authDomain: "digital-garden-edb9e.firebaseapp.com",
    databaseURL: "https://digital-garden-edb9e.firebaseio.com",
    projectId: "digital-garden-edb9e",
    storageBucket: "digital-garden-edb9e.appspot.com",
    messagingSenderId: "150390508570",
    appId: "1:150390508570:web:08ab34c8af95bd94a495a3",
  },
  plantsCollection: 'test-plants',
  plantsMedia: '/test/'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
