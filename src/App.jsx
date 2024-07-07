import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfileManager from "./pages/ProfileManager";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfileManager />} />
      </Routes>
    </Router>
  );
};

export default App;
