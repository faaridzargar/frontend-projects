import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("");

async function run(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  return text;
}

app.get("/", async (req, res) => {
  const prompt = "Introduce yourself";
  const text = await run(prompt);
  console.log(text);
  res.render("index.ejs", {
    text
  });
});

app.post("/send", async (req, res) => {
  const question = req.body["ask"];
  const text = await run(question);
  console.log(text);
  res.render("index.ejs", {
    text
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
