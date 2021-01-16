import React, { useState } from "react";

import db from "./firebase";
import "./Todo.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Todo = ({ doto }) => {
  const [input, setInput] = useState("");

  return (
    <>
      <div className=" mt-5 card-todo container">
        <div>
          <div className="mt-3 card-row row">
            <div className="col-md-8 my-auto">{doto.todo}</div>
            <div className="col-md-4">
              <button
                className="btn btn-outline-danger btn-md"
                onClick={(event) => {
                  db.collection("todo").doc(doto.id).delete();
                }}
              >
                Delete
              </button>
              <button
                type="button"
                class="btn btn-outline-success btn-md mx-2"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Update
              </button>
              <div class="modal fade" id="staticBackdrop">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">
                        Modal title
                      </h5>
                    </div>
                    <div class="modal-body">
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder={doto.todo}
                        size="30"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                      />
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-outline-dark"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        disabled={!input}
                        onClick={(event) => {
                          db.collection("todo").doc(doto.id).set(
                            {
                              todo: input,
                            },
                            { merge: true }
                          );
                          setInput("");
                        }}
                        class="btn btn-outline-warning"
                        data-bs-dismiss="modal"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
