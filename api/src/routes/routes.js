const express = require('express');

const routes = express.Router();

routes.get('/certifications', async (request, response) => {

    const msg = {
        user: {
            id: 1,
            name: "microservices student"
        },
        course: "kafka com Node JS",
        grade: 10
    };

    await request.producer.send({
        topic: 'issue-certificate',
        messages: [
            { value: JSON.stringify(msg) }
        ]
    });

    return response.json({ status: 'ok' });
});

module.exports = routes;