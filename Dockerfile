FROM node:8
LABEL maintainer="jovanibrasil@gmail.com"
USER root
    COPY dist/ /app
USER jenkins