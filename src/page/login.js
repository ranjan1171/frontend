import React, { useState } from 'react'
import loginSignupImage from "../assest/signup.png"
import { BiShow } from "react-icons/bi";
import { GrFormViewHide } from "react-icons/gr";
import { Link } from "react-router-dom";
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { useDispatch,useSelector } from 'react-redux';
import { loginRedux } from '../redux/userSlice';


const Login = () => {
  const[showPassword, setShowPassword]=useState(false)


  const [data,setData]= useState({

     
      email:"",
      password:"",
     
  });
  const navigate=useNavigate()
 
  const userData=useSelector(state=>state)
  console.log(userData.user)

  const dispatch= useDispatch()


  const handleShowPassword=()=>{
      setShowPassword(preve=>!preve)
  };
  
  const handleOnChange=(e)=>{
      const {name, value}=e.target
      setData((preve)=>{
          return{
              ...preve,
              [name]:value
          }
      })

  }
  const handleSubmit=async(e)=>{
      e.preventDefault()
      const {email,password}=data

      if(email&&password){
         
        const fetchData= await fetch(`${ process.env.REACT_APP_SERVER_DOMIN}/login`,{
            method :"POST",
            headers: {
                "content-type" : "application/json"

            },
            body: JSON.stringify(data)
        })
        const dataRes =await fetchData.json()
        console.log(dataRes)
        toast( dataRes.message)

        if(dataRes.alert){
            dispatch(loginRedux (dataRes))
        setTimeout(()=>{
            navigate("/")


        },1000) ;

         }
         console.log(userData)
         
          }
          
          

      
      else {
           alert("please Enter require field")
      }

      
  }



  return (
    <div className='p-3 md:p-4'>
    <div className='w-full max-w-sm bg-white m-auto flex  flex-col p-4' >
        {/* <h1 className='text-center text-2xl font-bold' >sign up</h1> */}
        <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto'>

            <img src={loginSignupImage} className='w-full' alt="Upload Img"/>
        </div>

        <form className='w-full py-3  flex flex-col'onSubmit={handleSubmit} >
          
           

            <label htmlFor='email'>Email</label>
            <input type={"email"} id="email" name ='email' className=' mt-1   mb-2 w-full bg-slate-200 p-2 px-2 py-1 rounded focus-within:outline-blue-300'value={data.email} onChange={handleOnChange}/>

            <label htmlFor='password'>Password</label>
            <div className='flex  px-2 py-1 bg-slate-200 rounded mt-1   mb-2  focus-within:outline focus-within:outline-blue-300'>
            <input type={showPassword ? "text":"password"} id="password" name ='password' className='  w-full bg-slate-200  rounded border-none outline-none'value={data.password} onChange={handleOnChange}/>
            <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}> {showPassword ?<BiShow /> :<GrFormViewHide />}</span>
            </div>

           

            <button  className=" w-full max-w-[150px] m-auto  bg-red-500 hover:bg-red-600 cursor-pointer text-white tex-xl font-medium text-center py-1 rounded-full mt-4">   login </button>






        </form>
        <p  className='text-left text-sm mt-3'>Don't have account ?{" "} <Link to ={"/signup"} className='text-red-600 underline'>Sign up</Link> </p>





    </div>
  
</div>
  )
}

export default Login
