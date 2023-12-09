FROM node:21-alpine
LABEL authors="Briane"

ENTRYPOINT ["top", "-b"]

WORKDIR /app