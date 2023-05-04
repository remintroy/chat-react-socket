import ReactDOM from "react-dom/client";
import "./index.css";
import { useState } from "react";
import { ThemeProvider, colors, createTheme } from "@mui/material";
import App from "./App";
import ThemeContext from "./context/ThemeContext";

const Main = () => {
  // Theme
  const [dark, setDark] = useState(true);
  const toggleTheme = () => setDark((pre) => !pre);
  const darkTheme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
      primary: {
        main: colors.teal[500],
      },
      secondary: {
        main: dark ? colors.green[500] : colors.deepPurple[100],
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <Main />
  // </React.StrictMode>
);
