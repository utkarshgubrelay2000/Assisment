import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginModal({ heading, content, buttonText, setshowModal, showModal }) {
  // const [showModal, setshowModal] = useState(true);


function LoginRedirect(){
  localStorage.setItem('paymentRedirect',JSON.stringify({ paymentRedirect : true }))
}


  return (
    <div style={{ position: "absolute", top: 0, left: 0 }}>
      {/* The Modal */}

      {showModal && (
        <div
          style={{
            minHeight: "150vh",
            height: "auto",
            width: "100vw",
            backgroundColor: "black",
            opacity: "0.7",
            position: "absolute",
            zIndex: "9999",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      )}

      {showModal && (
        <div
          className="modal-dialog "
          style={{
            paddingTop: "20vh",
            width: "40vw",
            zIndex: "99999",
            display: "flex",
            justifyContent: "center",
            marginLeft: "90%",
            position: "relative",
          }}
        >
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">{heading}</h4>
              <button
                type="button"
                className="close"
                onClick={() => setshowModal(false)}
                data-dismiss="modal"
              >
                ×
              </button>
            </div>
            {/* Modal body */}
            <div className="modal-body">{content}</div>
            {/* Modal footer */}
            <div className="modal-footer">
              <p style={{ marginTop: "0vh" }}>
                
                New To Ekluvya ?
                <Link to="/register" onClick={()=> LoginRedirect(true)} style={{ color: "#EB5019" }}>
                  Register
                </Link>
              </p>

              <Link to="/login" onClick={()=> LoginRedirect(true)}>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => setshowModal(false)}
                  data-dismiss="modal"
                >
                  {buttonText}
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginModal;
