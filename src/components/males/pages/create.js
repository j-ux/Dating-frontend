import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'


const Create=()=>{

    
    const {register, handleSubmit, errors}  = useForm()

    const [showMessage, editShowMessage] = useState(false)
    const [errorMessage, editErrorMessage] = useState(false)

    const Message=()=>{
        if(showMessage){
            return(
                <div className="alert alert-success">
                    <strong>Success!</strong> Male added!
                </div>
            )
        }

        return "";

    }

    const ShowErrorMessage=()=>{
        if(errorMessage){
            return(
                <div className="alert alert-danger">
                    <strong>Server error!</strong> Please try again later.
                </div>
            )
        }

        return "";

    }
    const onSubmit=  async (formData,event)=>{
        editShowMessage(false)
        editErrorMessage(false)

        try{

            await axios.post('http://localhost:8000/api/males',formData)
            editShowMessage(true)


        }catch (e) {
            editErrorMessage(true)

        }








        event.target.reset()



    }


    return (
        <div className="row">
            <div className="col-lg-12 text-center ">
                <h1>Register new male user </h1>

                <br/>
                <br/>

                <div className="row text-left">



                    <div className="col-lg-6 mx-auto">

                        <Message/>
                        <ShowErrorMessage/>


                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label >Name:</label>
                                <input  type="text" name="name" className="form-control" placeholder="Enter name" ref={register({required:true, minLength:3})} />

                                {errors.name && <p className="error"><strong>Please enter a value for name</strong></p>}

                            </div>
                            <div className="form-group">
                                <label >Email:</label>
                                <input type="email" name="email" className="form-control" placeholder="Enter email" ref={register({required:true})} />

                                {errors.email && <p className="error"><strong>Please enter a value for email</strong></p>}

                            </div>



                            <div className="form-group">
                                <label >Phone:</label>
                                <input type="text" name="phone" className="form-control" placeholder="Enter phone" ref={register({required:true})} />

                                {errors.phone && <p className="error"><strong>Please enter a value for phone</strong></p>}

                            </div>
                            <div className="form-group">
                                <label >hobbies:</label>
                                <input type="text" name="hobbies" className="form-control" placeholder="Enter hobbies" ref={register({required:true})} />

                                {errors.hobbies && <p className="error"><strong>Please enter your hobbies</strong></p>}

                            </div>
                            <div className="form-group">
                                <label >employment_status:</label>
                                <input type="text" name="employment_status" className="form-control" placeholder="Enter employment_status" ref={register({required:true})}/>
                                {errors.employment_status && <p className="error"><strong>Please employment status</strong></p>}

                            </div>
                            <div className="form-group">
                                <label >marital_status:</label>
                                <input type="text" name="marital_status" className="form-control" placeholder="Enter marital_status" ref={register({required:true})} />

                                {errors.marital_status && <p className="error"><strong>Please enter your marital _status</strong></p>}

                            </div>
                            <div className="form-group">
                                <label >age:</label>
                                <input type="text" name="age" className="form-control" placeholder="Enter your age" ref={register({required:true})} />

                                {errors.age && <p className="error"><strong>Please enter a value </strong></p>}

                            </div>





                            <button type="submit" className="btn btn-primary">Register</button>
                        </form>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Create