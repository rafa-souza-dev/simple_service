import fastify from "fastify";

const app = fastify()

app.get('/', (req) => {
    const { numero1, numero2 } = req.query

    return Number(numero1) + Number(numero2)
})

app.listen({
    port: 8000
}).then(() => console.log('HTTP server running...'))
