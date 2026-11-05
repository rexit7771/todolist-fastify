import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export async function routes (fastify: FastifyInstance) {
    fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
        return {hello: 'world'};
    })
}