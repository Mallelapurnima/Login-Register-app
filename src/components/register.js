import  { useState } from 'react'

function SignUp(){
const [data,setData]=useState({})

const handleSubmit=(e)=>{
    e.preventDefault()
    const formData={
        name:this.state.name,
        EmployeeId:this.state.EmployeeId,
        mobileNumber:this.state.mobileNumber,
        password:this.state.password
    }
    console.log(formData)

    
}
const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
}


return (
            <form>
                <div className='mb-3'>
                    <label>Name</label>
                    <input type='text'
                    className='form-control'
                     name='name'
                     placeholder='first name'
                     onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    <label>Employee Id</label>
                    <input type='text' className='form-control'
                    name='EmployeeId' placeholder='Employee Id'
                    onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    <label>Email</label>
                    <input type='text' className='form-control'
                    name='email' placeholder='Email'
                    onChange={handleChange} />
                </div>
                    <div className='mb-3'>
                    <label>Mobile Number</label>
                    <input type='text' 
                    name='mobileNumber'className='form-control' placeholder='Mobile Number'
                    onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    <label>Password</label>
                    <input type='text' 
                    name='password'className='form-control' placeholder='Password'
                    onChange={handleChange} />
                </div>
                <div className='d-grid' onSubmit={handleSubmit}>
                    <button type='submit' className='btn btn-primary'>Sing Up</button>
                    </div>
                    <p className='forgot-password text-right'>
                        Already registered <a href='/sign -in'> Sign in?</a>
                    </p>
                    </form>

        )
}
        export default SignUp
    
