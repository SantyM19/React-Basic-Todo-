import React from 'react'

function TodoCounter({completed, total}) {
  return (
    <h2>Haz completado {completed} de {total} TODOS</h2>
  );
}

export { TodoCounter };