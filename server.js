import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5173;

// Middleware
app.use(cors());
app.use(express.json());

// Mock login endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Simple mock: accept test@example.com / pass123
  if (email === 'test@example.com' && password === 'pass123') {
    res.json({
      email: 'test@example.com',
      emailVerified: true,
      name: 'Test User'
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});