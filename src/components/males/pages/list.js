import React,{useState, useEffect} from 'react'
import axios from 'axios'

import MaleCard from '../components/male_card'



const List=()=>{

    const [malesList, editMales] = useState([])

    const[isFetched, editIsFetched ] = useState(false);


    useEffect( () => {
        const fetchMales= async ()=>{

            try{
                const response = await axios.get('http://localhost:8000/api/males')

                console.log("response is "+ response)
                editMales(response.data)




                editIsFetched(true)

            }catch (e) {
                console.log(e)
            }

        }

        fetchMales()

    },[]);

    const LoadComponent =()=>{

        if(isFetched){

            return (
                <MaleCard males={malesList.males}/>

            )
        }else  return (

            <div>

                <img src=""/>

                <h3>Loading data, please wait</h3>


            </div>
        )
    }






    return (
        <div className="row">
            <div className="col-lg-12 text-center">
                <h1> Registered men</h1>

                <br/><br/>

                <LoadComponent/>

            </div>
        </div>
    )
}

export default List