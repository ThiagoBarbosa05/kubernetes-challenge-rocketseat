FROM node:20.17.0 AS build
WORKDIR /app

RUN npm install -g pnpm

COPY pnpm-lock.yaml ./
COPY package.json ./
RUN pnpm install

COPY . .
RUN pnpm prisma generate
RUN pnpm run  build
RUN pnpm prune && pnpm cache delete

FROM node:23.6.0-slim AS production
WORKDIR /app
RUN npm install -g pnpm

RUN apt-get update -y && apt-get install -y openssl

COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

EXPOSE 3000

CMD ["pnpm", "run", "start:prod"]
