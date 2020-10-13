FROM node:14-alpine

COPY . /app
WORKDIR /app

RUN yarn install
EXPOSE 3004

ENTRYPOINT ["yarn", "start", "PORT=3004"]