import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Security and utility middleware
app.use(helmet()); 
app.use(cors());
app.use(express.json());

// Landing page lead capture
app.post('/api/waitlist', (req, res) => {
  const { email } = req.body;
  // TODO: Save email to database
  res.status(200).json({ message: 'Added to waitlist!' });
});

// Stubs for future AI tutor features
app.post('/api/ai-assistant', (req, res) => {
  const { text } = req.body;

  if (!text || !text.trim()) {
    return res.status(400).json({
      error: 'Student explanation is required'
    });
  }

  const lower = text.toLowerCase();

  let result;

  if (
    lower.includes('equal') &&
    (
      lower.includes('total') ||
      lower.includes('whole') ||
      lower.includes('divided') ||
      lower.includes('pieces')
    )
  ) {
    result = {
      score: '98%',
      verdict: 'Deep Conceptual Mastery',
      color: 'emerald',
      comment:
        "Excellent! The explanation identifies that the denominator represents the total number of equal parts that make up the whole.",
      followUp:
        "Outstanding teaching! You explained both equal slicing and the total quantity. You're ready for fraction addition!"
    };
  } else if (
    lower.includes('bottom') ||
    lower.includes('down') ||
    lower.includes('lower')
  ) {
    result = {
      score: '45%',
      verdict: 'Surface / Memorization',
      color: 'amber',
      comment:
        "You correctly identified the position of the denominator, but you have not yet explained what it represents conceptually.",
      followUp:
        "You are right about where the denominator is! Now tell me: what does that bottom number actually tell us about the pizza slices?"
    };
  } else if (
    lower.includes('ate') ||
    lower.includes('took') ||
    lower.includes('have')
  ) {
    result = {
      score: '20%',
      verdict: 'Misconception Detected',
      color: 'rose',
      comment:
        "The explanation appears to confuse the denominator with the numerator. The numerator represents the parts being considered, while the denominator represents the total equal parts.",
      followUp:
        "Close! The slices you ate are related to the numerator. The denominator tells us how many equal slices make up the entire pizza."
    };
  } else {
    result = {
      score: '70%',
      verdict: 'Developing Explanation',
      color: 'cyan',
      comment:
        "Your explanation contains some relevant ideas, but more evidence is needed to confirm a complete understanding of the denominator.",
      followUp:
        "Good effort! Can you explain what the denominator tells us about the total number of equal parts in the whole?"
    };
  }

  res.json(result);
});
app.use('/api/roadmaps', (req, res) => res.json({ status: 'Dynamic roadmaps endpoint ready' }));
// Serve static frontend files (Production)
if (process.env.NODE_ENV === 'production') {
  const buildPath = path.join(__dirname, 'dist');
  app.use(express.static(buildPath));

  // Catch-all for React Router (Express 5 syntax)
  app.get('/*splat', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
}
if (process.env.NODE_ENV === 'production') {
  const buildPath = path.join(__dirname, 'dist');
  app.use(express.static(buildPath));

  // Catch-all to support React Router
  app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});