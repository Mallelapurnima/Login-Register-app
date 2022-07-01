
import React, { useState } from 'react';

function Login(){
  const [data,setData]=useState({});
  const [errors,setErrors]=useState({})

  const handleSubmit=(e)=>{
  e.preventDefault()
  const formData={
    email:this.state.email,
    password:this.state.password
  }
  console.log(formData)

  
}
const handleChange=(e)=>{
  setData({...data,[e.target.name]:e.target.value})
  if(e.target.name==='password' && e.target.value.includes(' ')){
    setErrors({...errors,passowrd:'password cannot have spaces'})
  }else{
  setErrors({...errors,password:''})
}
}

    return (
      <form>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid" onSumbit={handleSubmit}>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  }

export default Login











