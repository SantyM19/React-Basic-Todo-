import React from 'react'
import "./TodoCounter.css";

function TodoCounter({completed, total}) {
  return (
    <h2 className='TodoCounter'>Haz completado {completed} de {total} TODOS</h2>
  );
}

export { TodoCounter };