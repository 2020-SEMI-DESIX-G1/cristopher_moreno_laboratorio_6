FROM node:latest
WORKDIR /src

COPY package.json ./
RUN npm install 

#root // workdir
COPY . .

EXPOSE 3000

CMD ["node","main.js"]