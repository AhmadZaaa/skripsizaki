import { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import NavBarQuiz from '../../../components/NavBarQuiz';
import { useNavigate } from 'react-router-dom';

export default function Quiz1() {
  const [name, setName] = useState('');
  const [classRoom, setClassRoom] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const questions = [
    //no1
    {
      text: `Pada pelemparan dua buah dadu secara bersamaan, berapakah peluang muncul mata dadu yang jumlahnya 5 atau 7?`,
      options: [
        { id: 0, text: '0,277', isCorrect: true },
        { id: 1, text: '0,287', isCorrect: false },
        { id: 2, text: '0,377', isCorrect: false },
        { id: 3, text: '0,477', isCorrect: false },
        { id: 4, text: '0,387', isCorrect: false },
      ],
    },

    // no2
    {
      text: 'Pada pelemparan dua buah dadu secara bersamaan, berapakah peluang munculnya mata dadu yang jumlahnya lebih dari 10?',
      options: [
        { id: 0, text: '0,073', isCorrect: false },
        { id: 1, text: '0,083', isCorrect: true },
        { id: 2, text: '0,833', isCorrect: false },
        { id: 3, text: '0,383', isCorrect: false },
        { id: 4, text: '0,033', isCorrect: false },
      ],
    },

    // no3
    {
      text: 'Pada pelemparan dua buah dadu, berapakah peluang muncul mata dadu yang sama?',
      options: [
        { id: 0, text: '0,366', isCorrect: false },
        { id: 1, text: '0,266', isCorrect: false },
        { id: 2, text: '0,166', isCorrect: true },
        { id: 3, text: '0,336', isCorrect: false },
        { id: 4, text: '0,186', isCorrect: false },
      ],
    },
    // no4
    {
      gambar: 'foto/tabelno4.png',
      text: 'Berdasarkan tabel di atas, warna manakah yang menghasilkan peluang kejadian 0,111 ....',
      options: [
        { id: 0, text: '0,366', isCorrect: false },
        { id: 1, text: '0,266', isCorrect: true },
        { id: 2, text: '0,166', isCorrect: false },
        { id: 3, text: '0,336', isCorrect: false },
        { id: 4, text: '0,186', isCorrect: false },
      ],
    },
    // no5
    {
      gambar: 'foto/tabelno5.png',
      text: 'Berdasarkan tabel di atas warna manakah yang menghasilkan peluang muncul paling besar?',
      options: [
        { id: 0, text: 'Hijau', isCorrect: false },
        { id: 1, text: 'Merah', isCorrect: false },
        { id: 2, text: 'Kuning', isCorrect: true },
        { id: 3, text: 'Biru', isCorrect: false },
        { id: 4, text: 'Ungu', isCorrect: false },
      ],
    },

    //no 6
    {
      gambar: 'foto/tabelno6.png',
      text: 'Berdasarkan tabel di atas, warna apa yang menghasilkan peluang kejadian 0,083?',
      options: [
        { id: 0, text: 'Hijau', isCorrect: true },
        { id: 1, text: 'Merah', isCorrect: false },
        { id: 2, text: 'Kuning', isCorrect: false },
        { id: 3, text: 'Biru', isCorrect: false },
        { id: 4, text: 'Ungu', isCorrect: false },
      ],
    },
    //no 7
    {
      text: 'Pada pelemparan dua buah uang logam, berapakah peluang muncul salah satu gambar?',
      options: [
        { id: 0, text: '0,25', isCorrect: false },
        { id: 1, text: '0,50', isCorrect: false },
        { id: 2, text: '0', isCorrect: false },
        { id: 3, text: '1', isCorrect: false },
        { id: 4, text: '0,75', isCorrect: true },
      ],
    },
    //no 8
    {
      text: 'Pada pelemparan dua buah uang logam, berapakah peluang muncul keduanya angka ?',
      options: [
        { id: 0, text: '0,10', isCorrect: false },
        { id: 1, text: '0,50', isCorrect: false },
        { id: 2, text: '0,25', isCorrect: true },
        { id: 3, text: '0,75', isCorrect: false },
        { id: 4, text: '0', isCorrect: false },
      ],
    },
    //no 9
    {
      text: 'Pada pelemparan satu buah dadu, berapakah peluang muncul mata dadu genap ?',
      options: [
        { id: 0, text: '0,11', isCorrect: false },
        { id: 1, text: '0,25', isCorrect: false },
        { id: 2, text: '0,50', isCorrect: true },
        { id: 3, text: '0,75', isCorrect: false },
        { id: 4, text: '0,88', isCorrect: false },
      ],
    },
    //no 9
    {
      text: 'Pada pelemparan satu buah dadu dan satu buah uang logam, berapakah peluang muncul mata dadu lebih dari 3 ?',
      options: [
        { id: 0, text: '0,25', isCorrect: false },
        { id: 1, text: '0,5', isCorrect: true },
        { id: 2, text: '0,75', isCorrect: false },
        { id: 3, text: '1', isCorrect: false },
        { id: 4, text: '0', isCorrect: false },
      ],
    },
  ];

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleClassRoomChange = (event) => {
    setClassRoom(event.target.value);
  };

  const handleStartQuiz = () => {
    if (name.trim() === '' || classRoom.trim() === '') {
      setError('Nama dan Kelas tidak boleh kosong');
    } else {
      setQuizStarted(true);
    }
  };
  const onClickHandler = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      if (currentQuestion < questions.length) {
        setAnswers({
          ...answers,
          [currentQuestion]: 'isCorrect ',
        });
      }
    }
    if (!isCorrect) {
      if (currentQuestion < questions.length) {
        setAnswers({
          ...answers,
          [currentQuestion]: 'isNotCorrect',
        });
      }
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  function saveScore() {
    const item = {
      [name]: {
        value: (score / questions.length) * 100,
        answers: answers,
        classRoom: classRoom,
      },
    };

    axios.patch(
      'https://restapiskripsizaki-default-rtdb.asia-southeast1.firebasedatabase.app/bukuNilai.json',
      item
    );

    navigate('/materi5');
  }

  return (
    <div>
      <NavBarQuiz />
      {!quizStarted ? (
        <>
          <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: '80vh' }}
          >
            <Row className="justify-content-center">
              <Col lg={6} md={8}>
                <Card className="shadow mx-3" border="0">
                  <Card.Body>
                    <h3>Petunjuk Pengerjaan:</h3>
                    <ol>
                      <li>Berdoalah sebelum mengerjakan</li>
                      <li>Isilah data diri anda pada kolom yang disediakan</li>
                      <li>
                        Jumlah soal sebanyak 10 butir dengan pilihan ganda
                      </li>
                      <li>Bacalah soal dengan seksama sebelum menjawabnya</li>
                      <li>Pilih jawaban yang anda anggap benar</li>
                      <li>
                        Ketika sudah memilih jawaban, anda tidak dapat kembali
                        ke soal sebelumnya
                      </li>
                    </ol>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} md={6} className="my-3">
                <Card className="text-center shadow" border="3">
                  <Card.Title>
                    <h2>Data Diri</h2>
                  </Card.Title>
                  <Card.Body>
                    <div style={{ fontSize: '20px' }}>
                      <input
                        className="form-control mb-3"
                        type="text"
                        placeholder="Nama"
                        value={name}
                        onChange={handleNameChange}
                      />
                    </div>
                    <div style={{ fontSize: '20px' }}>
                      <input
                        className="form-control mb-3"
                        type="text"
                        placeholder="Kelas"
                        value={classRoom}
                        onChange={handleClassRoomChange}
                      />
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <Button
                      onClick={handleStartQuiz}
                      className="btn btn-primary"
                    >
                      Mulai Soal
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      ) : !showScore ? (
        <>
          <Container
            className="d-flex align-items-center justify-content-center "
            style={{ minHeight: '80vh' }}
          >
            <Card style={{ width: '40rem' }} className="mt-4 shadow">
              <Card.Title>
                <Card.Img src={questions[currentQuestion].gambar} alt="" />
                <br />
                {currentQuestion + 1} {'.'} {questions[currentQuestion].text}{' '}
              </Card.Title>

              {questions[currentQuestion].options.map((option) => {
                return (
                  <Button
                    className="m-1 text-left"
                    variant="info"
                    onClick={() => onClickHandler(option.isCorrect)}
                    key={option.id}
                  >
                    {option.text}
                  </Button>
                );
              })}
            </Card>
          </Container>
        </>
      ) : (
        <Container
          className="d-flex align-items-center justify-content-center "
          style={{ minHeight: '80vh' }}
        >
          <Card style={{ width: '40rem' }} className="mt-4 shadow text-center ">
            <Card.Title>
              <h2>Hasil Quiz</h2>
            </Card.Title>
            <Card.Title>
              {' '}
              <h2>Nama: {name}</h2>{' '}
            </Card.Title>
            <Card.Title>
              {' '}
              <h2>Kelas: {classRoom} </h2>{' '}
            </Card.Title>
            <Button
              style={{ width: '20rem' }}
              className="mx-auto"
              variant="info"
              onClick={() => saveScore()}
            >
              Kumpul Jawaban
            </Button>
          </Card>
        </Container>
      )}
    </div>
  );
}
