import { useState, useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import { quiz as quizData } from '../../../assets/data/quizData.jsx';
import { Button, Card, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function QuizAkhir() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quiz, setQuiz] = useState(quizData);
  const [score, setScore] = useState({
    correct: 0,
    false: 0,
  });
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [error, setError] = useState('');
  const { question, options } = quiz[currentIndex];
  const navigate = useNavigate();
  const MINUTES = 60 * 120;
  const time = new Date();
  time.setSeconds(time.getSeconds() + MINUTES);

  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp: time,
    onExpire: () => saveJawaban(),
  });

  const checkScore = () => {
    const questionAnswered = quiz.filter((item) => item.selected);
    const questionCorrect = questionAnswered.filter((item) =>
      item.options.find(
        (option) => option.correct && option.selected === option.correct
      )
    );
    setScore({
      correct: questionCorrect.length,
      false: quiz.length - questionCorrect.length,
    });
  };
  useEffect(() => {
    checkScore();
  }, [quiz]);

  const nextQuestion = () => {
    if (quiz.length - 1 === currentIndex) return;
    setCurrentIndex(currentIndex + 1);
  };

  const previousQuestion = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
  };

  const selectOption = (indexSelected, indexOptionSelected) => {
    setQuiz(
      quiz.map((item, index) =>
        index === indexSelected
          ? {
              ...item,
              selected: true,
              options: options.map((item, index) =>
                index === indexOptionSelected
                  ? { ...item, selected: true }
                  : { ...item, selected: false }
              ),
            }
          : item
      )
    );
  };

  const startQuiz = () => {
    if (name.trim() === '' || className.trim() === '') {
      setError('Nama dan Kelas tidak boleh kosong');
    } else {
      setIsQuizStarted(true);
    }
  };

  const saveJawaban = () => {
    const selectedAnswers = quiz.map((item) => {
      const selectedOption = item.options.find((option) => option.selected);
      return {
        question: item.question,
        selected: selectedOption ? selectedOption.title : 'X',
        correct: selectedOption ? selectedOption.correct : false,
      };
    });

    const item = {
      [name]: {
        class: className,
        value: (score.correct / 15) * 100,
        answers: selectedAnswers,
      },
    };

    axios.patch(
      'https://restapiskripsizaki-default-rtdb.asia-southeast1.firebasedatabase.app/Evaluasi.json',
      item
    );
    navigate('/halamanselesai');
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleClassChange = (event) => {
    setClassName(event.target.value);
  };

  if (!isQuizStarted) {
    return (
      <div>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: '80vh' }}
        >
          <Card style={{ width: '700px' }} className="shadow mx-3" border="0">
            <Card.Body>
              <h3>Petunjuk Pengerjaan : </h3>
              <h4>1. berdoalah sebelum mengerjakan</h4>
              <h4>2. Isilah data diri anda pada kolom yang di sediakan </h4>
              <h4>3. Jumlah soal sebanyak 45 butir dengan pilihan ganda</h4>
              <h4>4. Bacalah soal dengan seksama sebelum menjawabnya</h4>
              <h4>5. Pilih jawaban yang anda anggap benar</h4>
              <h4>6. Periksa kembali jawaban sebelum menyelesaikan soal</h4>
            </Card.Body>
          </Card>

          <Card
            style={{ width: '600px' }}
            className="text-center shadow"
            border="3"
          >
            <Card.Title>
              {' '}
              <h2>Data Diri</h2>{' '}
            </Card.Title>
            <Card.Body>
              <div style={{ fontSize: '20px' }}>
                <input
                  style={{
                    marginLeft: '-50px',
                  }}
                  className="mx-1 "
                  type="text"
                  placeholder="Nama "
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <br />
              <div style={{ fontSize: '20px' }}>
                <input
                  className="mx-1 "
                  type="text"
                  placeholder="Kelas"
                  value={className}
                  onChange={handleClassChange}
                />
              </div>
              <br />
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <br />
              <Button onClick={startQuiz}>Mulai Soal</Button>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-center mb-3 mt-3">
        Quiz Screen <br /> Timer: {hours}:{minutes}:{seconds}
      </h2>
      <div className="card mb-3">
        <div
          className="card-body"
          style={{
            display: 'flex',
            padding: 10,
            flexWrap: 'wrap',
          }}
        >
          {quiz.map((item, index) => (
            <div
              key={index}
              className="border border-primary font-weight-bold"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 40,
                width: 40,
                marginRight: 5,
                marginBottom: 5,
                borderRadius: 5,
                cursor: 'pointer',
                backgroundColor:
                  index === currentIndex
                    ? 'greenyellow '
                    : item?.selected
                    ? 'grey'
                    : 'transparent',
              }}
              onClick={() => setCurrentIndex(index)}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
      <div className="card">
        <div
          className="card-header bg-white font-weight-bold"
          style={{
            fontSize: 20,
          }}
        >
          {currentIndex + 1}. {question}
        </div>
        <div className="card-body">
          {options.map((item, index) => (
            <div
              style={{
                display: 'flex',
                justifyItems: 'center',
                alignItems: 'center',
                fontSize: 18,
              }}
              key={index}
            >
              <div
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 100,
                  backgroundColor: item?.selected ? 'greenyellow' : 'grey',
                  cursor: 'pointer',
                  marginRight: 5,
                }}
                onClick={() => selectOption(currentIndex, index)}
              />
              {String.fromCharCode(65 + index)}. {item.title}
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: 10,
        }}
      >
        <button
          className="btn btn-info col-sm-2"
          onClick={() => previousQuestion()}
          disabled={currentIndex === 0 ? true : false}
        >
          Previous
        </button>
        {quiz.length - 1 === currentIndex ? (
          <Button onClick={saveJawaban} className="success col-sm-2">
            Finish
          </Button>
        ) : (
          <button
            className="btn btn-primary col-sm-2"
            onClick={() => nextQuestion()}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
