const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { response, request } = require('express');
const stripe = require("stripe") ('sk_test_51HcYBEABQdNuFCUTgcKEUFeJ8xuIqP4gOLDkZCQbyKY1kCZHW3jfmNojshIW5KJBmvFGeDy0k53VlUBqQVchxBL400UwVpckzj')

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());


app.get('/', (request, response) => response.status(200).send('hello World'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Reacived BOOOM !!! for this amount >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    // OK-created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});

exports.api = functions.https.onRequest(app)

// http://localhost:5001/challange-7a663/us-central1/api