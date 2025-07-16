import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EigenCloud from "./pages/EigenCloud";
import Modules from "./pages/Modules";
import EigenFunction from "./pages/EigenFunction";
import AVSs from "./pages/AVSs";
import EigenMatters from "./pages/EigenMatters";
import AVSApps from "./pages/AVSApps";
import AwsMoment from "./pages/AwsMoment";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eigen-cloud" element={<EigenCloud />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/eigen-function" element={<EigenFunction />} />
        <Route path="/avss" element={<AVSs />} />
        <Route path="/eigen-matters" element={<EigenMatters />} />
        <Route path="/avs-apps" element={<AVSApps />} />
        <Route path="/aws-moment" element={<AwsMoment />} />
      </Routes>
    </Router>
  );
}
