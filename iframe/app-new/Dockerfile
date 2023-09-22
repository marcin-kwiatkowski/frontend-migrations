FROM node:18.15.0-alpine3.17 AS builder

WORKDIR /app

# Take package.json and install packages
COPY package.json package-lock.json ./
RUN npm ci && npm cache clean --force

# Take rest of source code
COPY . .

ARG E2E_ATTRIBUTES_ENABLED
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

FROM node:18.15.0-alpine3.17 AS runner
WORKDIR /app

ENV NODE_ENV=production

# Add user & group to run the application
RUN addgroup -S appgroup  \
    && adduser -S app -G appgroup \
    && chown app:appgroup /app
USER app

COPY --from=builder --chown=app:appgroup /app/public /app/public
COPY --from=builder --chown=app:appgroup /app/next.config.js /app/next.config.js
COPY --from=builder --chown=app:appgroup /app/node_modules /app/node_modules
COPY --from=builder --chown=app:appgroup /app/.next /app/.next
COPY --from=builder --chown=app:appgroup /app/package.json ./

CMD ["npm", "start"]
