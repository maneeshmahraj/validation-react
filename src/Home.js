

import React, { useState } from 'react'

const Home = () => {
    const defaultValue={
        firstName:{
            id:'firstName',
            label:'First Name',
            type:'text',
            placeholder:"Enter Name...",
             value:'',
             isError:false,
                errorMsg:"first name con`t be empty"

        },
        lastName:{
            id:'lastName',
            label:'Last Name',
            type:'text',
            placeholder:"Enter last Name...",
             value:'',
             isError:false,
                errorMsg:"Last name con`t be empty"

        },
        email:{
            id:'email',
            label:'Email',
            type:'email',
            placeholder:"Enter Email...",
             value:'',
             isError:false,
                errorMsg:"email con`t be empty"

        },
        password:{
            id:'password',
            label:'password',
            type:'password',
            placeholder:"Enter password...",
             value:'',
             isError:false,
                errorMsg:"password con`t be empty"

        },
        confirmPassword:{
            id:'confirmPassword',
            label:'confirm Password',
            type:'password',
            placeholder:"Enter Confirm Password...",
             value:'',
             isError:false,
                errorMsg:"confirm password con`t be empty"

        }
    
    }
    const [formData,setFormData]=useState(defaultValue);
    const [isPassmatch,setIsPassmatch]=useState(true);
    const handleInput=(e)=>{
        let key=e.target.id;
        let value=e.target.value;
      //  console.log(key,value);
        let copyfromData={...formData}
        copyfromData[key].value=value;
          setFormData(copyfromData);
          isValidForm()
          //console.log(formData);
    }
    const passwordMatch=()=>{
            let copyfrom={...formData};
            let isPass=copyfrom["password"].value;
            let cPass=copyfrom["confirmPassword"].value;
          //  console.log(isPass,cPass);
            if(isPass!==cPass)
                {
                    setIsPassmatch(false)
                }
                else
                {
                    setIsPassmatch(true)
                }
        }
    const isValidForm=()=>{
      let copyfromData={...formData};
      Object.keys(copyfromData).forEach((key)=>{
        const obj=copyfromData[key];
       // console.log(obj)
        obj.isError=!obj.value?true:false; 
       // console.log(!obj.value)  
         passwordMatch();
      })
     
      setFormData(copyfromData);
    }
    const handlFormSubmit=(e)=>{
        e.preventDefault();
        isValidForm();
    }
   
  return (
    <div className='App'>
        <h1>Validation in React</h1>
        <div className='container1'>
        <form onSubmit={handlFormSubmit}>
        {
          Object.keys(formData).map((key)=>{
               
            const {id,placeholder,label,type,isError,errorMsg,value}=formData[key];
                return(
                    <>
                   
                   <div className='form-item'>
                   <label>{label}</label>
                   
                   <input type={type}
                    id={id}
                    placeholder={placeholder}
                      value={value}
                      onChange={handleInput}
                      className={ isError && 'error-border'}
                    />
                    {
                        isError&& <span className='error1'>{errorMsg}</span>
                    }
                    {
                        key==='confirmPassword'&& !isPassmatch&&
                        <span className='error1'>
                            password foes does not match
                        </span>
                    }
                   </div>
                    </>
                )
            })
        }
       <div className='form-item'>
       <button>Submit</button>
       </div>
        </form>
        </div>
       
      
    </div>
  )
}

export default Home;