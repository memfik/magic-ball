import React, { useState } from 'react';
import s from './magicBall.module.css';

const MagicBall = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');
  const reset = () => {
    setAnswer('');
    setQuestion('');
  };
  const giveAnswer = () => {
    const answers = [
      'Бесспорно',
      'Предрешено',
      'Никаких сомнений',
      'Определённо да',
      'Можешь быть уверен в этом',
      'Мне кажется - да',
      'Вероятнее всего',
      'Хорошие перспективы',
      'Знаки говорят - да',
      'Да',
      'Пока неясно, попробуй снова',
      'Спроси позже',
      'Лучше не рассказывать',
      'Сейчас нельзя предсказать',
      'Сконцентрируйся и спроси опять',
      'Даже не думай',
      'Мой ответ - нет',
      'По моим данным - нет',
      'Перспективы не очень хорошие',
      'Весьма сомнительно',
    ];
    const randomIndex = Math.floor(Math.random() * answers.length);
    setAnswer(answers[randomIndex]);
    setMessage(question);
  };
  return (
    <div className={s.container}>
      <div className={s.header}>
        <h1>Привет,я магический шар,и я знаю ответ на твой любой вопрос</h1>
        <input
          type="text"
          value={question}
          placeholder="Задай вопрос"
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button onClick={giveAnswer}>Задать вопрос</button>
        <button onClick={reset}>Очистить</button>
        <p>Ваш последний вопрос:{message}</p>
      </div>
      <div className={s.ball}>
        <p className={s.answer}>{answer}</p>
      </div>
    </div>
  );
};
export default MagicBall;
