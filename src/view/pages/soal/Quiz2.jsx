import { useState } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import NavBarQuiz from '../../../components/NavBarQuiz';
import { useNavigate } from 'react-router-dom';

export default function Quiz2() {
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
      text: `Amir melempar dua buah dadu bersamaan, tentukan peluang munculnya mata dadu berjumlah 4 atau 7?`,
      options: [
        { id: 0, text: '2/4', isCorrect: false },
        { id: 1, text: '3/6', isCorrect: false },
        { id: 2, text: '1/4', isCorrect: true },
        { id: 3, text: '2/3', isCorrect: false },
        { id: 4, text: '3/4', isCorrect: false },
      ],
    },

    // no2
    {
      text: 'Sebuah dadu dilemparkan secara bersamaan, tentukan peluang muncul mata dadu berjumlah 2 atau 4?',
      options: [
        { id: 0, text: '1/9', isCorrect: true },
        { id: 1, text: '2/9', isCorrect: false },
        { id: 2, text: '3/9', isCorrect: false },
        { id: 3, text: '4/9', isCorrect: false },
        { id: 4, text: '5/9', isCorrect: false },
      ],
    },

    // no3
    {
      text: 'Dua buah dadu dilemparkan secara bersamaan, tentukan peluang muncul mata dadu berjumlah 3 atau jumlah bilangan ganjil kurang dari 7?',
      options: [
        { id: 0, text: '3/4', isCorrect: false },
        { id: 1, text: '6/7', isCorrect: false },
        { id: 2, text: '10/36', isCorrect: false },
        { id: 3, text: '1/6', isCorrect: true },
        { id: 4, text: '2/3', isCorrect: false },
      ],
    },
    // no4
    {
      text: 'Dua buah dadu dilemparkan secara bersamaan, tentukan peluang muncul mata dadu berjumlah 2 atau 4?',
      options: [
        { id: 0, text: '1/9', isCorrect: true },
        { id: 1, text: '1/4', isCorrect: false },
        { id: 2, text: '1/3', isCorrect: false },
        { id: 3, text: '3/5', isCorrect: false },
        { id: 4, text: '15/16', isCorrect: false },
      ],
    },
    // no5
    {
      text: 'Dua buah dadu dilemparkan secara bersamaan, peluang muncul mata dadu berjumlah 2 atau jumlah bilangan prima adalah?',
      options: [
        { id: 0, text: '1/4', isCorrect: false },
        { id: 1, text: '2/9', isCorrect: false },
        { id: 2, text: '7/36', isCorrect: false },
        { id: 3, text: '9/36', isCorrect: false },
        { id: 4, text: '15/36', isCorrect: true },
      ],
    },
    //no 6
    {
      text: 'Terdapat 10 kartu bernomor 1 sampai 10. Jika diambil satu kartu secara acak maka peluang mendapatkan kartu bernomor bilangan prima atau bilangan ganjil adalah?',
      options: [
        { id: 0, text: '2/5', isCorrect: false },
        { id: 1, text: '3/5', isCorrect: true },
        { id: 2, text: '5/10', isCorrect: false },
        { id: 3, text: '7/10', isCorrect: false },
        { id: 4, text: '9/10', isCorrect: false },
      ],
    },
    //no 7
    {
      text: 'Terdapat 10 kartu bernomor 1 sampai 10. Jika diambil satu kartu secara acak maka peluang mendapatkan kartu bernomor bilangan prima atau bilangan genap adalah?',
      options: [
        { id: 0, text: '1/5', isCorrect: false },
        { id: 1, text: '2/5', isCorrect: false },
        { id: 2, text: '3/5', isCorrect: false },
        { id: 3, text: '4/5', isCorrect: true },
        { id: 4, text: '1/2', isCorrect: false },
      ],
    },
    //no 8
    {
      text: 'Di atas meja terdapat satu set kartu. set kartu terdiri atas 52 lembar dengan empat warna berbeda (merah, kuning, hijau, dan biru). Masing-masing warna terdiri atas 13 kartu bernomor 1 sampai dengan 13. Peluang terambil kartu bewarna merah atau bernomor 13 adalah?',
      options: [
        { id: 0, text: '14/52', isCorrect: false },
        { id: 1, text: '15/52', isCorrect: false },
        { id: 2, text: '16/52', isCorrect: true },
        { id: 3, text: '17/52', isCorrect: false },
        { id: 4, text: '18/52', isCorrect: false },
      ],
    },
    //no 9
    {
      text: 'Pasangan saling lepas dari pernyataan diatas adalah?',
      statements: [
        'Perhatikan pernyataan berikut ',
        'I. Melemparkan dua buah dadu secara bersamaan dan mendapatkan jumlah dadu 6; melemparkan dua buah dadu secara bersamaan mendapatkan mata dadu sama',
        'II. Melemparkan dua buah dadu secara bersamaan dan mendapatkan jumlah dadu 8; melemparkan dua buah dadu secara bersamaan mendapatkan mata dadu sama',
        'III. Melemparkan dua buah dadu secara bersamaan dan mendapatkan jumlah dadu 5; melemparkan dua buah dadu secara bersamaan mendapatkan mata dadu sama',
        'IV. Melemparkan dua buah dadu secara bersamaan dan mendapatkan jumlah dadu 4; melemparkan dua buah dadu secara bersamaan mendapatkan mata jumlah angka prima',
      ],
      options: [
        { id: 0, text: 'I dan II', isCorrect: false },
        { id: 1, text: 'II dan III', isCorrect: false },
        { id: 2, text: 'III dan IV', isCorrect: true },
        { id: 3, text: 'I dan III', isCorrect: false },
        { id: 4, text: 'I dan IV', isCorrect: false },
      ],
    },
    {
      text: 'Pasangan tidak saling lepas adalah?',
      statements: [
        'Perhatikan pernyataan berikut ',
        'I. Melemparkan dua buah dadu secara bersamaan dan mendapatkan jumlah dadu 6; melemparkan dua buah dadu secara bersamaan mendapatkan mata dadu sama',
        'II. Melemparkan dua buah dadu secara bersamaan dan mendapatkan jumlah dadu 8; melemparkan dua buah dadu secara bersamaan mendapatkan mata dadu sama',
        'III. Melemparkan dua buah dadu secara bersamaan dan mendapatkan jumlah dadu 5; melemparkan dua buah dadu secara bersamaan mendapatkan mata dadu sama',
        'IV. Melemparkan dua buah dadu secara bersamaan dan mendapatkan jumlah dadu 4; melemparkan dua buah dadu secara bersamaan mendapatkan mata jumlah angka prima',
      ],
      options: [
        { id: 0, text: 'I dan II', isCorrect: true },
        { id: 1, text: 'II dan III', isCorrect: false },
        { id: 2, text: 'III dan IV', isCorrect: false },
        { id: 3, text: 'I dan III', isCorrect: false },
        { id: 4, text: 'I dan IV', isCorrect: false },
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
          [currentQuestion]: 'Benar',
        });
      }
    }
    if (!isCorrect) {
      if (currentQuestion < questions.length) {
        setAnswers({
          ...answers,
          [currentQuestion]: 'Salah',
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
        classRoom: classRoom,
        answers: answers,
      },
    };

    axios.patch(
      'https://restapiskripsizaki-default-rtdb.asia-southeast1.firebasedatabase.app/NilaiKuis2.json',
      item
    );

    navigate('/quizakhir');
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
              <Col lg={4} md={6}>
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
              {questions[currentQuestion].statements && (
                <Card style={{ border: 'none' }}>
                  {questions[currentQuestion].statements.map(
                    (statement, index) => (
                      <Card className="m-1 shadow" key={index}>
                        {statement}{' '}
                      </Card>
                    )
                  )}
                </Card>
              )}

              <Card.Title>
                <img src={questions[currentQuestion].gambar} alt="" />
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
