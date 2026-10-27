import React, { useState } from 'react';
import { HelpCircle, Check, X, RotateCcw, Trophy } from 'lucide-react';

export default function QuizSection() {
  const questions = [
    {
      id: 1,
      question: "What is the primary human-driven cause of land subsidence in Hagonoy, Bulacan?",
      options: [
        "Excessive groundwater extraction through deep wells",
        "Over-construction of high-rise commercial buildings",
        "Mining activities in surrounding mountains",
        "Heavy vehicular traffic on local highways"
      ],
      correct: 0,
      explanation: "Unregulated deep groundwater extraction for domestic and aquaculture usage reduces underground aquifer pore pressure, leading to clay layer compaction."
    },
    {
      id: 2,
      question: "What is the approximate average annual rate of land subsidence in severe areas of Hagonoy?",
      options: [
        "0.1 to 0.5 cm per year",
        "1.0 to 1.5 cm per year",
        "3.5 to 5.0 cm per year",
        "10 to 15 cm per year"
      ],
      correct: 2,
      explanation: "Satellite InSAR geodesy studies confirm that parts of coastal Hagonoy settle at alarmingly high rates of 3.5 to 5 cm annually."
    },
    {
      id: 3,
      question: "Which major sustainable infrastructure project aims to replace groundwater pumping in Bulacan?",
      options: [
        "Angat Dam Decommissioning Project",
        "Bulacan Bulk Water Supply Project",
        "Manila Bay Land Reclamation Project",
        "Pampanga River Dredging Pipeline"
      ],
      correct: 1,
      explanation: "The Bulacan Bulk Water Supply Project provides treated surface water to municipalities, allowing aquifers to recover by reducing deep well extraction."
    },
    {
      id: 4,
      question: "What phenomenon causes high-tide flooding in Hagonoy even during bright, sunny weather without rainfall?",
      options: [
        "Sunshine Inundation / Tidal Flooding",
        "Monsoon Flash Floods",
        "Groundwater Gushing",
        "Dam Discharge Failure"
      ],
      correct: 0,
      explanation: "Because ground elevation has sunk below high-tide sea levels, ocean high tides flow back through drainage channels onto roads even on sunny days."
    }
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleSelect = (index) => {
    if (!isSubmitted) {
      setSelectedOption(index);
    }
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
    if (selectedOption === questions[currentQ].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQ(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="section-container quiz-section">
      <div className="section-header">
        <span className="section-tag">Interactive Learning</span>
        <h2 className="section-title">Knowledge Check Quiz</h2>
        <p className="section-description">
          Test your understanding of land subsidence causes, impacts, and solutions in Hagonoy, Bulacan.
        </p>
      </div>

      <div className="quiz-card">
        {!quizFinished ? (
          <div>
            <div className="quiz-progress">
              <span>Question {currentQ + 1} of {questions.length}</span>
              <div className="progress-bar-bg">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <h3 className="question-text">{questions[currentQ].question}</h3>

            <div className="options-list">
              {questions[currentQ].options.map((opt, idx) => {
                let statusClass = '';
                if (isSubmitted) {
                  if (idx === questions[currentQ].correct) statusClass = 'correct';
                  else if (idx === selectedOption) statusClass = 'incorrect';
                } else if (selectedOption === idx) {
                  statusClass = 'selected';
                }

                return (
                  <button
                    key={idx}
                    className={`option-btn ${statusClass}`}
                    onClick={() => handleSelect(idx)}
                  >
                    <span className="option-label">{String.fromCharCode(65 + idx)}</span>
                    <span className="option-text">{opt}</span>
                    {isSubmitted && idx === questions[currentQ].correct && <Check size={20} className="icon-right" />}
                    {isSubmitted && idx === selectedOption && idx !== questions[currentQ].correct && <X size={20} className="icon-wrong" />}
                  </button>
                );
              })}
            </div>

            {isSubmitted && (
              <div className="explanation-box">
                <strong>Explanation:</strong> {questions[currentQ].explanation}
              </div>
            )}

            <div className="quiz-actions">
              {!isSubmitted ? (
                <button
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  disabled={selectedOption === null}
                >
                  Submit Answer
                </button>
              ) : (
                <button className="btn btn-accent" onClick={handleNext}>
                  {currentQ < questions.length - 1 ? 'Next Question' : 'View Final Score'}
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="quiz-results">
            <Trophy size={64} className="trophy-icon" />
            <h3>Quiz Completed!</h3>
            <p className="score-summary">
              You scored <strong>{score}</strong> out of <strong>{questions.length}</strong> ({Math.round((score / questions.length) * 100)}%)
            </p>
            <p className="feedback-text">
              {score === questions.length
                ? "Outstanding! You are a Hagonoy GroundWatch environmental ambassador!"
                : "Great effort! Review the sections above to boost your understanding further."}
            </p>
            <button className="btn btn-primary" onClick={handleRestart}>
              <RotateCcw size={18} /> Retake Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
