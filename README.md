# Spring Boot + AngularJS demo #

> Demo for the integration of Spring Boot and AngularJS using TypeScript, Maven and Grunt

This demo project shows how to

- Write an AngularJS app in TypeScript
- Compile TypeScript sources into a single minified JavaScript file using Grunt
- Embed the Grunt build into the Maven build lifecycle
- Integrate an AngularJS app with a Spring Boot web application using the `$http` service and Spring `@RestController`

## Getting started ##

Please make sure to have the following software components installed in order to build the demo project:

- [Java Development Kit](http://www.oracle.com/technetwork/java/javase/downloads/index.html) (version 6 or better)
- [Maven](https://maven.apache.org/) (version 3 or better)
- [Node.js](https://nodejs.org/) (version 0.10 or better)
- Global installation of [Grunt](http://gruntjs.com/) (version 0.4.0 or better) - run: `npm install -g grunt-cli`
- Global installation of [Bower](http://bower.io/) (version 1.6 or better) - run: `npm install -g bower`

Build the project with Maven:

    mvn package

Run the Spring Boot application from the `target` directory:

    java -jar spring-boot-angularjs-demo-0.0.1.jar

Open the demo web page in your browser: [http://localhost:8080/](http://localhost:8080/)

## Project structure ##

### Spring Boot application ###

The Java web application resides in `src/main/java`. This tiny server app is made of three files:

- `Application.java`: Start class with the entry point for the application.
- `DemoController.java`: Simple Spring REST controller which serves a person object as JSON message on the URL path `/api/person`.
- `Person.java`: Java POJO class which defines person objects and is used by the controller.

### AngularJS application ###

The AngularJS web application resides in `src/main/webapp/static`. This directory contains a web project which could be developed independently of the surrounding Maven project. It contains the following files:

- `bower.json`: Bower configuration which defines the dependency to `angular`.
- `Gruntfile.js`: Grunt build configuration which defines the tasks to complete when building the project.
- `package.json`: NPM configuration which defines the dependencies required by the Grunt build.
- `tsd.json`: TSD configuration which defines the TypeScript definition files to be loaded from DefinitelyTyped.
- `html/index.html`: The simple AngularJS demo page which is viewed as the home page of the server application.
- `ts/angularjs-demo-app.ts`: TypeScript defining the demo AngularJS application module.
- `ts/angularjs-demo-controller.ts`: TypeScript defining the demo AngularJS controller used in the demo page.
- `ts/angularjs-demo-service.ts`: TypeScript defining the demo AngularJS service used by the controller.
- `typings/**`: TypeScript definition files downloaded via TSD.

## Build process ##

The Spring Boot application is built using Maven. The Java classes are compiled as usual. Additionally, the [grunt-maven-plugin](https://github.com/allegro/grunt-maven-plugin "grunt-maven-plugin") is used to execute the Grunt build during the compile lifecycle phase. Grunt is responsible for the following tasks:

- Download the AngularJS library via Bower
- Transpile the TypeScript sources of the AngularJS app to JavaScript
- Concatenate AngularJS and the demo app to one JavaScript file
- Minify the produced JavaScript files
- Copy the HTML and JavaScript files to the `static` folder of the Maven output directory

Once the Grunt build has finished the compiled resources of the AngularJS app are located in `target/classes/static` and so they are packaged into the JAR file along with the Spring Boot application classes.

## License ##

[MIT License](http://www.opensource.org/licenses/mit-license.php)
