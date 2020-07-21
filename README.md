# pamak-online-library
A minimal, containerized microservices application that manages an online library service.

## General info
:information_source: The app was developed in a pc running Windows 8.1 and the terminal used for setting up the Docker containers is **Git Bash**.

:information_source: No front-end has been implemented yet.

:information_source: Connecting to MongoDB Atlas requires establishing a secure connection between the container environment and the Atlas Cloud. Follow this [guide](https://docs.docker.com/engine/security/https/) for more info on how to achieve secure connection.

:information_source: The application was influenced by [Academind's Node.js tutorial](https://www.youtube.com/playlist?list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q).

## Setup
In order to run the application, follow the steps below: 
### Without using docker-compose
1. Change the ENV variables inside the Dockerfiles to match your own credentials for MongoDB Atlas.
2. ```$ cd``` into every service directory (e.g. ```$ cd books```) and build the service image, e.g. for the books service type the command ```$ docker build -t books_service:1.0```.
3. Then run the container with ```$ docker run -v "/$(pwd):/usr/src/books" --publish 3000:3000 --name bs books_service:1.0```.
4. Repeat for the other containers (don't forget to change the port to _3050_ for customers and _3100_ for orders service) and you're good to go.
### By using docker-compose
1. You can define the environment variables inside the _docker-compose.yml_ file instead of the _Dockerfiles_, but it's not necessary. But it would be better to store more building image logic into the _docker-compose.yml_ file rather than every individual service's _Dockerfile_.
2. ```$ cd``` into the project directory and type ```$ docker-compose up```. The app is now running.
