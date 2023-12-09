FROM node:18-alpine
LABEL authors="Briane"

ENTRYPOINT ["top", "-b"]

WORKDIR /app