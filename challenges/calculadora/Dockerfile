FROM node:14-alpine

COPY . /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

RUN yarn install
RUN yarn build
EXPOSE 3000

#
# This container needs to be runned in interactive mode (tty)
#
ENTRYPOINT ["yarn", "start", "PORT=3000"]