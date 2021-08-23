import React from 'react';
import { useStopwatch } from 'react-timer-hook';
import '../css/Botones.css';
import BtnStart from './BtnStart';

function CronometroReact() {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });


  return (
    <div style={{textAlign: 'center'}}>
      <h1>Curso React</h1>
      <p>Demo Cronómetro</p>
      <div style={{fontSize: '100px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Corriendo' : 'Detenido'}</p>
      <button className="btn" onClick={start}>Iniciar</button>
      <button className="btn" onClick={pause}>Pausa</button>
      <button className="btn" onClick={reset}>Reiniciar</button>
      <BtnStart />
    </div>
  );
}

export default function App() {
  return (
    <div>
      <CronometroReact />
    </div>
  );
}