FROM node:16-alpine3.15 As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:16-alpine3.15 as production

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