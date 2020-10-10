FROM node:14-alpine

COPY . /app
WORKDIR /app

RUN yarn install
EXPOSE 3000

ENTRYPOINT ["yarn", "start", "PORT=3000"]