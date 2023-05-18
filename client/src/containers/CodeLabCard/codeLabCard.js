import React from 'react';
import Paper from '@mui/material/Paper';
import './style.css';
import { Button } from '@mui/material';
import Chip from '@mui/material/Chip';
const CodeLabCard = ({courseId, courseName, startTime, endTime, codeLabId, username, role}) => {
     const startDate = new Date(startTime);
     const endDate = new Date(endTime);
     console.log(role);
     console.log(startDate, endDate);
    return (  
        <Paper className ="codelab-card">
            <h3 style={{"margin":"0 5px 2px 0"}}>{courseName} Code Lab</h3>
            <p style={{"margin":"0 5px 1rem 0"}}>scheduled at {`${startDate.getDay()}/${startDate.getMonth()}/${startDate.getFullYear()}`}</p>
            <div>
            <Chip label={`${startDate.getHours()}:${startDate.getMinutes()} - ${endDate.getHours()+1}:${endDate.getMinutes()}`} variant="outlined" />
            </div>    
            <div style={{"display":"flex","flex-direction":"row-reverse","width":"100%"}}>
            <Button variant="contained"> 
            <a href={`http://localhost:3001/?roomid=${codeLabId}&username=${username}&role=${role}`} target = "_blank">Join</a></Button>

            </div>
        </Paper>
        
    );
}
 
export default CodeLabCard;