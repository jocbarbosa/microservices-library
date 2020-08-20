import express from 'express';
import { Kafka } from 'kafkajs';

const app = express();

const kafka = new kafka({
    clientId: 'producer-api',
    brokers: ['kafka:9092', 'kafka2:9092']
});

app.get('/certifications', (request, response) => {
    return response.json({ ok: true });
})

app.listen(process.env.PORT || 3000);