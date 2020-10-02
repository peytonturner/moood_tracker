import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Login from './auth.js';

export default () => {
  return (
    <AppDiv>
      <Router>
        <Route exact path="/" component={() => <Redirect to="/app" />} />
        <Route path="/app" component={Main} />
        <Route path="/login" component={Login} />
      </Router>
    </AppDiv>
  );
}

const AppDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Main = ({}) => {

  return (
    <div>This is main</div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code>
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
