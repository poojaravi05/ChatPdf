const express = require('express');
const pdf = require('pdf-parse');
const axios = require('axios');
const { pipeline, fetch } = require('@huggingface/node-huggingface-fetch');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Endpoint to parse PDF and extract text
app.post('/api/upload', async (req, res) => {
    const { pdfData } = req.body;
    try {
        const pdfText = await pdf(pdfData);
        res.status(200).json({ text: pdfText.text });
    } catch (error) {
        console.error('Error parsing PDF:', error);
        res.status(500).json({ error: 'Failed to parse PDF' });
    }
});

// Endpoint to handle questions and provide answers
app.post('/api/ask', async (req, res) => {
    const { question, context } = req.body;
    try {
        const modelEndpoint = 'https://api-inference.huggingface.co/models/distilbert-base-uncased';
        const apiKey = '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'; // Replace with your Hugging Face API key

        const response = await axios.post(modelEndpoint, {
            inputs: {
                question,
                context,
            },
        }, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
        });

        const answer = response.data.answer;
        res.status(200).json({ answer });
    } catch (error) {
        console.error('Error asking question:', error);
        res.status(500).json({ error: 'Failed to process question' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
