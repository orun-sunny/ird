import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import Home from "./page/Home";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "preline/preline";
import { IStaticMethods } from "preline/preline";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <div>
      <Home />
    </div>
  );
}

// Wrap your App component with Router
const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter; // Export the wrapped component
