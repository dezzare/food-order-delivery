FROM node:18.4.0-alpine

WORKDIR /app/frontend/
COPY package*.json ./

RUN npm install
COPY . . 

EXPOSE 3000

CMD [ "npm", "run", "start" ]
