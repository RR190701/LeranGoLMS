import  React, {useEffect, useState} from 'react';
import axios from "axios";
import CodeLabCard from '../../containers/CodeLabCard/codeLabCard';
import { Button } from '@mui/material';
import './style.css';
import ScheduleCodeLab from '../ScheduleLab/scheduleLab';

const drawerWidth = 220;
const CodeLab = ({history, courseId, role}) => {
    const[codelabs, setCodeLabs] = useState([]);


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
              console.log(data);   
              setCodeLabs(data.res);  
            
            } 
            catch (error) {
              console.log(error.response.data.error);
            }
          };
          
          fetchAllCodeLabs();
        },[history]);
    return (
        <>
        <ScheduleCodeLab></ScheduleCodeLab>
<div className='codelabs-div'>
    
    {codelabs && codelabs.map(({_id,courseId, courseName, startTime, endTime, codeLabId}) =>(

    <CodeLabCard key ={_id} courseId ={courseId}
    courseName = {courseName}
    startTime= {startTime}
    role = {role}
    username={ localStorage.getItem("username")}
    endTime = {endTime}
    codeLabId = {codeLabId}>
    </CodeLabCard>
    ))}
</div>
</>

     );
}
 
export default CodeLab;