import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ResponsiveDrawer from './../../components/Navbar/navbar';

const drawerWidth = 220;
const Profile = (props) => {
    return (
        
        <Box sx={{ display: 'flex' }}>
        <ResponsiveDrawer></ResponsiveDrawer> 
        <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>
            Profile
        </Typography>
        <Typography paragraph>
             
        </Typography>
      </Box>
      </Box>
     );
}
 
export default Profile;