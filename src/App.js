import React, { useEffect } from 'react';

function App() {
  // throw an error on page load to test error handling
  useEffect(() => {
    throw new Error("Something went wrong!");
  }, []);

  return (
    <div className="App">
      <h3>Error handling in React - <a href="https://www.cluemediator.com" target="_blank">Clue Mediator</a></h3>
    </div>
  );
}

export default App;
