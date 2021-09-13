import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Home.css";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import {
  getQuestions,
  fetchClasses,
  setOrderStatus,
  Setquestiondetails,
  setApproved,
  deleteQuestion,
  Question,
} from "../../Api";
import { useHistory } from "react-router-dom";
import { Button, Modal, Table } from "react-bootstrap";
import moment from "moment";
export default function AdminPanel() {
  const [isUser, setIsUser] = useState(true);
  const [orders, setorders] = useState([]);
  const [show, setShow] = useState(false);
  const [paper, setpaper] = useState(false);
  const [answers, setanswers] = useState([]);
  const [question, setquestion] = useState("");
  const [correctAnswer, setcorrectAnswer] = useState(1);
  const [questionDetails, setquestionDetails] = useState({});
  const handlePaper = () => setpaper(!paper);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [searchTerm, setsearchTerm] = useState("");
  let history = useHistory();

  useEffect(() => {
    getAllOrders();
  }, []);
  const getAllOrders = async () => {
    let res = await getQuestions();
    console.log(res);
    setorders(res.data.data);
    setquestionDetails(res.data.order);
  };
  const setOrder = async () => {
    let res = await Setquestiondetails(questionDetails);
    console.log(questionDetails, res);
    alert("Success");
    handleClose();
    handlePaper();
  };
  const createQuestion = async () => {
    if (question && correctAnswer && answers.length > 0) {
      let data = {
        answers: answers,
        question: question,
        correctAnswer: correctAnswer,
      };
      let res = await Question(data);
      console.log(questionDetails, res);
      alert("Success");
      handleClose();
      handlePaper();
    }
  };
  return (
    <section className=' main-div'>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Question Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <div>
            <input
              type="number"
              className="m-3"
              placeholder="numberOfQuestion"
              defaultValue={questionDetails.numberOfQuestion}
              onChange={(e) =>
                setquestionDetails({
                  ...questionDetails,
                  numberOfQuestion: e.target.value,
                })
              }
              name="email"
              required
            />
          </div>
          <div>
            <input
              type="number"
              className="m-3"
              placeholder="timer"
              defaultValue={questionDetails.timer}
              onChange={(e) =>
                setquestionDetails({
                  ...questionDetails,
                  timer: e.target.value,
                })
              }
              name="password"
              required
            />
          </div>
        </Modal.Body>{" "}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={setOrder}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={paper} onHide={handlePaper}>
        <Modal.Header closeButton>
          <Modal.Title>Add Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <div>
            <input
              type="text"
              className="m-3"
              placeholder="Question"
              onChange={(e) => setquestion(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="number"
              className="m-3"
              placeholder="Correct Answer"
              onChange={(e) => setcorrectAnswer(e.target.value)}
              name="password"
              required
            />
          </div>
          <div>
            <input
              type="text"
              className="m-3"
              placeholder="Option 1"
              onChange={(e) => {
                let array = answers;
                array[0] = e.target.value;
                setanswers(array);
              }}
              name="answer"
              required
            />
            <input
              type="text"
              className="m-3"
              placeholder="Option 2"
              onChange={(e) => {
                let array = answers;
                array[1] = e.target.value;
                setanswers(array);
              }}
              name="answer"
              required
            />
            <input
              type="text"
              className="m-3"
              placeholder="Option 3"
              onChange={(e) => {
                let array = answers;
                array[2] = e.target.value;
                setanswers(array);
              }}
              name="answer"
              required
            />
            <input
              type="text"
              className="m-3"
              placeholder="Option 4"
              onChange={(e) => {
                let array = answers;
                array[3] = e.target.value;
                setanswers(array);
              }}
              name="answer"
              required
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePaper}>
            Close
          </Button>
          <Button variant="primary" onClick={createQuestion}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="mr-4 ml-4 text-center">
        <h1 className="mt-3">Quiz Panel</h1>
        <div style={{justifyContent:'center'}} className="row ">
          <div className="col-3">
            <a href="/dashboard">
              <button class="submit" id="start_btn">
                User
              </button>
            </a>
          </div>
          <div className="col-3">
            <button class="submit" id="start_btn" onClick={handleShow}>
              Add Paper Details
            </button>
          </div>
          <div className="col-3">
            <button class="submit" id="start_btn" onClick={handlePaper}>
              {" "}
              Add Question
            </button>
          </div>
          <div className="container mt-4 ">
          <div
            id="page"
            className="section mt-5 ml-4 m-auto row "
            style={{ minHeight: "300px" }}
          >
            <div style={{marginTop:"5%",marginBottom:"5%" }}className="col-8  ml-auto mr-auto">
              <input
                type="search"
                className="form-control form-control-sm"
                placeholder="Searching"
                aria-controls="datatable-buttons"
                onChange={(e) => setsearchTerm(e.target.value)}
              />
            </div>
            <Table className='text-light'  hover responsive>
              <thead className='text-light' >
                <tr className='text-light' >
                  <th>Sno.</th>
                  <th>Question</th>
                  <th>correct Option</th>

                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders
                  .filter((item, index) => {
                    if (
                      item.question
                        .toLocaleLowerCase()
                        .includes(searchTerm.toLocaleLowerCase())
                    )
                      return item;
                  })
                  .map((item, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.question}</td>
                        <td>{item.correctAnswer}</td>

                        <td>{moment(item.updatedAt).format("MMMM Do YYYY")}</td>
                        <td class="d-flex">
                     
                          {item.approved ? (
                            <div
                              onClick={async () => {
                                await setApproved(item._id, { approved: false });
                                getAllOrders();
                              }}
                              class="m-2"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-check-lg text-success"
                                viewBox="0 0 16 16"
                              >
                                <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z" />
                              </svg>
                            </div>
                          ) : (
                            <div
                              onClick={async () => {
                                await setApproved(item._id, { approved: true });
                                getAllOrders();
                              }}
                              class="m-2"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-x-circle text-danger"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                              </svg>
                            </div>
                          )}
                          <div
                            onClick={async () => {
                              await deleteQuestion(item._id);
                              getAllOrders();
                            }}
                            class="m-2"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-trash-fill text-danger"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </div>
        </div>
    
        </div>
        
      </div>
    </section>
  );
}
