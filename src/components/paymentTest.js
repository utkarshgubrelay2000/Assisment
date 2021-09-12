import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";

var md5 = require("md5");
var sha256 = require("sha256");
var dateformat = require("dateformat");

export default function PaymentTest({ showPaymentModal, totalAmount,orderId,course,fname,lname,email,phone,address,town }) {
  // var sendAmount = Math.round((totalAmount/100)*18) ;
  // alert("amount is ",sendAmount)
  const currentUser = JSON.parse(localStorage.getItem('eklavyaStudent'))



  const [checksumGen, setchecksumGen] = useState(null);
  const [pvtkey, setpvtkey] = useState(null);
  // const [mid, setmid] = useState(35381)

  // TEST 24516
  // Live 35381

  useEffect(() => {
    if(orderId) {
      // console.log('Order id is ',orderId);
      // document.getElementById("submitPayment").click();
    }

    return () => {};
  }, [orderId]);

  var req = {
    body: {
      buyerEmail: email,
      buyerFirstName: fname,
      buyerLastName: lname,
      buyerAddress: address,
      buyerCity:  town,
    
      buyerCountry: "india",
      amount: totalAmount,
      orderid: orderId,
      buyerPhone: phone,
    
    },
  };

  var username = "8697664"; // Username
  var password = "RE2a9vRb"; // Password
  var secret = "vsKP5gcYx6CNsThC"; // API key
  var mid = "35381";
console.log(totalAmount)
  useEffect(() => {
    var now = new Date();

    var alldata =
      req.body.buyerEmail +
      req.body.buyerFirstName +
      req.body.buyerLastName +
      req.body.buyerAddress +
      req.body.buyerCity +
     
   
      req.body.buyerCountry +
      req.body.amount +
      req.body.orderid;
    var udata = username + ":|:" + password;
    var privatekey = sha256(secret + "@" + udata);
    var aldata = alldata + dateformat(now, "yyyy-mm-dd");
    var checksum = md5(aldata + privatekey);

    setchecksumGen(checksum);
    // console.log(checksum);
    // console.log(aldata);
    // console.log(privatekey);
    setpvtkey(privatekey);

    return () => {};
  }, []);

  return (
    <div>
      <div>
        <form
          action="https://payments.airpay.co.in/pay/index.php"
          method="post"
          target="airpayiframe"
        >
          <input type="hidden" name="privatekey" defaultValue={pvtkey} />
          <input type="hidden" name="mercid" defaultValue={mid} />
          <input type="hidden" name="orderid" defaultValue={req.body.orderid} />
          <input type="hidden" name="kittype" defaultValue="iframe" />
          <input type="hidden" name="currency" defaultValue={356} />
          <input type="hidden" name="isocurrency" defaultValue="INR" />
          <input
            type="hidden"
            name="buyerEmail"
            defaultValue={req.body.buyerEmail}
          />
          <input
            type="hidden"
            name="buyerPhone"
            defaultValue={req.body.buyerPhone}
          />
          <input
            type="hidden"
            name="buyerFirstName"
            defaultValue={req.body.buyerFirstName}
          />
          <input
            type="hidden"
            name="buyerLastName"
            defaultValue={req.body.buyerLastName}
          />
          <input
            type="hidden"
            name="buyerAddress"
            defaultValue={req.body.buyerAddress}
          />
       
          <input
            type="hidden"
            name="buyerCountry"
            defaultValue={req.body.buyerCountry}
          />
          <input
            type="hidden"
            name="buyerCity"
            defaultValue={req.body.buyerCity}
          />
          <input type="hidden" name="amount" defaultValue={req.body.amount} />
          <input type="hidden" name="customvar" defaultValue="abc" />
          <input type="hidden" name="checksum" defaultValue={checksumGen} />
          <button
            type="submit"
            id="submitPayment"
            style={{
              padding: "10px 40px",
              backgroundColor: "#eb5019",
              color: "white",
              border : 'none'
            }}
          >
            Pay Now
          </button>
        </form>

        {/* <iframe
          name="airpayiframe"
          className="iframe_payment"
          height={500}
          width={400}
        /> */}

        {showPaymentModal && (
          <div className="modal" tabIndex={-1} role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Modal title</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body"></div>
                {/* <div className="modal-footer">
              <button type="button" className="btn btn-primary">Save changes</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
