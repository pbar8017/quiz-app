import React, { useState, useEffect } from "react";
import quizData from "./quizData.jsx";
import "./style.css";

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const App = () => {
    const [shuffledQuizData, setShuffledQuizData] = useState([]);
    const [score, setScore] = useState(null);
    const [writtenAnswers, setWrittenAnswers] = useState({});
    const [incorrectAnswers, setIncorrectAnswers] = useState([]);

    useEffect(() => {
        setShuffledQuizData(shuffleArray([...quizData]).slice(0, 5)); // Selects 5 random questions
    }, []);

    const handleWrittenChange = (index, value) => {
        setWrittenAnswers((prev) => ({ ...prev, [index]: value }));
    };

    const handleSubmit = () => {
        let correctAnswers = 0;
        let incorrect = [];

        shuffledQuizData.forEach((q, index) => {
            if (q.type === "multiple-choice") {
                const selectedOption = document.querySelector(`input[name='q${index}']:checked`);
                if (selectedOption) {
                    const selectedValue = parseInt(selectedOption.value);
                    if (selectedValue === q.answer) {
                        correctAnswers++;
                    } else {
                        incorrect.push({
                            question: q.question,
                            yourAnswer: q.options[selectedValue] || "No answer",
                            correctAnswer: q.options[q.answer],
                        });
                    }
                } else {
                    incorrect.push({
                        question: q.question,
                        yourAnswer: "No answer",
                        correctAnswer: q.options[q.answer],
                    });
                }
            } else if (q.type === "written") {
                const userAnswer = writtenAnswers[index] || "No answer provided";
                if (userAnswer.toLowerCase().trim() !== q.answer.toLowerCase().trim()) {
                    incorrect.push({
                        question: q.question,
                        yourAnswer: userAnswer,
                        correctAnswer: q.answer,
                    });
                } else {
                    correctAnswers++;
                }
            }
        });

        setScore({ correctAnswers, totalQuestions: shuffledQuizData.length });
        setIncorrectAnswers(incorrect);
    };

    return (
        <div className="quiz-container">
            <h1 className="quiz-title">Quiz App</h1>
            {shuffledQuizData.map((q, index) => (
                <div key={index} className="question-box">
                    <p className="question-text"><strong>Q{index + 1}:</strong> {q.question}</p>

                    {q.type === "multiple-choice" ? (
                        q.options.map((option, i) => (
                            <label key={i} className="option">
                                <input type="radio" name={`q${index}`} value={i} /> {option}
                            </label>
                        ))
                    ) : (
                        <textarea
                            name={`q${index}`}
                            className="text-area"
                            rows="3"
                            cols="50"
                            onChange={(e) => handleWrittenChange(index, e.target.value)}
                        />
                    )}
                </div>
            ))}

            <button id="submit-btn" onClick={handleSubmit}>Submit Quiz</button>

            {score !== null && (
                <div id="score">
                    <p className="score-text">
                        Your Score: {score.correctAnswers} / {score.totalQuestions}
                    </p>

                    {incorrectAnswers.length > 0 ? (
                        <div id="incorrect-answers">
                            <h3>Incorrect Answers:</h3>
                            {incorrectAnswers.map((resp, i) => (
                                <div key={i} className="incorrect-response">
                                    <p><strong>Q:</strong> {resp.question}</p>
                                    <p className="user-answer"><strong>Your Answer:</strong> {resp.yourAnswer}</p>
                                    <p className="correct-answer"><strong>Correct Answer:</strong> {resp.correctAnswer}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Congratulations! All answers were correct! 🎉</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default App;
