import { Route } from "react-router";
import App from "../App";
import About from "../pages/About/About";

const router = () => {
  return (
    <>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    </>
  );
};

export default router;
