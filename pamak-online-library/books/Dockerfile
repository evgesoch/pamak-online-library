FROM node:latest

RUN apt-get update && apt-get install nano
RUN npm install -g nodemon

COPY . /usr/src/books

ENV MONGODBATLAS_USERNAME username
ENV MONGODBATLAS_PASSWORD password

WORKDIR /usr/src/books

EXPOSE 3000

CMD ["nodemon", "-L", "/usr/src/books/books.js"]
