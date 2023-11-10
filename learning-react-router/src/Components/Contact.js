import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate()
    const goToAbout = ()=> {
        navigate("/home")
    }
    const goBack = ()=> {
        navigate(-1)
    }
  return (
    <div>
      <header>
        Contact Page
        <button onClick={goToAbout}>Home</button>
        <button onClick={()=>goBack()}>goBack</button>
      </header>
    </div>
  );
};

export default Contact;
