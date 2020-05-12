import React from 'react'
import {Link} from 'react-router-dom'

const FemaleCard = props =>{

    console.log("check")
    console.log(props.males)

    if(props.females.length === 0){
        return (
            <div className="row">
                <div className="col-lg-12">
                    <img alt="" src="https://cdn.dribbble.com/users/1449854/screenshots/4136663/no_data_found.png" />
                </div>
            </div>
        )
    }

    return (
        <div className="row">

            {props.females.map(female =>{
                return (
                    <div className="col-lg-3" key={female._id}>

                        <div className="card">
                            <img className="female-img" alt={female.name} src="" />
                            <h3>{female.name}</h3>
                            <p className="female"><strong>{female.email}</strong></p>
                            <p>{female.phone}</p>
                            <p>{female.hobbies}</p>
                            <p>{female.employment_status}</p>
                            <p>{female.marital_status}</p>
                            <p>{female.age}</p>
                            <p>

                                <Link to={`/female/${female._id}/show`}>
                                    <button>Search</button>
                                </Link>


                            </p>
                        </div>
                    </div>
                )
            })}





        </div>
    )
}



export default FemaleCard