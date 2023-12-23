FROM oven/bun:latest AS base

WORKDIR /home/shaharyar/projects/automation

COPY . .

EXPOSE 3000

RUN bun install

CMD [ "bun", "run", "dev" ]