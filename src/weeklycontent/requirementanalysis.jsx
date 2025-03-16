import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import requirementAnalysisQuiz from "../weeklyquizcontent/raquestions.jsx";
import "./quizpages.css";

export default function RequirementAnalysisQuiz() {
    const navigate = useNavigate();

    // ✅ Store quiz questions in state so they don’t reset every second
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(300); // ✅ 5 minutes (300 seconds)

    // ✅ Shuffle questions once when the component loads
    useEffect(() => {
        const shuffled = [...requirementAnalysisQuiz].sort(() => 0.5 - Math.random()).slice(0, 5);
        setSelectedQuestions(shuffled);
    }, []);

    // ⏳ Timer Effect: Counts down every second
    useEffect(() => {
        if (timeLeft > 0 && !submitted) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer); // Cleanup timer
        } else if (timeLeft === 0 && !submitted) {
            handleSubmit(); // ✅ Auto-submit when time runs out
        }
    }, [timeLeft, submitted]);

    // Converts seconds to MM:SS format
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };

    // ✅ Change timer color based on remaining time
    const getTimerColor = () => {
        if (timeLeft > 120) return "green"; // ✅ Green when time > 2 minutes
        if (timeLeft > 30) return "orange"; // ✅ Orange when < 2 minutes
        return "red"; // ✅ Red when < 30 seconds
    };

    const handleChange = (questionIndex, value) => {
        setAnswers((prev) => ({ ...prev, [questionIndex]: value }));
    };

    const handleSubmit = () => {
        let newScore = 0;
        selectedQuestions.forEach((question, index) => {
            if (question.type === "multiple-choice" && Number(answers[index]) === question.answer) {
                newScore += 1;
            }
            if (question.type === "written" && answers[index]?.trim().toLowerCase() === question.answer.toLowerCase()) {
                newScore += 1;
            }
        });
        setScore(newScore);
        setSubmitted(true);
    };

    const restartQuiz = () => {
        window.location.reload(); // ✅ Reloads the page to reset everything
    };

    return (
        <div className="quiz-container">
            <h1 className="quiz-title">Requirement Analysis Quiz</h1>

            {/* ⏳ Modern Timer Display */}
            {!submitted && (
                <div className="timer-container">
                    <div className="timer-circle" style={{ borderColor: getTimerColor() }}>
                        <span className="timer-text">{formatTime(timeLeft)}</span>
                    </div>
                </div>
            )}

            <div className="quiz-content">
                {!submitted ? (
                    <div>
                        {selectedQuestions.map((question, index) => (
                            <div key={index} className="question-box">
                                <p className="question-text">{question.question}</p>

                                {question.type === "multiple-choice" ? (
                                    <div className="options-container">
                                        {question.options.map((option, optionIndex) => (
                                            <label key={optionIndex} className="option">
                                                <input
                                                    type="radio"
                                                    name={`question-${index}`}
                                                    value={optionIndex}
                                                    onChange={() => handleChange(index, optionIndex)}
                                                />
                                                {option}
                                            </label>
                                        ))}
                                    </div>
                                ) : (
                                    <textarea
                                        className="text-area"
                                        onChange={(e) => handleChange(index, e.target.value)}
                                        placeholder="Type your answer here"
                                    />
                                )}
                            </div>
                        ))}
                        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
                    </div>
                ) : (
                    <div>
                        <h2 className="score">Your Score: {score} / 5</h2>

                        <div className="results-container">
                            {selectedQuestions.map((question, index) => {
                                const isCorrect = question.type === "multiple-choice"
                                    ? Number(answers[index]) === question.answer
                                    : answers[index]?.trim().toLowerCase() === question.answer.toLowerCase();

                                return (
                                    <div key={index} className={`result-item ${isCorrect ? 'correct-answer-box' : 'incorrect-answer-box'}`}>
                                        <p className="question-text">{question.question}</p>

                                        <p className="your-answer">
                                            <strong>Your Answer:</strong>
                                            <span className={isCorrect ? "correct-text" : "incorrect-text"}>
                                                {question.type === "multiple-choice"
                                                    ? question.options[answers[index]] || "No answer selected"
                                                    : answers[index] || "No answer provided"}
                                            </span>
                                        </p>

                                        <p className="correct-answer">
                                            <strong>Correct Answer:</strong>
                                            {question.type === "multiple-choice"
                                                ? question.options[question.answer]
                                                : question.answer}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="button-group">
                            <button className="restart-btn" onClick={restartQuiz}>Restart Quiz</button>
                        </div>

                        <div className="navigation-buttons">
                            <button className="nav-button" onClick={() => navigate("/")}>Home</button>
                            <button className="nav-button" onClick={() => navigate("/weeklyquiz")}>Weekly Quiz</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
