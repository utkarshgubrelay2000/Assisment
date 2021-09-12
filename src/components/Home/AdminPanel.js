import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Home.css";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import { getQuestions, fetchClasses, setOrderStatus } from "../../Api";
import { useHistory } from 'react-router-dom'
import { Button, Modal, Table } from "react-bootstrap";
import moment from 'moment'
export default function AdminPanel() {
  const [isUser,setIsUser]=useState(true)
  const [orders,setorders]=useState([])
  const [show, setShow] = useState(false);
  const [paper, setpaper] = useState(false);
const [questionDetails,setquestionDetails]=useState({})
  const handlePaper = () => setpaper(!paper);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [searchTerm, setsearchTerm] = useState("");
  let history = useHistory()

  useEffect(() => {
    getAllOrders()
  }, []);
  const getAllOrders=async()=>{
let res=await getQuestions()
console.log(res)

  }
  return (
    <Layout>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={paper} onHide={handlePaper}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePaper}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePaper}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className='mr-4 ml-4 text-center'>
        
        <h2 className="mt-3">Pre Primary Bookings</h2>
        <div className='row m-auto'>
        <div className='col-3'>
 <a href='/admin-quiz'>
 <button class="submit" id="start_btn" >User</button>
 </a>
 </div>
 <div className='col-3'>

 <button class="submit" id="start_btn" onClick={handleShow} >Add Question</button>

 </div>
 <div className='col-3'>

 <button class="submit" id="start_btn" onClick={handlePaper} >Add Paper Details</button>

 </div>
   </div>
        
      <div id="page" className="section mt-5  " style={{minHeight:'300px'}}>
      <Table striped bordered hover responsive >
  <thead>
    <tr>
      <th>Sno.</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>amount</th>
      <th>Class</th>
      <th>Address</th>
      <th>State</th>   
      <th>Date</th>
      <th>APTRANSACTIONID</th>
      <th>Status</th>
    
    </tr>
  </thead>
  <tbody>
    {orders
            .filter((item, index) => {
              if (
                item.fname
                  .toLocaleLowerCase()
                  .includes(searchTerm.toLocaleLowerCase()) 
              )
                return item;
              else  if (
                  item.email
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase()) 
                )
                return item
              else  if (
                  item.lname
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase()) 
                )
                  return item;
                  else  if (
                    item.status
                      .toLocaleLowerCase()
                      .includes(searchTerm.toLocaleLowerCase()) 
                  )
                    return item;
            }).map((item,index)=>{
      return(
    <tr>
      <td>{index+1}</td>
      <td>{item.fname} {item.lname}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.totalAmount}</td>
      <td>{item.className}</td>
      <td>{item.userAddress} , {item.userTown},{item.pinCode} </td>
      <td> {item.state} </td>
  
    
      <td>
     { moment(item.updatedAt).format('MMMM Do YYYY')}
      </td>
      <td>{item.APTRANSACTIONID?item.APTRANSACTIONID:"pending Payment"}</td>  <td> 
        <select class="form-select" defaultValue={item.status} onChange={async(e)=>{
          let data={status:e.target.value}
         await setOrderStatus(item._id,data)
          alert("Done")
        }} aria-label="Default select example">
 
  <option value="New Lead">New Lead</option>
  <option value="In-quene">In-quene</option>
  <option value="In-Transit">In-Transit</option>
  <option value="Delivered">Delivered</option>
</select></td>
    </tr>
   )
    })}</tbody>
</Table>
      </div>

 </div>
    </Layout>
  )
}