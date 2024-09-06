import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  // Scroll to top on navigation
  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  // Update page title and meta description based on the route
  useEffect(() => {
    let title = "Default Title"; // Set a default title
    let metaDescription = "Default description for the site"; // Set a default meta description

    switch (pathname) {
      case "/":
        title = "Home - My Website";
        metaDescription = "Welcome to the homepage of my portfolio website.";
        break;
      // You can add more cases for other pages here
      default:
        title = "My Website";
        metaDescription = "Explore my portfolio and projects.";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
