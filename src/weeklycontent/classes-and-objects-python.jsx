import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import objectOrientedDesignQuiz from "../weeklyquizcontent/objectorienteddesign";
import "./quizpages.css";

export default function ObjectOrientedDesignQuiz() {
    const navigate = useNavigate();

    // Shuffle and pick 5 random questions
    const shuffledQuestions = [...objectOrientedDesignQuiz].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffledQuestions.slice(0, 5);

    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

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
        window.location.reload();
    };

    return (
        <div className="quiz-container">
            <h1 className="quiz-title">Object-Oriented Design Quiz</h1>
            {!submitted ? (
                <div>
                    {selectedQuestions.map((question, index) => (
                        <div key={index} className="question-container">
                            <p className="question-text">{question.question}</p>
                            {question.type === "multiple-choice" ? (
                                <div>
                                    {question.options.map((option, optionIndex) => (
                                        <label key={optionIndex} className="option-label">
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
                                    className="answer-textarea"
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    placeholder="Type your answer here"
                                />
                            )}
                        </div>
                    ))}
                    <button className="submit-button" onClick={handleSubmit}>Submit</button>
                </div>
            ) : (
                <div>
                    <h2 className="score-text">Your Score: {score} / 5</h2>
                    <div className="results-container">
                        {selectedQuestions.map((question, index) => (
                            <div key={index} className="result-item">
                                <p className="question-text">{question.question}</p>
                                <p className={`your-answer ${Number(answers[index]) === question.answer ? 'correct' : 'incorrect'}`}>Your Answer: {question.type === "multiple-choice" ? question.options[answers[index]] : answers[index]}</p>
                                <p className="correct-answer">Correct Answer: {question.type === "multiple-choice" ? question.options[question.answer] : question.answer}</p>
                            </div>
                        ))}
                    </div>
                    <button className="restart-button" onClick={restartQuiz}>Restart Quiz</button>
                </div>
            )}
            <div className="navigation-buttons">
                <button className="nav-button" onClick={() => navigate("/")}>Home</button>
                <button className="nav-button" onClick={() => navigate("/weeklyquiz")}>Weekly Quiz</button>
            </div>
        </div>
    );
}
