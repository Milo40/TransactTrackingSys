FROM node:19
RUN mkdir -p /usr/transactTrackingSys/clientApp
WORKDIR /usr/transactTrackingSys/clientApp
COPY /clientapp/package.json .
COPY /clientapp/package-lock.json .
COPY /clientapp/.env.local .
RUN mv .env.local .env
RUN npm install
COPY /clientapp/* .
RUN npm run build
RUN npm install -g serve
EXPOSE 4000
CMD [ "serve -s -p 4000", "build" ]
