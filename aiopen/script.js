import { config } from "dotenv";
config();

import { Configuration, OpenAIApi } from "openai";

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY
}));

openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content:"hello Chatgpt"}]
})
.then(res => {
    console.log(res.data.choices);
})
.catch(err => {
    console.error(err);
});
// const dotenv = require('dotenv');
// dotenv.config();

// const { OpenAIApi } = require('openai');

// // Correctly load the Configuration class
// const Configuration = require('openai').Configuration;

// const openai = new OpenAIApi(new Configuration({
//     apiKey: process.env.API_KEY
// }));

// openai.createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [{ role: "user", content: "hello ChatGPT" }]
// })
// .then(res => {
//     console.log(res.data.choices);
// })
// .catch(err => {
//     console.error(err);
// });
