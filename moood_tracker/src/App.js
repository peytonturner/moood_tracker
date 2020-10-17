import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import firebase from "firebase";
import Login from './auth.js';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlxJBOnxqFGkJlmKexLTTX_p5at5FgFMw",
  authDomain: "moood-tracker.firebaseapp.com",
  databaseURL: "https://moood-tracker.firebaseio.com",
  projectId: "moood-tracker",
  storageBucket: "moood-tracker.appspot.com",
  messagingSenderId: "339826168120",
  appId: "1:339826168120:web:863f3d88386d509321f1cd",
  measurementId: "G-C4LV4N1PXK"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

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
  
  const [amISad, setAmISad] = useState(false);
  const [amIPee, setAmIPee] = useState(false);
  const [counting, setCounting] = useState(0);

  function new_day() {
    db.collection("tracking").doc("BRCSBynUaUd5hNRdbxoinsT65562").collection("activities").add({
      date: firebase.firestore.FieldValue.serverTimestamp(),
      work: 0,
      school: 0,
      programming: 0,
      games: 0,
      other: 0
    });
    console.log("peepeepoopoo");
  }

  useEffect(() => {
    console.log("Sadness changed!");
  }, [amISad]);

  db.collection("tracking").doc("BRCSBynUaUd5hNRdbxoinsT65562").collection("activities").get()
    .then(function(querySnapshot) {
        let count = 0;
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            count++;
        });
        setCounting(count);
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

  return (

    <div>
      <div>Am I sad? --> {(amISad) ? "Yes" : "No"}</div>
      <div>Am I pee? --> {(amIPee) ? "Yes" : "No"}</div>
      <div>Number of days logged --> {counting}</div>
      <button onClick={() => setAmISad(!amISad)}>Sadness</button>
      <button onClick={() => setAmIPee(!amIPee)}>Peeness</button>
      <button onClick={new_day}>Make a Life</button>
      {/* <button onClick={doc_count}>Count Docs</button> */}
    </div>

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
