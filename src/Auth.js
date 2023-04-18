import React, {useState} from 'react'
import {
    Box,
    Button,
    TextField,
    Typography
} from "@mui/material";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import HowToRegIcon from '@mui/icons-material/HowToReg';


const Auth = () => {

    const [isSignUp, setisSignUp] = useState(false);

    const [input, setInput] = useState({
        name:"", 
        email:"", 
        password:"",
    });

    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(input);
    }

    const resetState=() =>{
        setisSignUp(!isSignUp);
        setInput({
            name:"",
            email:"",
            password:""
        })

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Box display="flex" 
            flexDirection={"column"} 
            maxWidth={400} 
            alignItems="center" 
            justifyContent={"center"}
            margin="auto"
            marginTop={5}
            padding={3}
            borderRadius={5}
            boxShadow={'5px 5px 10px #ccc'}
            sx={{":hover":{
                boxShadow: '10px 10px 20px #ccc',
            }}}
            >
              <Typography variant='h2' padding={3} textAlign={"center"}>
              {isSignUp? "Sign Up":"Login"}
                </Typography>
            {isSignUp &&(
              <TextField 
              onChange={handleChange}
              name="name" 
              value={input.name}
              margin='normal' 
              type={'text'} 
              variant='outlined'
              placeholder='Name'/> )}
              
                <TextField 
                onChange={handleChange}
                name="email" 
                value={input.email}
                margin='normal' 
                type={'email'} 
                variant='outlined'
                placeholder='Emai;'/>
              
              <TextField 
              onChange={handleChange}
              name="password" 
              value={input.password}
              margin='normal' 
              type={'password'} 
              variant='outlined'
              placeholder='Password'/>
             
              <Button 
              endIcon={isSignUp? <HowToRegIcon />: <LoginOutlinedIcon/>}
              type="submit"
              sx={{marginTop:3, borderRadius:3}} 
              variant='contained' 
              color='primary' >
                {!isSignUp? "Login":"Sign Up"}
                </Button>
            
              <Typography 
              sx={{paddingTop:5}} 
              alignContent={'center'}>
                {!isSignUp? "Don't have an account?" : "Already have an account?"}
                </Typography>

              <Button 
              endIcon={isSignUp? <LoginOutlinedIcon/> : <HowToRegIcon /> }
              onClick={resetState}
              sx={{borderRadius:3}}>
              {!isSignUp? "Sign Up":"Login"}
                </Button>

            </Box>
        </form>
    </div>
  )
}

export default Auth;