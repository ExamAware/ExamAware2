FROM node:22-alpine
LABEL org.opencontainers.image.source="https://github.com/ExamAware/ExamAware2"
LABEL org.opencontainers.image.licenses="GPL-3.0-only"
WORKDIR /app
ENV NODE_ENV=production
COPY . .
EXPOSE 3100
ENTRYPOINT ["/bin/sh", "-c", "/app/scripts/prestart.sh && exec node packages/control-server/dist/main.js"]
