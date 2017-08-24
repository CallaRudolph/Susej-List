# Craigslist
#### _Epicodus Angular Javascript: Angular CLI, Dynamic Routing, and Persistent Data with Firebase, August 24, 2017_
_**By Michelle Poterek and Calla Rudoloph**_

## Installation instructions
* $ `npm install`
* $ `bower install`
* for firebase:
* First off, you'll need to make a free account at Firebase's website. [Firebase](https://www.learnhowtoprogram.com/javascript/angular-extended/firebase-introduction-and-setup)
* Create a New Project. Select this option, provide a name for your new project, and select your Country/region from the drop-down menu.
* Select Add Firebase to your web app.
![Preview of instructions](src/assets/img/toWebapp.png)
* make src/app/api-keys.ts
* paste the code below into your api-keys.ts file.

````
export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };

````
* With the information provided in the modal, replace the "xxxx" variables with your own firebase credentials in your api-keys.ts file.
* In Terminal, run `$ ng serve`
* In your Browser (Chrome preferred) navigate to [http://localhost:4200/](http://localhost:4200/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## User Story
* As a user, I want to see all of the categories on the main page.
* As a user, I want to click a category to navigate to a page with all its listings.
* As a user, I want to click a listing to see its contents.
* As a user, I want to click on a listing to view its details.
* As a user, I want to add a new listing to a category of my choosing.
* As a user, I want the option to update my listing, if I need to.
* As a user, I want the option to delete my listing if I no longer need it.

## Screenshot of Program
![Preview of for Sale Post](src/assets/img/forSale.png)
_This image is a screenshot of an individual posting_

## Technologies Used
* Angular CLI
* NodeJS
* Bower
* TypeScript
* Firebase
* Bootstrap, CSS, and HTML

----

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
