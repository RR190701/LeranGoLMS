import  React, {useEffect, useState} from 'react';
import axios from "axios";
import CodeLabCard from '../../containers/CodeLabCard/codeLabCard';
import './style.css';
import ScheduleCodeLab from '../ScheduleLab/scheduleLab';

const drawerWidth = 220;
const TrainingMaterial = ({history, courseId}) => {
    const[trainingMaterial, setMaterial] = useState([]);


    useEffect(() => {
        if(!localStorage.getItem("authToken")){
            history.push("/login");
        } 
        const fetchAllCodeLabs = async() => {
          const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          };
        try {
              const { data } = await axios.get(`/api/codelab/getAllCodeLabs/${courseId}`, config);
              console.log("trainingMaterial",data);   
              setMaterial(data.res);  
            
            } 
            catch (error) {
              console.log(error.response.data.error);
            }
          };
          
          fetchAllCodeLabs();
        },[history]);
    return (
        <>
<div className='trainingMaterial-div'>
    
    {trainingMaterial && trainingMaterial.map(({_id,courseId, fileName}) =>(
     <div>
         {fileName}
    </div>

    ))}
</div>
</>

     );
}
 
export default TrainingMaterial;