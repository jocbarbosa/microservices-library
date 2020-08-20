const express = require('express');

const routes = express.Router();

routes.get('/certifications', async (request, response) => {
    return response.json({ ok: true });
});

module.exports = routes;