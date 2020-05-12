import React,{useState, useEffect} from 'react'
import axios from 'axios'

import FemaleCard from '../components/female_card'



const List=()=>{

    const [femalesList, editFemales] = useState([])

    const[isFetched, editIsFetched ] = useState(false);


    useEffect( () => {
        const fetchFemales= async ()=>{

            try{
                const response = await axios.get('http://localhost:8000/api/females')

                console.log("response is "+ response)
                editFemales(response.data)




                editIsFetched(true)

            }catch (e) {
                console.log(e)
            }

        }

        fetchFemales()

    },[]);

    const LoadComponent =()=>{

        if(isFetched){

            return (
                <FemaleCard females={femalesList.females}/>

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
                <h1> Registered Ladies</h1>

                <br/><br/>

<LoadComponent/>

</div>
</div>
)
}

export default List