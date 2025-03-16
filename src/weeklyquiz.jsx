import React from "react";
import { useNavigate } from "react-router-dom";
import "./weeklyquizpage.css";

export default function WeeklyQuiz() {
    const navigate = useNavigate();

    return (
        <div className="weekly-quiz-container">
            <h1 className="weekly-quiz-title">Weekly Quiz</h1>
            <div className="button-container">
                <button className="home-button" onClick={() => navigate('/')}>Back to Home</button>
            </div>
            <h2 className="section-title">Select a Week to Learn</h2>
            <div className="week-buttons-container">
                <button className="week-button" onClick={() => navigate('/weeklyquiz/requirementanalysis')}>Requirement Analysis</button>
                <button className="week-button" onClick={() => navigate('/weeklyquiz/object-oriented-design')}>Object-Oriented Design</button>
                <button className="week-button" onClick={() => navigate('/weeklyquiz/introduction-to-programming')}>Introduction to Programming</button>
                <button className="week-button" onClick={() => navigate('/weeklyquiz/control-statements-python')}>Control Statements (Python)</button>
                <button className="week-button" onClick={() => navigate('/weeklyquiz/methods-and-patterns-python')}>Methods and Patterns (Python)</button>
                <button className="week-button" onClick={() => navigate('/weeklyquiz/classes-and-objects-python')}>Classes and Objects (Python)</button>
            </div>
        </div>
    );
}
