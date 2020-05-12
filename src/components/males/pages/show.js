import React,{useState,useEffect} from 'react'
import {Link, useParams, Redirect, useHistory} from 'react-router-dom'
import axios from 'axios'



const Show=(props)=>{

    let {id} = useParams()
    let history = useHistory()

    const [maleState, editMale] = useState()
    const[isFetched, editIsFetched ] = useState(false);



    useEffect(()=>{

        const fetchData=async ()=>{


            try{
                const response = await axios.get(`http://localhost:8000/api/males/${id}`)
                editMale(response.data)
                console.log(response.data)
                editIsFetched(true)


            }catch (e) {

                console.log("ERROR - "+e)
            }


        }

        fetchData()

    },[])



    const deleteMale=async (male_id)=>{

        try{
            const response = await axios.delete(`http://localhost:8000/api/males/${male_id}`)

            console.log(response.data)

            history.push("/males")


        }catch (e) {
            console.log("ERROR- " +e)
        }

    }


    const LoadComponent =()=>{

        if(isFetched){

            return (
                <>
                    <div className="col-lg-4" >

                        <div className="card">
                            <img className="male-img"  src="" />
                            <h3>{maleState.male.name}</h3>
                            <p className="male"><strong>{maleState.male.email}</strong></p>
                            <p>{maleState.male.phone}</p>
                            <p>Total Males : {maleState.male.length}</p>


                            <p>

                                <button className="btn btn-danger" onClick={() => deleteMale(id)}>Delete</button>


                            </p>

                            <p>
                                <Link to={`/male/update/${id}`}>
                                    <button>Edit</button>
                                </Link>
                            </p>

                        </div>
                    </div>



                </>

            )
        }else  return (

            <div>

                <img src="https://media.giphy.com/media/11FuEnXyGsXFba/giphy.gif" height="200"/>

                <h3>Loading data, please wait</h3>


            </div>
        )
    }



    return (
        <div className="row">
            <div className="col-lg-12 ">

                <div className="row">
                    <LoadComponent/>
                </div>

            </div>
        </div>
    )
}

export default Show