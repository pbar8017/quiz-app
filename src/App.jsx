import React, { useState, useEffect } from "react";
import quizData from "./quizData.jsx";
import "./style.css";

const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

const App = () => {
    const [shuffledQuizData, setShuffledQuizData] = useState([]);
    const [score, setScore] = useState(null);
    const [writtenAnswers, setWrittenAnswers] = useState({});

    useEffect(() => {
        setShuffledQuizData(shuffleArray([...quizData]).slice(0, 5)); // Selects 5 random questions
    }, []);

    const handleWrittenChange = (index, value) => {
        setWrittenAnswers(prev => ({ ...prev, [index]: value }));
    };

    const handleSubmit = () => {
        let correctAnswers = 0;
        let writtenResponses = [];
        shuffledQuizData.forEach((q, index) => {
            if (q.type === "multiple-choice") {
                const selectedOption = document.querySelector(`input[name='q${index}']:checked`);
                if (selectedOption && parseInt(selectedOption.value) === q.answer) {
                    correctAnswers++;
                }
            } else if (q.type === "written") {
                writtenResponses.push({ question: q.question, expected: q.answer, userAnswer: writtenAnswers[index] || "No answer provided" });
            }
        });
        setScore({ correctAnswers, writtenResponses });
    };

    return (
        <div className="quiz-container">
            <h1 className="quiz-title">Quiz App</h1>
            {shuffledQuizData.map((q, index) => (
                <div key={index} className="question-box">  {/* Added container */}
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
                    <p className="score-text">Your Score: {score.correctAnswers} / {shuffledQuizData.filter(q => q.type === "multiple-choice").length}</p>
                    <h3>Written Answers:</h3>
                    {score.writtenResponses.map((resp, i) => (
                        <div key={i} className="written-response">
                            <p><strong>Q:</strong> {resp.question}</p>
                            <p><strong>Your Answer:</strong> {resp.userAnswer}</p>
                            <p><strong>Expected Answer:</strong> {resp.expected}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default App;

/* Mobile-friendly styles */
const styles = `
@media (max-width: 600px) {
    .quiz-container {
        width: 90%;
        padding: 15px;
    }
    .question {
        font-size: 16px;
    }
    textarea {
        width: 100%;
    }
    button {
        font-size: 14px;
        padding: 10px;
    }
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
