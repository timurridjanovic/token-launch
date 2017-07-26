# CONSENSYS TOKEN LAUNCH:

**Description**: This is a small one page contribution page for a token launch. 

## Installation (with Docker):

* Install [Docker](https://www.docker.com)

* Build the docker image:

    `docker build -t="token-launch" .`

* Run a docker container with the created image:

    `docker run -it -p 3000:3000 token-launch`

* Once you're inside the container, you can run yarn start. This will execute both node and webpack.:

    `yarn start`

* Open the app in the browser at localhost:3000

* You can also execute unit tests by running the test command (with or without watch):
    
    `yarn test`
	`yarn test -- --watch`


## Installation (without Docker):

* Install yarn and navigate to the src directory:

	`cd src`

* Run yarn:

	`yarn`

* Run yarn start:

	`yarn start`

* Open the app in the browser at localhost:3000
