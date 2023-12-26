import React,{useEffect,useState} from 'react'
import Axios from "axios";
import {useCrudData} from '../Context/CrudContext'

function Data() {

    const { CrudData, setCrudData } = useCrudData();

    //Fetching userList using axios  get method

    useEffect(() => {

        Axios.get("http://localhost:5000/select").then(result => {
            if (result && result.data) {
                // console.log("result", result.data)
                setCrudData(result.data.userList)
            }
        }).catch(error => console.log("error", error));

        return () => { };

    }, [])

   
    return (
      
    <div></div>
  )
}

export default Data