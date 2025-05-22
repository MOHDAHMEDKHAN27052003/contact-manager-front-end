import { ToastContainer } from "react-toastify";
import { UserProvider } from "./contexts/UserContext";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <>
      <UserProvider>
        <ToastContainer />
        <Routes>
          {/* auth routes */}
          <Route path="/auth/signup" element={<SignUp />} />
          
          {/* user routes */}
          <Route path="/user/profile" element={<Profile />} />
          
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </UserProvider>
    </>
  );
};

export default App;