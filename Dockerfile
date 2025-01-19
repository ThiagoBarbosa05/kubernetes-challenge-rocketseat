FROM node:20.17.0 AS build
WORKDIR /app

RUN npm install -g pnpm

COPY pnpm-lock.yaml ./
COPY package.json ./
RUN pnpm install

COPY . .
RUN pnpm run  build
RUN pnpm prune && pnpm cache delete

FROM node:20.17.0-alpine
WORKDIR /app
RUN npm install -g pnpm

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

EXPOSE 3000

CMD ["pnpm", "run", "start:prod"]
