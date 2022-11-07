FROM node:19
RUN mkdir -p /usr/transactTrackingSys/scheduler
WORKDIR /usr/transactTrackingSys/scheduler
COPY /scheduler/package.json .
COPY /scheduler/package-lock.json .
COPY /scheduler/.env.local .
RUN mv .env.local .env
RUN npm install
COPY /scheduler/* .
RUN npm run build
CMD [ "node", "dist/index.js" ]
