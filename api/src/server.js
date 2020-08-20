const express = require('express');
const kafka = require('kafkajs');

const routes = require('./routes/routes');
const app = express();

const kafkaClient = new kafka.Kafka({
    clientId: 'producer-api',
    brokers: ['localhost:9092']
});

const producer = kafkaClient.producer();

app.use((request, response, next) => {
    request.producer = producer;
    return next();
});

// Midlewares
app.use(routes);

const run = async () => {
    await producer.connect();

    app.listen(process.env.PORT || 3000);
}

run().catch(console.error);


