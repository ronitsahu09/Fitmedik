//left handside block of the project
import React from 'react'
import { FiUser } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";


import"./left.css"

export default function Left() {
  return (
    <>
    <div className="panel">
    <table>
      <tr>
        <FiUser/>
      <td>
        <h3>Active User</h3>
      
        <h2>879</h2>
      </td>
      </tr>
    </table>
    <br/>    <br/>    <br/>
    
    <div className="dashboard">
      <RiDashboardLine/>
    <h3>&nbsp;Dashboard</h3>
    </div>

    <br/>    <br/>    <br/>

    <div className="notification">
     <IoIosNotificationsOutline/>
    <h3>&nbsp;Notification</h3>
    </div> 
    <br/>    <br/>    <br/>


    </div>
    </>
    );
}
