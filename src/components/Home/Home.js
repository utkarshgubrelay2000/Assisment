import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Home.css";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import {
  allPreOrders,
  fetchClasses,
  getUsers,
  setOrderStatus,
} from "../../Api";
import { useHistory } from "react-router-dom";
import { Table } from "react-bootstrap";
import moment from "moment";
export default function Home() {
  const [isUser, setIsUser] = useState(true);
  const [orders, setorders] = useState([]);

  const [searchTerm, setsearchTerm] = useState("");
  let history = useHistory();

  useEffect(() => {
    getAllOrders();
  }, []);
  const getAllOrders = async () => {
    let res = await getUsers();
    console.log(res);
    setorders(res.data.data);
  };
  return (
    <section className=' main-div'>
      <div className="mr-4 ml-4 text-center">
        <h2 className="mt-3">All Users</h2>
        <div className="row">
          <div className="col-6">
            <a href="/admin-quiz">
              <button class="submit" id="start_btn">
                Quiz Panel
              </button>
            </a>
          </div>
          <div className="col-6">
            <a >
              <button onClick={()=>{
                localStorage.removeItem('Admin')
                window.location.href='/'
              }} class="submit" id="start_btn">
               Logout
              </button>
            </a>
          </div>
          <div
          id="page"
          className="section mt-5  row"
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
          <div class='container'>
          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>Sno.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Result</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {orders
                .filter((item, index) => {
                  if (
                    item.name
                      .toLocaleLowerCase()
                      .includes(searchTerm.toLocaleLowerCase())
                  )
                    return item;
                  else if (
                    item.email
                      .toLocaleLowerCase()
                      .includes(searchTerm.toLocaleLowerCase())
                  )
                    return item;
                })
                .map((item, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.name} </td>
                      <td>{item.email}</td>
                      <td>{item.result}</td>

                      <td>{moment(item.updatedAt).format("MMMM Do YYYY")}</td>
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
