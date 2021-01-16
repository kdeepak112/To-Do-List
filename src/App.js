import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todo")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        console.log(snapshot.docs.map((doc) => doc.data().todo));
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addToDo = (event) => {
    event.preventDefault();
    db.collection("todo").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <>
      <div className="container text-center">
        <h1 className="mt-5">Add your ToDo List...</h1>
        <div className="container mt-5 card">
          <div className="card-body">
            <div>
              <form>
                <div className="row text-center">
                  <div className="col-sm-9 col-xs-3 mt-2 col-md-9">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Add To Do"
                      size="30"
                      value={input}
                      onChange={(event) => setInput(event.target.value)}
                    />
                  </div>
                  <div className="col-sm-6 col-xs-6 mt-2 col-md-3">
                    <button
                      className="btn btn-outline-warning btn-lg"
                      disabled={!input}
                      type="submit"
                      onClick={addToDo}
                      color="primary"
                    >
                      Add To-Do
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {todos.map((work) => (
              <Todo doto={work} />
            ))}
            ;
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
