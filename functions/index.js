const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { app } = require("firebase-admin");
const stripe = require("stripe")(
  "sk_test_51JXn42SDzWaHifrTWim68Erjeyn10p9jpGmH3kEmSaMZVK350PAIkBeM7ampSJc3MUmLYOpW0parnqWeWQscx3oD0051RYqshs"
);

// - API

// - App config
const App = express();

// - Middlewares
App.use(cors({ origin: true }));
App.use(express.json());

// - API routes
App.get("/", (request, response) => response.status(200).send("hello world"));

App.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Paymen request aaila reee!!! Etiki tanka ra : ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // Subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(App);

// Example endpoint
// http://localhost:5001/clone-3d78e/us-central1/api
