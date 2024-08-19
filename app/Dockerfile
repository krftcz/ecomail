FROM node:20-alpine

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update system
RUN apk update && apk upgrade
# RUN apk add git

# add pnpm
RUN corepack enable pnpm

# copy the app
COPY . /usr/src/nuxt-app/

# define environment variables
ARG ENV_NAME=${ENV_NAME}
ARG APP_DEBUG
ARG NUXT_SITE_NAME
ARG NUXT_SITE_ENV
ARG NUXT_PUBLIC_SITE_URL
ARG NUXT_APP_BASE_URL
ARG CMS_API_URL
ARG GQL_HOST
ARG WEBLOCK_PASSWORD
ARG WEBLOCK_ENABLED

# install dependencies
RUN pnpm install

# build server
RUN pnpm build:${ENV_NAME}

# expose 3000 on container
EXPOSE 3000

# start the app
CMD ["pnpm", "start"]
