// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Menu from "./Menu"; // your sidebar/menu
// import Home from "./pages/Home";
// import NewItems from "./pages/NewItems";
// import Upload from "./pages/Upload";
// import Feedback from "./pages/Feedback";
// import Customization from "./pages/Customization";
// import Styles from "./pages/Styles";
// import Explore from "./pages/Explore";
// import Release from "./pages/Release";
// import Compare from "./pages/Compare";
// import Media from "./pages/Media";
// import Options from "./pages/Options";
// import Exit from "./pages/Exit";
import Card from "./Components/Card";
import Upload from "./pages/Upload";

function App() {
  return (
    <Router>
      <div className="flex">
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Card />} />
            {/* <Route path="/new-items" element={<NewItems />} />
            // <Route path="/upload" element={<Upload />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/customization" element={<Customization />} />
            <Route path="/styles" element={<Styles />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/release" element={<Release />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/media" element={<Media />} />
            <Route path="/options" element={<Options />} />
            <Route path="/exit" element={<Exit />} /> */}
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
