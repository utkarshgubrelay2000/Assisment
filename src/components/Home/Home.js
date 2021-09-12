import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Home.css";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import { allPreOrders, fetchClasses, setOrderStatus } from "../../Api";
import { useHistory } from 'react-router-dom'
import { Table } from "react-bootstrap";
import moment from 'moment'
export default function Home() {
  const [isUser,setIsUser]=useState(true)
  const [orders,setorders]=useState([])
  
  const [searchTerm, setsearchTerm] = useState("");
  let history = useHistory()

  useEffect(() => {
    getAllOrders()
  }, []);
  const getAllOrders=async()=>{
let res=await allPreOrders()
console.log(res)
setorders(res.data)
  }
  return (
    <Layout>
      <div className='mr-4 ml-4 text-center'>
        
        <h2 className="mt-3">Pre Primary Bookings</h2>
        <div className='row'>
        <div className='col-6'>
 <a href='/admin-quiz'>
 <button class="submit" id="start_btn" >Quiz Panel</button>
 </a>
 </div>
     <div className='col-6'>
              <input
                type="search"
                className="form-control form-control-sm"
                placeholder="name,email,status"
                aria-controls="datatable-buttons"
                onChange={(e) => setsearchTerm(e.target.value)}
              />
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