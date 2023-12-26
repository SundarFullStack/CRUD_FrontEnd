import React,{useState} from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Axios from "axios";
import { useCrudData } from "../Context/CrudContext";


function update() {

 
  
  const { id } = useParams();

  const navigator = useNavigate();

  let { CrudData = [] } = useCrudData([]);

  console.log("CrudData",CrudData);

  let updateUser = CrudData.find((f)=> f._id==id);

   console.log("updateUser",updateUser.name);

  // console.log("id",id);

  const [rollno, setrollno] = useState(updateUser.rollno);
  const [name, setname] = useState(updateUser.name);
  const [email, setemail] = useState(updateUser.email);
  const [password, setpassword] = useState(updateUser.password);
  const [mobileno, setmobileno] = useState(updateUser.mobileno);
  const [dob,setdob] = useState(updateUser.dob)

 console.log(rollno,email,name,password,mobileno)

//Handling User Updation 
  const handle_update = async () => {

    try {

      if (!rollno || !name || !email || !password || !mobileno || !dob) {

       alert("Please Provide All Fields")

      }
      else {
        
        const res = await Axios.put(`http://localhost:5000/update/${id}`, {
          rollno, name, email, password, mobileno,dob
        })

        navigator("/")
        window.location.reload();

        // console.log("res", res.data.message);

        if (res.data.message == "User Updated Successfully!!!") {
          alert("User Updated Successfully!!!")
        } else if (res.data.message == "User Id Not Matched for the exist user") {
          alert("User Id Not Matched for the exist user")
        }
        else {
          alert("Server Busy")
        }
      
     

      }
    }
    catch (error) {
      console.log("error in updating user",error)
    }
  
}


  
  return (
    <div className="container" style={{marginBottom:"20px"}}>
    <div className="row">
      <div className="col d-flex justify-content-center">
        <div className="card text-center">
          <div className="card-body">
            <div className="mb-5 mt-3 align-center">
              <h5>Update User</h5>
            </div>
            {/* Roll No */}
            <div className="row px-3 mb-4">
              <input
                  type="text"
                  className="mb-3"
                  placeholder="Enter Your Roll No"
                  name="rollNo"
                  value={rollno}
                  onChange={(e) => setrollno(e.target.value)}
              />
              
            </div>
            {/* Name */}
            <div className="row px-3 mb-4">
              <input
                type="text"
                className="mb-3"
                placeholder="Enter Your Name"
                  name="name"
                  value={name}
                onChange={(e)=>setname(e.target.value)}
              />
            </div>
            {/* Email */}
            <div className="row px-3 mb-4">
              <input
                type="email"
                className="mb-3"
                placeholder="Enter Your EmailId"
                name="email"
                value={email}
                onChange={(e)=>setemail(e.target.value)}
              />
            </div>
            {/* Password */}
            <div className="row px-3 mb-4">
              <input
                type="text"
                className="mb-3"
                placeholder="Enter Your Password"
                name="password"
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
              />
            </div>
               {/* DOB */}
               <div className="row px-3 mb-4">
                <input
                  type="date"
                  className="mb-3"
                  placeholder="Enter Your DOB"
                  name="dob"
                  value={dob}
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
                  value={mobileno}
                onChange={(e)=>setmobileno(e.target.value)}
              />
            </div>
             {/* Save button */}
             <div className="row px-3 mb-4">
             <button type="button" id="save_btn" onClick={handle_update} className="btn btn-primary">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default update
