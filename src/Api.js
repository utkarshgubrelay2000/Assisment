import axios from "axios";

const API_URL = "http://localhost:4000";

var currentUser = JSON.parse(localStorage.getItem("Admin"));

export const loginStudent = async (loginCredentials) => {
  const res = await axios.post(`${API_URL}/register`, loginCredentials);
  return res;
};
export const loginAdmin = async (loginCredentials) => {
  const res = await axios.post(`${API_URL}/signin`, loginCredentials);
  return res;
};

export const getQuestions = async () => {
  console.log(currentUser)
  const res = await axios.get(`${API_URL}/Questions`,{headers: { Authorization: `${currentUser.token}` },});
  return res;
};
export const allPreOrders = async () => {
  console.log(currentUser)
  const res = await axios.get(`${API_URL}/Questions`,{headers: { Authorization: `${currentUser.token}` },});
  return res;
};
export const setOrderStatus = async (id,data) => {
  console.log(currentUser)
  const res = await axios.put(`${API_URL}/set-order-status/${id}`,data,{headers: { Authorization: `${currentUser.token}` },});
  return res;
};