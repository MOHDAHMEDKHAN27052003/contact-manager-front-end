import { ToastContainer } from "react-toastify";
import { UserProvider } from "./contexts/UserContext";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";

function App() {

  return (
    <>
      <UserProvider>
        <ToastContainer />
        <Routes>
          {/* auth routes */}
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/auth/signin" element={<SignIn />} />

          {/* user routes */}
            <Route path="/user/profile" element={<Profile />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserProvider>
    </>
  );
};

export default App;