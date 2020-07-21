FROM node:latest

RUN apt-get update && apt-get install nano
RUN npm install -g nodemon

COPY . /usr/src/customers

ENV MONGODBATLAS_USERNAME username
ENV MONGODBATLAS_PASSWORD password

WORKDIR /usr/src/customers

EXPOSE 3050

CMD ["nodemon", "-L", "/usr/src/customers/customers.js"]
