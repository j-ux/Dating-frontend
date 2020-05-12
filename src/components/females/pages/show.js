import React,{useState,useEffect} from 'react'
import {Link, useParams, Redirect, useHistory} from 'react-router-dom'
import axios from 'axios'



const Show=(props)=>{

    let {id} = useParams()
    let history = useHistory()

    const [femaleState, editFemale] = useState()
    const[isFetched, editIsFetched ] = useState(false);



    useEffect(()=>{

        const fetchData=async ()=>{


            try{
                const response = await axios.get(`http://localhost:8000/api/females/${id}`)
                editFemale(response.data)
                console.log(response.data)
                editIsFetched(true)


            }catch (e) {

                console.log("ERROR - "+e)
            }


        }

        fetchData()

    },[])



    const deleteFemale=async (female_id)=>{

        try{
            const response = await axios.delete(`http://localhost:8000/api/females/${female_id}`)

            console.log(response.data)

            history.push("/females")


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
                            <img className="female-img"  src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg" />
                            <h3>{femaleState.female.name}</h3>
                            <p className="female"><strong>{femaleState.female.email}</strong></p>
                            <p>{femaleState.female.phone}</p>
                            <p>Total Females : {femaleState.female.length}</p>


                            <p>

                                <button className="btn btn-danger" onClick={() => deleteFemale(id)}>Delete</button>


                            </p>

                            <p>
                                <Link to={`/female/update/${id}`}>
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