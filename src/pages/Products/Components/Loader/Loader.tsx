/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFighterJet, faGamepad, faHeadphones, faCubes, faPaw, faRocket, faTicket, faPieChart } from '@fortawesome/free-solid-svg-icons';

const images = [
  faFighterJet,
  faGamepad,
  faHeadphones,
  faCubes,
  faPaw,
  faRocket,
  faTicket,
  faPieChart,
];

const Loader = () => {
  const [counter, setCounter] = useState<number>(0);
  const [num, setNum] = useState<number>(0);
  const [color, setColor] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === 7) {
        setCounter(0);
      } else {
        setCounter(counter + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [counter]);

  useEffect(() => {
    const colors = [
      '#EB596E',
      '#6883BA',
      '#3C0919',
      '#6883BA',
      '#3C0919',
      '#264653',
      '#2A9D8F',
      '#F4972B',
      '#5E8B7E',
      '#003459',
      '#1B4965',
      '#6868AC',
      '#25D8A7'
    ];

    setColor(colors[Math.floor(Math.random() * colors.length)]);
  }, [counter]);

  const changeImage = (counter: number) => {
    const image = images[counter];

    return (
      <div className="image">
        <FontAwesomeIcon icon={image} color={color} />
      </div>
    );
  };

  const loading = () => {
    for (let i = 0; i <= 100; i++) {
      setTimeout(() => {
        setNum(i);
      }, i * 120);
    }
  };

  useEffect(() => {
    loading();
  }, []);

  return (
    <Container>
      <div className="loader">
        {changeImage(counter)}
        <span>{num}%</span>
      </div>
    </Container>
  );
};

export default Loader;
