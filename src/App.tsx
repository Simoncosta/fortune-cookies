import { useState } from 'react';

import cookie from './assets/biscoito.png';
import breackCookie from './assets/biscoitoAberto.png';

import Button from './components/Button';
import Phrase from './components/Phrase';

import Container from './components/layouts/Container';

function App() {

  const [textPhrase, setTextPhrase] = useState('...');
  const [imgCookie, setImageCookie] = useState(cookie);

  function breakCookie() {
    const numberRandom = Math.floor(Math.random() * phrases.length);

    setImageCookie(breackCookie);
    setTextPhrase(phrases[numberRandom]);
  }

  function clearCookie() {
    setTextPhrase('...');
    setImageCookie(cookie);
  }

  const phrases = [
    'Inspire-se nos bons e aprenda com sua sabedoria e virtude.',
    'Equilibrar o bom-senso com conhecimento é a chave para a sabedoria.',
    'O riso, uma linguagem universal, aproxima almas e corações.',
    'Liberte-se das preocupações e abrace a felicidade em cada momento.',
    'Busque o óbvio, imagine o improvável e alcance o inalcançável.',
    'Tenha fé em milagres, mas trabalhe arduamente para alcançar seus objetivos.',
    'A maior barreira para o sucesso é a incapacidade de superar o medo do fracasso.',
    'Nenhuma tempestade dura para sempre. Acredite na luz no fim do túnel.',
    'Para alcançar a paz interior, seja fiel a si mesmo e não se compare aos outros.'
  ];

  return (
    <Container>
      <img src={imgCookie} className="w-72 h-72" />
      <Button name='OPEN COOKIE' action={breakCookie} />
      {textPhrase !== '...' && <Button name='CLEAR COOKIE' action={clearCookie} />}
      <Phrase phrase={textPhrase} />
    </Container>
  )
}

export default App
