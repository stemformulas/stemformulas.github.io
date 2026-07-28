FROM node:26-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 8501

CMD ["npm", "start", "--", "-p", "8501"]
