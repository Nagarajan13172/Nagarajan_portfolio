FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5173

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html