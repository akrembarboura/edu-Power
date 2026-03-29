import { useState } from "react";
import { loginUser } from "./services/auth";

// MUI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import InputAdornment from "@mui/material/InputAdornment";
import CircularProgress from "@mui/material/CircularProgress";

// Icons
import { MdEmail, MdLock, MdSchool } from "react-icons/md";

function Login({ onLoginSuccess }) {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);

  // ── Validation 
  const isEmailValid = (v) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);

  const isPasswordValid = (v) =>
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(v);

  // ── Handler 
  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }
    if (!isEmailValid(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!isPasswordValid(password)) {
      setError("Password must be at least 6 characters and include letters and numbers.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const result = await loginUser(email, password);
      onLoginSuccess?.(result);
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => e.key === "Enter" && handleLogin();

  // ── UI 
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 100%)",
        px: 2,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 420,
          borderRadius: 4,
          boxShadow: "0 8px 40px rgba(64,112,239,0.13)",
          border: "1px solid #e8eeff",
          overflow: "visible",
        }}
      >
        <CardContent sx={{ p: { xs: 3, sm: 5 } }}>

          {/* ── Logo / Brand ── */}
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 60,
                height: 60,
                borderRadius: "50%",
                backgroundColor: "#4070EF",
                color: "#fff",
                fontSize: 28,
                mb: 2,
                boxShadow: "0 4px 16px rgba(64,112,239,0.35)",
              }}
            >
              <MdSchool />
            </Box>

            <Typography variant="h5" fontWeight={800} color="#1a1a2e">
              Welcome Back
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              Sign in to continue learning
            </Typography>
          </Box>

          {/* ── Error Alert ── */}
<Box sx={{ mb: 3, minHeight: 48 }}>
  {error && (
    <Alert
      severity="error"
      sx={{ borderRadius: 2.5, fontWeight: 700 }}
    >
      {error}
    </Alert>
  )}
</Box>

          {/* ── Email Field ── */}
          <TextField
            fullWidth
            label="Email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="you@example.com"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MdEmail color="#4070EF" size={20} />
                </InputAdornment>
              ),
            }}
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2.5,
                "&:hover fieldset": { borderColor: "#4070EF" },
                "&.Mui-focused fieldset": { borderColor: "#4070EF" },
              },
              "& label.Mui-focused": { color: "#4070EF" },
            }}
          />

          {/* ── Password Field ── */}
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Min 6 chars, letters + numbers"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MdLock color="#4070EF" size={20} />
                </InputAdornment>
              ),
            }}
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2.5,
                "&:hover fieldset": { borderColor: "#4070EF" },
                "&.Mui-focused fieldset": { borderColor: "#4070EF" },
              },
              "& label.Mui-focused": { color: "#4070EF" },
            }}
          />

          {/* ── Submit Button ── */}
          <Button
            fullWidth
            variant="contained"
            onClick={handleLogin}
            disabled={loading}
            sx={{
              py: 1.4,
              borderRadius: 2.5,
              backgroundColor: "#4070EF",
              fontWeight: 700,
              fontSize: "1rem",
              textTransform: "none",
              boxShadow: "0 4px 14px rgba(64,112,239,0.4)",
              "&:hover": {
                backgroundColor: "#2f5de0",
                boxShadow: "0 6px 20px rgba(64,112,239,0.5)",
              },
              "&:disabled": { backgroundColor: "#a0b4f5", color: "#fff" },
            }}
          >
            {loading ? (
              <CircularProgress size={22} sx={{ color: "#fff" }} />
            ) : (
              "Sign In"
            )}
          </Button>

          {/* ── Footer ── */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "center", mt: 3 }}
          >
            Don't have an account?{" "}
            <Box
              component="span"
              sx={{
                color: "#4070EF",
                fontWeight: 700,
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Sign up
            </Box>
          </Typography>

        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;