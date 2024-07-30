import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"



const NavBar = () => {
  
    const StyledToolBar = styled(Toolbar)(({ theme }) => ({
       
      }));

    return (
      <>
      <AppBar position="absolute">
        <StyledToolBar>
        <MenuItem>About</MenuItem>
        <MenuItem>Skills</MenuItem>
        <MenuItem>Project</MenuItem>
        </StyledToolBar>
      </AppBar>
      </>
    )
  }
  
  export default NavBar
  