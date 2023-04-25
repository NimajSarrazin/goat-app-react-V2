import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StevePage from "./page/StevePage";
import JackMaPage from "./page/JackMaPage";
import ElonPage from "./page/ElonPage";
import MarkPage from "./page/MarkPage";
import ErrorPage from "./page/ErrorPage";
// import Navigation from "./components/navbar/Navigation";
// import Footer from "./components/footer/Footer";
import ContactPage from "./page/ContactPage";
import BillGatePage from "./page/BillgatePage";
import { useState } from "react";
import BlogPage from "./page/BlogPage";
import ShowPost from "./page/ShowPost";
import StagiairePage from "./page/StagiairePage";
import ShowUser from "./page/ShowUser";

function App() {
  const [color, setColor] = useState("bg-purple-600");
  const [sociaty,setSociaty] = useState("apple");
  return (
    <Router>
      {/* <Navigation color={color} setColor={setColor}/> */}
      <Routes>
        <Route path="/" element={<StevePage sociaty={sociaty} setSociaty={setSociaty} />} />
        <Route path="/mark" element={<MarkPage />} />
        <Route path="/elon" element={<ElonPage />} />
        <Route path="/jack" element={<JackMaPage />} />
        <Route path="/billgates" element={<BillGatePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/stagiaire" element={<StagiairePage/>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/posts/:id" element={<ShowPost />} />
        <Route path="/users/:id" element={<ShowUser />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
