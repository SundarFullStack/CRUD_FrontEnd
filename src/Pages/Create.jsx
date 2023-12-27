import React,{useState} from "react";
import "../Styles/create.css";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import axios from "axios";
import { useCrudData } from "../Context/CrudContext";
function Create() {

  const [rollno, setRollno] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [dob, setdob] = useState("");
 
  // console.log("dob",dob)
  const navigator = useNavigate();

  const handle_save = async (e) => {

    e.preventDefault();

    try {

      if (!rollno || !name || !email || !password || !mobileno || !dob) {

        toast.error("Please Provide All Fields");
        
        
      }
      else {

        // console.log("UserData",rollno,name,email,password,mobileno)

        const res = await axios.post("https://crud-backend-tlbi.onrender.com/create", {
          rollno,name,email,password,mobileno,dob
        })

      

        // console.log("res", res.data.message);
        // console.log("res", res.data);

        if(res.data.message == "User Saved Successfully"){
          alert(res.data.message);
          navigator("/")
          window.location.reload();
        }else if(res.data.message == "User Already Exist"){
          // toast.error("User Already Exist")
          alert(res.data.message)
        }else if(res.data.message =="Error in Saving User"){
          alert(res.data)
        } else if (res.data.message == "Server Busy") {
          alert(res.data)
        }


      }
      
    }catch(error){
      console.log("error",error)
    }


   
  }
  return (
    <div className="container" style={{marginBottom:"20px"}}>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <div className="card text-center">
            <div className="card-body">
              <div className="mb-5 mt-3 align-center">
                <h5>Add User</h5>
              </div>
              {/* Roll No */}
              <div className="row px-3 mb-4">
                <input
                  type="text"
                  className="mb-3"
                  placeholder="Enter Your Roll No"
                  name="rollNo"
                  onChange={(e) =>setRollno(e.target.value)}
                />
              </div>
              {/* Name */}
              <div className="row px-3 mb-4">
                <input
                  type="text"
                  className="mb-3"
                  placeholder="Enter Your Name"
                  name="name"
                  onChange={(e) =>setName(e.target.value)}
                />
              </div>
              {/* Email */}
              <div className="row px-3 mb-4">
                <input
                  type="email"
                  className="mb-3"
                  placeholder="Enter Your EmailId"
                  name="email"
                  onChange={(e) =>setEmail(e.target.value)}
                />
              </div>
              {/* Password */}
              <div className="row px-3 mb-4">
                <input
                  type="text"
                  className="mb-3"
                  placeholder="Enter Your Password"
                  name="password"
                  onChange={(e) =>setPassword(e.target.value)}
                />
              </div>
              {/* DOB */}
              <div className="row px-3 mb-4">
                <input
                  type="date"
                  className="mb-3"
                  placeholder="Enter Your DOB"
                  name="dob"
                  onChange={(e) =>setdob(e.target.value)}
                />
              </div>
              {/* Mobile Number */}
              <div className="row px-3 mb-4">
                <input
                  type="text"
                  className="mb-3"
                  placeholder="Enter Your Mobile No"
                  name="mobileNo"
                  onChange={(e) =>setMobileno(e.target.value)}
                />
              </div>
               {/* Save button */}
               <div className="row px-3 mb-4">
               <button type="button" id="save_btn" onClick={handle_save} className="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
