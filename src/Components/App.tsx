import React from 'react';
import Navbar from './Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <h1>Welcome to NotesCluster</h1>
      <h2>Lorem Ipsum Doler sit amet</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <button className="sign-up">Sign up today!</button>
    </div>
  );
}

export default App;
