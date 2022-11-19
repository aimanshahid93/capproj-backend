import React from 'react';
import {MdAccountCircle} from "react-icons/md";
import {useNavigate} from "react-router-dom";

function InterviewTasks(){
    const navigate=useNavigate();
    const Login=()=>{
    navigate("/profile");
    }
    return(
    <div className="Interview-container">
    <div className="heading-section">
    <h1>Task Submissions</h1>
    <MdAccountCircle onClick={()=>Login()} className="Login-logo"/>
    </div>
    <h3 className="Interview">Content available after completion of Placement Preparation</h3>
    </div>
    );

}
export default InterviewTasks;