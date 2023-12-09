import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Platform from "./pages/Platform";
import Login from "./pages/Login";
import FacebookLogin from "./pages/FacebookLogin";
import TwitterLogin from "./pages/TwitterLogin";
import ThankYou from "./pages/ThankYou";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/login" element={<Login />} />
          <Route path="/facebookLogin" element={<FacebookLogin />} />
          <Route path="/twitterLogin" element={<TwitterLogin />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
