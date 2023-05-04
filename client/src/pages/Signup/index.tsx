import { Alert, Avatar, Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LockOutlined } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { useAppDispatch } from "../../lib/redux/hoots";
import { useSignupMutation } from "../../lib/api/apiSlice";
import { setUserData } from "../../lib/redux/userSlice";

const SignUpPage = () => {
  const theme: any = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [statusDisp, setStatusDisp] = useState({ show: false, message: "", error: false });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [signUp] = useSignupMutation();

  const signUpUser = async () => {
    try {
      if (!email) throw { data: { error: "Email is required" } };
      if (!password) throw { data: { error: "Password is required" } };
      if (!confirm) throw { data: { error: "Confirm Password is required" } };
      if (confirm !== password) throw { data: { error: "Confirm Password dosent match" } };
      const data = await signUp({ password, email }).unwrap();
      dispatch(setUserData(data));
      setStatusDisp({
        show: true,
        message: "Login success",
        error: false,
      });
      navigate("/");
    } catch (error: any) {
      setStatusDisp({
        show: true,
        message: error.data.error,
        error: true,
      });
    }
  };

  return (
    <div
      style={{
        backgroundColor: theme.palette?.background.default,
        color: theme.palette?.text.primary,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Container className="Login" component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5" style={{ marginTop: "10px" }}>
            Chat App - Signup
          </Typography>

          <Box sx={{ mt: 3 }}>
            {statusDisp?.show && (
              <Alert className="disp" color="info" variant="outlined" severity={`${statusDisp?.error ? "error" : "success"}`}>
                {statusDisp?.message}
              </Alert>
            )}
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <TextField
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              margin="normal"
              required
              fullWidth
              name="Confirm"
              label="Confirm"
              type="password"
              autoComplete="current-password"
            />
            <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
              <Button>Forgot password?</Button>
              <Link className="link" to="/login">
                <Button variant="outlined">Login</Button>
              </Link>
            </Box>
            <Button onClick={() => signUpUser()} fullWidth variant="contained" style={{ padding: "10px 0" }} sx={{ mt: 2, mb: 2 }}>
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default SignUpPage;
