import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import './App.css'

const appBarStyle = {
  backgroundColor: "inherit",
  marginTop: "20px",
};
const titleStyle = {
  flexGrow: 1,
  fontWeight: 500,
  color: "inherit",
  textDecoration: "none",
  fontSize: "4em",
  fontFamily: "Georgia",
};

const titleText = "PivotPlan".toUpperCase();
const getPlanText = "Get Full Pivot Plan";

function App() {
  return (
    <>
      <AppBar position="static" sx={appBarStyle}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img
            src="/wolf.png"
            alt="Wolf"
            className="desktop-logo"
          
          />          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={titleStyle}
            className="title"
          >
            {titleText}
          </Typography>

          
          <Box sx={{ flexGrow: 0}}>
              <div className="full-plan">
                <span style={{color: "gold"}}>{getPlanText}</span>
              </div>
              <IconButton size="large">
                <ShoppingCartIcon sx={{ color: "white", fontSize: "3em" }} />
              </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>


    <Container sx={{backgroundColor: "inherit", width: "60%", textAlign: "center", color: "white"}}>
      <h1 className="slogan-top">Adapt To A Routine</h1>
      <h1 className="slogan-bottom">That is Designed For Your Needs.</h1>

      <div className="sub-heading">


      <h2>Progress Starts With a Strategy.</h2>
      <h2>Start Reaching Your Potential Today.</h2>

      </div>


        <Button
      variant="contained"
      color="success"
      startIcon={<IconButton size="medium" sx={{ color: "white" }}><RocketLaunchIcon fontSize="large"/></IconButton>} // Optional: Adds an icon to the button
      sx={{ 
        marginTop: '100px',
        padding: '10px 20px', // Custom padding for larger size
        fontSize: '1.5em', // Bigger font size
      }}
    >
      Launch
    </Button>
    </Container>
    </>

  );
}
export default App;
