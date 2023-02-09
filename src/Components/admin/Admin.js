import React,{useState,useEffect} from 'react'
import { Line } from 'react-chartjs-2';
import './admin.css'
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate } from "react-router-dom";

import { 
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
 } from 'chart.js'
import ProgressCircle from './ProgressCircle';
import Tables from './Tables';
import Barg from './Barg';
import Icon from './Icon';
 ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
 )
function Admin({table}) {
    const navigation=useNavigate()

 const [students,setstudents]=useState([])
  const logout=()=>{
    navigation('/');
  }
 useEffect(()=>{
    console.log(table)
    setstudents(table)
 },[table])
 const datas={
labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
datasets:[
    
    {
    label: 'Dataset 1',
    data:[8,7.8,6,8,7,5,6,3,9.7,8.2,3],
    backgroundColor:'transparent',
    borderColor:'#1ecafa',
    pointBorderColor:'transparent',
    pointBorderWidth:4,
    tension:0.5
},
{
    label: 'Dataset 1',
    data:[5,8.3,6,4,9,2,7,6.3,7,3.9,5.6,9],
    backgroundColor:'transparent',
    borderColor:'#8a78ff',
    pointBorderColor:'transparent',
    pointBorderWidth:4,
    tension:0.5
}


]
 };
 const options={
    Plugin:{
        legend:true
    },
    scales:{
        x:{
            grid:{
                display:false
            },
        },
        y:{
            min:2,
            max:10,
            ticks:{
                stepSize:2,
                callback:(value)=>value+'k'
            },
            grid:{
                display: false
            }
        }

    }
 }
  return (
    <div className="box ">
        <div className="navbar absolute top-0 flex justify-evenly  w-[100vw] py-5">
     
     <h1 className="ml-60 text-3xl font-bold"> {' '}Admin Dashboard</h1>
     <button className="bg-[#ff5858]   hover:bg-[#ff0000] text-white font-bold p-2 rounded-lg " onClick={()=>{logout()}} >Logout <LogoutIcon/></button>
      
         
     </div>
 
 
        <Icon className="absolute left-0"/>
        <div className="rightbox">

      <div className="box2">
        <div className="piegraph p-10">
            <ProgressCircle/>
        </div>
        <div className="bargraph">
            <Barg/>
        </div>
        </div> 
    <div className="graph">
     <Line  data={datas} options={options}></Line>
    </div>
        </div>
        <div className="leftbox py-5">
           
                <section className="antialiased bg-gray-100 text-gray-600  px-4">
                <div className="flex flex-col justify-center h-full">
                   
                    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header className="px-5 py-4 border-b border-gray-100">
                            <h2 className="font-semibold text-gray-800 text-center">Students</h2>
                        </header>
                        <div className="p-3">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Name</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Email</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Texcnology</div>
                                            </th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">
              {  students.map((i,k)=>{
                   return  <Tables key={k} data={i}/>
                })
            }
               </tbody>
                  </table>
                </div>
            </div>
        </div>
    </div>
</section>
            
        </div>
    </div>
  )
}

export default Admin
