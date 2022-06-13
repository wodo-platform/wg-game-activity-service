FROM node:14.18-alpine As development


WORKDIR /usr/src/app

COPY package*.json ./



COPY . .

RUN npm run build


FROM node:14.18-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}


WORKDIR /usr/src/app

COPY package*.json ./

COPY . .
 
COPY --from=development /usr/src/app/node_modules ./node_modules

COPY --from=development /usr/src/app/dist ./dist

ARG PORT=3000
ENV PORT=${PORT}

EXPOSE ${PORT}

# Start the application
CMD ["npm", "run", "start:prod"]