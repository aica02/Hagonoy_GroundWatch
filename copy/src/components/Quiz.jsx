import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const questions = [
  {
    question: 'What is the primary cause of land subsidence in Hagonoy, Bulacan?',
    options: [
      'Volcanic activity',
      'Excessive groundwater extraction',
      'Earthquake fault lines',
      'Meteorite impacts',
    ],
    correct: 1,
    explanation:
      'Excessive groundwater extraction is the leading cause. When water is pumped from aquifers faster than it can be replenished, the soil compacts and the ground sinks.',
  },
  {
    question: 'Approximately how much does the land in Hagonoy sink per year?',
    options: ['0.1-0.5 cm', '1-2 cm', '3-5 cm', '10-15 cm'],
    correct: 2,
    explanation:
      'Land subsidence in Hagonoy is estimated at about 3-5 cm per year in some areas—significantly faster than global sea-level rise.',
  },
  {
    question: 'Which of the following is NOT a major effect of land subsidence?',
    options: [
      'Increased flooding',
      'Infrastructure damage',
      'Increased volcanic activity',
      'Agricultural loss',
    ],
    correct: 2,
    explanation:
      'Land subsidence does not cause volcanic activity. It does cause flooding, infrastructure damage, and agricultural loss due to saltwater intrusion.',
  },
  {
    question: 'How can communities help mitigate land subsidence?',
    options: [
      'Pump more groundwater',
      'Practice water conservation and rainwater harvesting',
      'Build more concrete structures',
      'Remove all vegetation',
    ],
    correct: 1,
    explanation:
      'Water conservation and rainwater harvesting reduce dependence on groundwater, helping slow subsidence. Community action is essential.',
  },
  {
    question: 'Why is Hagonoy particularly vulnerable to land subsidence?',
    options: [
      'It is located in a mountainous region',
      'It is a coastal lowland area near sea level',
      'It has no groundwater resources',
      'It experiences frequent volcanic eruptions',
    ],
    correct: 1,
    explanation:
      'Hagonoy is a coastal lowland municipality in Bulacan, with elevations near or below sea level, making it highly vulnerable to the compounding effects of subsidence and sea-level rise.',
  },
]

export default function Quiz() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [answered, setAnswered] = useState(false)

  const handleAnswer = (index) => {
    if (answered) return
    setSelected(index)
    setAnswered(true)
    if (index === questions[current].correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1)
      setSelected(null)
      setAnswered(false)
    } else {
      setShowResult(true)
    }
  }

  const handleRestart = () => {
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setShowResult(false)
    setAnswered(false)
  }

  const progress = ((current + (answered ? 1 : 0)) / questions.length) * 100

  if (showResult) {
    return (
      <div className="fade-in">
        <h2 className="section-title">Knowledge Check</h2>
        <p className="section-subtitle">See how much you've learned about land subsidence</p>
        <div className="quiz-container">
          <div className="quiz-result">
            <h3>Quiz Complete!</h3>
            <div className="score">
              {score}/{questions.length}
            </div>
            <p>
              {score === questions.length
                ? "Perfect score! You're a land subsidence expert! 🎉"
                : score >= questions.length * 0.6
                ? "Good job! You have a solid understanding of the issue. 👍"
                : 'Keep learning! Review the sections above to improve your knowledge. 📚'}
            </p>
            <button className="btn-primary" onClick={handleRestart}>
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fade-in">
      <h2 className="section-title">Knowledge Check</h2>
      <p className="section-subtitle">
        Test your understanding of land subsidence in Hagonoy
      </p>

      <div className="quiz-container">
        <div className="quiz-progress">
          <div className="quiz-progress-bar" style={{ width: `${progress}%` }} />
        </div>

        <p
          style={{
            color: 'var(--text-muted)',
            fontSize: '0.85rem',
            marginBottom: '8px',
          }}
        >
          Question {current + 1} of {questions.length}
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="quiz-question">{questions[current].question}</h3>

            <div className="quiz-options">
              {questions[current].options.map((option, i) => {
                let className = 'quiz-option'
                if (answered) {
                  if (i === questions[current].correct) className += ' correct'
                  else if (i === selected && i !== questions[current].correct)
                    className += ' wrong'
                }
                return (
                  <button
                    key={i}
                    className={className}
                    onClick={() => handleAnswer(i)}
                    disabled={answered}
                  >
                    {option}
                  </button>
                )
              })}
            </div>

            {answered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  marginTop: '20px',
                  padding: '16px',
                  background: 'rgba(52, 152, 219, 0.08)',
                  borderRadius: '12px',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                <strong
                  style={{
                    color:
                      selected === questions[current].correct
                        ? 'var(--success)'
                        : 'var(--danger)',
                  }}
                >
                  {selected === questions[current].correct ? '✓ Correct! ' : '✗ Not quite. '}
                </strong>
                {questions[current].explanation}
              </motion.div>
            )}

            {answered && (
              <button
                className="btn-primary"
                onClick={handleNext}
                style={{ marginTop: '20px', width: '100%' }}
              >
                {current < questions.length - 1 ? 'Next Question →' : 'See Results →'}
              </button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}