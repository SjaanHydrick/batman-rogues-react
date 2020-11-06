import request from 'superagent';

const URL = process.env.REACT_APP_API_URL || 'https://salty-meadow-30783.herokuapp.com';

export async function fetchRogues() {
    try {
        const response = await request.get(`${URL}/rogues`);

        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function fetchRogue(someId) {
    try {
        const response = await request.get(`${URL}/rogues/${someId}`);

        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function fetchCategories() {
    try {
        const response = await request.get(`${URL}/categories`);

        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function createRogue(newRogue) {
    try {
        await request
        .post(`${URL}/rogues`)
        .send(newRogue);

        return;
    } catch(err) {
        throw err;
    }
}

export async function updateRogue(someId, newRogue) {
    try {
        await request
        .put(`${URL}/rogues/${someId}`)
        .send(newRogue);

        return;
    } catch(err) {
        throw err;
    }
}

export async function deleteRogue(someId) {
    try {
        await request.delete(`${URL}/rogues/${someId}`);

        return;
    } catch(err) {
        throw err;
    }
}