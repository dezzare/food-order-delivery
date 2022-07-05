FROM node:18.4.0-alpine

WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . . 

EXPOSE 5000

CMD [ "sleep", "60", "&&", "npm", "run", "dev" ]
