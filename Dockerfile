FROM node:16-alpine3.16

WORKDIR /app

COPY package.json .
COPY yarn.lock .
COPY . .

RUN yarn install
EXPOSE 5000

ENV PORT=5000

RUN yarn build

CMD [ "yarn", "start:prod" ]