import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import AnchorIcon from '@mui/icons-material/Anchor';
import React from 'react';
import { Mail, Notifications } from '@mui/icons-material';
import { useState } from 'react';


const StyledToolbar = styled(Toolbar)({
    display : "flex",
    justifyContent:"space-between"
})

const Search = styled("div")(({theme})=>({
    backgroundColor : "white",
    padding : "0 10px",
    borderRadius : theme.shape.borderRadius,
    width : "40%"
}))

const Icons = styled(Box)(({theme})=>({
    display : 'none',
    gap : '20px',
    alignItems : 'center',
    [theme.breakpoints.up("sm")]:{
        display : "flex"
    }
}))

const Userbox = styled(Box)(({theme})=>({
    display : 'flex',
    gap : '10px',
    alignItems : 'center',
    [theme.breakpoints.up("sm")]:{
        display : "none"
    }
}))

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>Dapp Console</Typography>
                <AnchorIcon sx={{display:{xs:"block", sm:"none"}}}/>
                <Search>
                    <InputBase placeholder='Search Anyting you want ...' />
                </Search>
                <Icons>
                    <Badge badgeContent={99} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={11} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar onClick={()=>setOpen(true)} sx={{width:'30px', height:'30px'}} src="https://mui.com/static/images/avatar/2.jpg"/>
                </Icons>
                <Userbox onClick={()=>setOpen(true)}>
                    <Avatar sx={{width:'30px', height:'30px'}} src="https://mui.com/static/images/avatar/2.jpg" />
                    <Typography variant='span'>Admin</Typography>                        
                </Userbox>
                
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={()=>setOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
      </Menu>
            
        </AppBar>
    )
}