import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TmbCalculation from "./TmbCalculation";
import FoldsAssessment from "./FoldsAssessment";
import SecondPag from "./SecondPag";
import ResultPage from "./ResultPage";
import DietGenerator from "./DietGenerator";


import React from 'react';

const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<TmbCalculation />} />
          <Route path="/foldsassessment" element={<FoldsAssessment />} /> 
          <Route path="/SecondPag" element={<SecondPag/>} />
          <Route path="/ResultPage" element={<ResultPage />} />
          <Route path="/resultpage" element={ < ResultPage/>} />
        </Routes>
      </Router>
    );
};

export default AppRouter;
