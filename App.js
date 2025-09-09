import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import DecisionTree from "./Component/DecisionTree";
import UserFlow from "./Component/UserFlow";
 
function App() {
  return (
    // <div style={{ padding: "20px" }}>
    //   {/* <DecisionTree  /> */}
    //   <UserFlow />
    
    // </div>/
    <Router>
      <Routes>
        <Route path="/" element={<UserFlow />} />
        <Route path="/decision-tree" element={<DecisionTree />} />
      </Routes>
    </Router>
  );
}
 
export default App;
