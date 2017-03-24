FROM node:onbuild

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

CMD [ "ls"]
CMD [ "pwd"]

# Install app dependencies
COPY ./NodeExpressApp1/NodeExpressApp1/package1.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080
CMD [ "npm", "start", "app.js" ]