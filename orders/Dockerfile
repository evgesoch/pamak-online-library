FROM node:latest

RUN apt-get update && apt-get install nano
RUN npm install -g nodemon

COPY . /usr/src/orders

ENV MONGODBATLAS_USERNAME username
ENV MONGODBATLAS_PASSWORD password

WORKDIR /usr/src/orders

EXPOSE 3100

CMD ["nodemon", "-L", "/usr/src/orders/orders.js"]
