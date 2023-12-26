import React,{useEffect,useState} from "react";
import "../Styles/home.css";
import { useNavigate,Link } from "react-router-dom"
import Axios from "axios"
import { useCrudData } from "../Context/CrudContext";

function home() {

  let { CrudData = [] } = useCrudData([]);

  // console.log("CrudData",CrudData)

  const navigator = useNavigate();

  const creation_page = () => {

    navigator("/create")

    //Auto Refresh

    
  }

  //Delete User Functionality

  const delete_btn = async (id) => {

    try {


      const res = await Axios.delete(`http://localhost:5000/delete/${id}`);

      // console.log("res",res)
      
      if (res.data.message == "User Deleted Successfully!") {
        alert("User Deleted Successfully!")
        window.location.reload();
      } else if (res.data.message == "Can't able to delete user") {
        alert("Can't able to delete user")
      }
      else {
        alert("Server Busy")
      }
      
      
    
    } catch (error) {
      console.log("error", error)
    }


  }


  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>
            <button type="button" id="create_btn"className="btn btn-success btn-sm" onClick={creation_page}>
                      Create User
                    </button>

            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th colSpan={7} style={{ fontSize: "20px" }}>User List</th>
      
                </tr>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Roll No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Date Of Birth</th>
                  <th scope="col">Mobile No</th>
                  <th scope="col">Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
              
                {CrudData.map((user, index) => (
                    <tr key={index}> 
                    <th scope="row">{index + 1}</th>
                    <td style={{ textAlign: "right" }}>{user.rollno}</td>
                    <td style={{textAlign:"left"}}>{user.name}</td>
                    <td style={{textAlign:"left"}}>{user.email}</td>
                    <td style={{textAlign:"left"}}>{user.dob}</td>
                    <td style={{textAlign:"left"}}>{user.mobileno}</td>
                    <td>
                      <div className="buttons">
                        <Link to={`/update/${user._id}`} className='btn btn-primary btn-sm m-1'>
                        Edit
                      </Link>
                      <button type="button" id="delete_btn"className="btn btn-danger btn-sm" onClick={(e)=>delete_btn(user._id)}>
                        Delete
                      </button>
                     </div>
                    </td>
                </tr>
               
                 ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default home
