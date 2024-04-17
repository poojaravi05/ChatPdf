import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [pdfText, setPdfText] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleUploadPDF = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('pdfData', event.target.files[0]);

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPdfText(response.data.text);
    } catch (error) {
      console.error('Error uploading PDF:', error);
    }
  };

  const handleAskQuestion = async () => {
    try {
      const response = await axios.post('/api/ask', { question, context: pdfText });
      setAnswer(response.data.answer);
    } catch (error) {
      console.error('Error asking question:', error);
    }
  };

  return (
    <div className="App">
      <h1>PDF Q&A Chat App</h1>
      <input type="file" onChange={handleUploadPDF} />
      <div>
        <h2>PDF Text:</h2>
        <p>{pdfText}</p>
      </div>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question..."
      />
      <button onClick={handleAskQuestion}>Ask</button>
      {answer && (
        <div>
          <h3>Answer:</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
export default App;
