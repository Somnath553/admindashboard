import Login from "./Components/tasks/Login";
import React,{useState} from "react";
import Admin from "./Components/admin/Admin";
import { Routes,Route,useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
function App() {
          const [auth,setauth]=useState({
            name:"",
            pass:""
          })


        const navigation=useNavigate()
          const [data,setdata] = useState()
          const [table,settable] = useState()
          const login=async()=>{
           
  
            
             await fetch(`https://admindashboard-rxhr.onrender.com/auth`,{
            method: "POST" ,
            headers: {
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(auth)
          })
  .then((response) => response.json())
  .then((actualData) => {
    if(actualData.login)
    {
      setdata(actualData.data)
      settable(actualData.table)
      navigation('/admin')
      
    }
    else
    {
      
      toast.error('Login Failed.', {
        style: {
          padding: '16px',
          color: 'white',
          background:'red',
          fontStyle:"bold"
        },
       
      });
      setauth({
        name:"",
        pass:""
      })
    }
   
  })
  .catch((err) => {
   console.log(err.message);
  })

          }
  return (
    <>
    
    <Routes>
      
      <Route path="/" element={<Login auth={auth} setauth={setauth} login={login}/>} />
      <Route path="/admin" element={<Admin data={data} table={table}/>} />
    </Routes>
   
    </>
  );
}

export default App;
