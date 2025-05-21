import { ToastContainer } from "react-toastify";
import { UserProvider } from "./contexts/UserContext";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";

function App() {

  return (
    <>
      <UserProvider>
        <ToastContainer />
        <Routes>
          <Route path="/auth/signup" element={<SignUp/>} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </UserProvider>
    </>
  );
};

export default App;