import { useTheme } from "@emotion/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBarLayout from "./layouts/NavBar";
import HomePage from "./pages/Home";
import store, { persistor } from "./lib/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBarLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
]);

function App() {
  const theme: any = useTheme();
  const appStyle: any = {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowX: "hidden",
  };

  return (
    <div className="App" style={appStyle}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
