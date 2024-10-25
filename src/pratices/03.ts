// Criando um server usando Fastify
import Fastify, { FastifyInstance } from 'fastify';
import process from 'node:process';

const app: FastifyInstance = Fastify({
  logger: true,
});

app.get('/ping', async function handler(request, reply) {
  return { pong: 'its works' };
});

export const server = async () => {
  try {
    await app.listen({ port: 3001 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

server();
