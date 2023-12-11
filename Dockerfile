FROM node:21-alpine
LABEL authors="Briane"

WORKDIR /app

COPY package.json yarn.lock ./

RUN ["npx", "yarn"]

COPY . .

EXPOSE 6969

CMD ["npx","yarn","start"]