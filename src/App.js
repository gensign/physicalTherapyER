import React from 'react';
import router from './router';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      {router}
     </div>
  );
}

export default App;
