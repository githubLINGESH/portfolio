// server.js
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Function to load and profile data
const loadProfileData = async () => {
    const profileText = `Name: Lingeshwaran G
                        Education: Bachelor in Artificial Intelligence
                        Experience: Freelance Developer with expertise in React, Node.js, and Python. 
                        Projects: Developed multiple applications in AI, natural language processing, and e-commerce.
                        Skills: Machine Learning, Speech Recognition, Voice Synthesis, Web Development, Emotion Detection.
                        Hobbies: Blogging, Open-Source Contributions, and Public Speaking.
                        LinkedIn: https://www.linkedin.com/in/lingeshwaran-g-aa158a262/
                        GitHub: https://github.com/githubLINGESH/
                        `;
    return profileText;
};

// Helper function to force execution to pause
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Function to query Gemini with data
const queryGemini = async (query, profileText, retries = 3) => {
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt = `
            You are a helpful assistant. Use the following user profile context to answer their query.
            
            Profile Information:
            ${profileText}
            
            User query: ${query}
        `;

        const result = await model.generateContent(prompt);
        return result.response.text() || 'No relevant information found.';

    } catch (error) {
        // Check if it's a 429 Quota / Rate Limit error
        if (error.status === 429 && retries > 0) {
            console.warn(`[429 Rate Limited] Quota hit. Retrying in 40 seconds... (${retries} retries left)`);
            
            // Wait 40 seconds to completely clear the Free Tier 1-minute window
            await sleep(40000); 
            
            // Recursively call the function again, reducing remaining retry attempts
            return queryGemini(query, profileText, retries - 1);
        }

        console.error('Error querying Gemini:', error);
        return 'There was an error processing your request.';
    }
};

// API endpoint to handle bot query using Gemini and profile vector
app.post('/api/chat', async (req, res) => {
    const { query } = req.body;
    console.log(query);
    // Load and vectorize profile data
    const profileVector = await loadProfileData();
    const botResponse = await queryGemini(query, profileVector);


    res.json({ answer: botResponse });
});

// API endpoint to handle feedback submission
app.post('/api/feedback', (req, res) => {
  const { name, email, comments } = req.body;
  const feedback = `Name: ${name}\nEmail: ${email}\nComments: ${comments}\n---\n`;

  // Append feedback to a file
  fs.appendFile('feedback.txt', feedback, (err) => {
    if (err) {
      console.error('Error writing feedback:', err);
      return res.status(500).json({ message: 'Failed to save feedback' });
    }
    res.status(200).json({ message: 'Feedback saved successfully' });
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
