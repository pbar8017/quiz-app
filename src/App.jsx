import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import WeeklyQuiz from "./weeklyquiz";
import FullQuiz from "./fullquiz/fullquiz.jsx";
import RequirementAnalysisQuiz from "./weeklycontent/requirementanalysis.jsx";
import ObjectOrientedDesignQuiz from "./weeklycontent/object-oriented-design.jsx";
import IntroductionToProgrammingQuiz from "./weeklycontent/introduction-to-programming.jsx";
import ControlStatementsPythonQuiz from "./weeklycontent/control-statements-python.jsx";
import MethodsAndPatternsPythonQuiz from "./weeklycontent/methods-and-patterns-python.jsx";
import ClassesAndObjectsPythonQuiz from "./weeklycontent/classes-and-objects-python.jsx";
import "./style.css";

function Home() {
    const navigate = useNavigate();  // ✅ Fix 1: Define navigate

    return (
        <div className="app-container">
            <h1 className="app-title">Software Development Quiz</h1>
            <div className="button-container">
                <button className="quiz-button" onClick={() => navigate('/fullquiz')}>Full Quiz</button>
                <button className="quiz-button" onClick={() => navigate('/weeklyquiz')}>Weekly Quiz</button>
            </div>
        </div>
    );
}

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weeklyquiz" element={<WeeklyQuiz />} />
            <Route path="/fullquiz" element={<FullQuiz />} />

            {/* Sub-routes for Weekly Quiz */}
            <Route path="/weeklyquiz/requirementanalysis" element={<RequirementAnalysisQuiz />} />
            <Route path="/weeklyquiz/object-oriented-design" element={<ObjectOrientedDesignQuiz />} />
            <Route path="/weeklyquiz/introduction-to-programming" element={<IntroductionToProgrammingQuiz />} />
            <Route path="/weeklyquiz/control-statements-python" element={<ControlStatementsPythonQuiz />} />
            <Route path="/weeklyquiz/methods-and-patterns-python" element={<MethodsAndPatternsPythonQuiz />} />
            <Route path="/weeklyquiz/classes-and-objects-python" element={<ClassesAndObjectsPythonQuiz />} />
        </Routes>
    );
}
