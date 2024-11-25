FROM node:23-alpine3.20 as dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile


FROM node:23-alpine3.20 as prod
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
