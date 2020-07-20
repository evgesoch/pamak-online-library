# pamak-online-library
A minimal, containerized microservices application that manages an online library service.

:warning: **The project is still under development, no guarantees granted that if you clone the repository it's gonna be completely functional** :warning:

## General Info
The app was developed in a pc running Windows 8.1 and the terminal used for setting up the Docker containers is **Git Bash**. 

## Setup
In order to run the application, follow the steps below: 
1. Change the ENV variables inside the Dockerfiles to match your own credentials for MongoDB Atlas
2. (**_The following instructions are only for running each container individually without docker-compose_**) ```$ cd``` into every service directory (e.g. ```$ cd books```) and build the service image, e.g. for the books service type the command ```$ docker build -t books_service:1.0```
3. Then run the container with ```$ docker run -v "/$(pwd):/usr/src/books" --publish 3000:3000 --name bs books_service:1.0```
4. Repeat for the other containers and you're good to go

:information_source: No front-end has been implemented yet.

:information_source: Connecting to MongoDB Atlas requires to establish a secure connection between the container environment and the Atlas Cloud. Follow this [guide](https://docs.docker.com/engine/security/https/) for more info on how to achieve secure connection.

:information_source: The _docker-compose_ variant of the app is under development.
