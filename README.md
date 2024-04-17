ChatPDF - PDF Q&A Chat Application

Users can ask questions about a particular PDF document using the web-based chat program ChatPDF.
In order to deliver precise responses depending on the context taken from the PDF, the program makes use of a Language Learning Model (LLM) using RAG (Retriever-Reader-Generator) approaches.

Instructions to Setup:

1. Download and install Node.js
2. Open your terminal and go to your project directory.
3. Create two separate directories, one for frontend and the other for backend.
4. Inside the backend directory, initialize a new Node.js project: 'npm init -y'
5. Install necessary packages: 'npm install express pdf-parse @huggingface/node-huggingface-fetch axios'
6. In the frontend directory, we will create a React app: 'npm install -g create-react-app' and 'create-react-app pdf-qa-chat-frontend'
7. Alternatively, React app can be created using Yarn, 'npm install -g yarn' and 'yarn create react-app pdf-qa-chat-frontend'

Once the setup is done, write the respective code for frontend and backend.

To run the application:

1. Start the terminal for backend and run 'npm start'
2. While keeping this terminal active, open another terminal for frontend and run 'npm start'.
3. Open your web browser and navigate to http://localhost:3000 to use ChatPDF locally.

Architecture and Technologies Used:
ChatPDF is built using the following technologies:

Backend:
HTTP requests and API endpoints are handled by Node.js and Express.
Text extraction from PDF documents is possible with the pdf-parse package.
RAG-based interfaces with the Language Learning Model (LLM) can be achieved with the Hugging Face Transformers package.
From the Hugging Face model provider, I have utilized the distilbert-base-uncased model for document question answering.
To make HTTP requests, use Axios.

Frontend:
The user interface was constructed using React.js.
The backend API can be contacted using Axios.
Style components with Material-UI.



