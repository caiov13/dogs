import React from 'react';

function App() {
  const [contar, setContar] = React.useState(0);
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
}

export default App;
