FROM node:latest

# Basic
RUN mkdir -p /app
WORKDIR /app

# Setup
COPY package.json .
COPY yarn.lock .
RUN yarn install

# Run
CMD yarn start