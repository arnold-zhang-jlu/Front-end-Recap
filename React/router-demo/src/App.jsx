import About from "./About";
import Contact from "./Contact";
import HomePage from "./HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Settings from "./Settings";
import PageNotFound from "./PageNotFound";
import User from "./User";

function App() {
  return (
    <BrowserRouter>
      Hello
      <Navigation />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/user/:userId" element={<User />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
