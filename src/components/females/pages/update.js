import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {useForm} from 'react-hook-form'

import axios from 'axios'


const Update=(props)=>{

    let {id} = useParams()


    const {register, handleSubmit, errors}  = useForm()

    const [femaleState,editFemaleState] = useState()
    const [showMessage, editShowMessage] = useState(false)
    const [errorMessage, editErrorMessage] = useState(false)
    const[isFetched, editIsFetched ] = useState(false);

    const fetchData=async ()=>{

        try{
            const response = await axios.get(`http://localhost:8080/api/females/${id}`)
            editFemaleState(response.data)

            editIsFetched(true)


        }catch (e) {

            console.log("ERROR - "+e)
        }


    }

    useEffect(()=>{


        fetchData()
    },[])


    const LoadComponent =()=>{

        if(isFetched){

            return (
                <div className="col-lg-12 text-center ">
                    <h1>Edit {femaleState.female.name}'s Info</h1>

                    <br/>
                    <br/>

                    <div className="row text-left">



                        <div className="col-lg-6 mx-auto">

                            <Message/>
                            <ShowErrorMessage/>


                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label >Name:</label>
                                    <input  disabled={true} defaultValue={femaleState.female.name} type="text"  name="name" className="form-control" placeholder="Enter name" ref={register({required:true, minLength:3})} />

                                    {errors.name && <p className="error"><strong>Please enter a value for name</strong></p>}

                                </div>
                                <div className="form-group">
                                    <label >Email:</label>
                                    <input defaultValue={femaleState.female.email} type="email" name="email" className="form-control" placeholder="Enter email" ref={register({required:true})} />

                                    {errors.email && <p className="error"><strong>Please enter a value for email</strong></p>}

                                </div>



                                <div className="form-group">
                                    <label >Phone:</label>
                                    <input defaultValue={femaleState.female.phone} type="text" name="phone" className="form-control" placeholder="Enter phone" ref={register({required:true})} />

                                    {errors.phone && <p className="error"><strong>Please enter a value for phone</strong></p>}

                                </div>
                                <div className="form-group">
                                    <label >hobbies:</label>
                                    <input defaultValue={femaleState.female.hobbies} type="text" name="hobbies" className="form-control" placeholder="Enter hobbies" ref={register({required:true})} />

                                    {errors.hobbies && <p className="error"><strong>Please enter your hobbies</strong></p>}

                                </div>
                                <div className="form-group">
                                    <label >employment_status:</label>
                                    <input defaultValue={femaleState.female.employment_status} type="text" name="employment_status" className="form-control" placeholder="Enter employment_status" ref={register({required:true})} />


                                    {errors.employment_status && <p className="error"><strong>Please employment status</strong></p>}

                                </div>
                                <div className="form-group">
                                    <label >marital_status:</label>
                                    <input defaultValue={femaleState.female.marital_status} type="text" name="marital_status" className="form-control" placeholder="Enter marital_status" ref={register({required:true})} />

                                    {errors.marital_status && <p className="error"><strong>Please enter your marital _status</strong></p>}

                                </div>
                                <div className="form-group">
                                    <label >age:</label>
                                    <input defaultValue={femaleState.female.age} type="text" name="age" className="form-control" placeholder="Enter your age" ref={register({required:true})} />

                                    {errors.age && <p className="error"><strong>Please enter a value </strong></p>}

                                </div>


                                <button type="submit" className="btn btn-primary">Update</button>
                            </form>
                        </div>

                    </div>


                </div>

            )
        }else  return (

            <div>

                <img src="https://media.giphy.com/media/11FuEnXyGsXFba/giphy.gif" height="200"/>

                <h3>Loading data, please wait</h3>


            </div>
        )
    }



    const Message=()=>{
        if(showMessage){
            return(
                <div className="alert alert-success">
                    <strong>Success!</strong> User Updated!
                </div>
            )
        }

        return "";

    }

    const ShowErrorMessage=()=>{
        if(errorMessage){
            return(
                <div className="alert alert-danger">
                    <strong>Error!</strong> Please try again later.
                </div>
            )
        }

        return "";

    }
    const onSubmit=  async (formData,event)=>{
        editShowMessage(false)
        editErrorMessage(false)

        try{

            await axios.patch(`http://localhost:8000/api/females/${id}`,formData)
            editShowMessage(true)
            fetchData()


        }catch (e) {
            editErrorMessage(true)

        }


        event.target.reset()



    }


    return (
        <div className="row">
            <LoadComponent/>
        </div>
    )
}

export default Update