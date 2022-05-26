import React from "react";
import { useNavigate } from "react-router-dom";

function NotFoundPage(props) {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Error 404 : Not Found</h1>
      <p>
        <button onClick={() => navigate("/")}>Home</button>
      </p>
    </div>
  );
}

export default NotFoundPage;
