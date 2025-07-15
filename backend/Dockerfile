FROM node:20

WORKDIR /app
COPY . .

RUN npm install
RUN npm run compile
EXPOSE 4000
CMD ["node", "dist/src/index.js"]