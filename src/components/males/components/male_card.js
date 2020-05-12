import React from 'react'
import {Link} from 'react-router-dom'

const MaleCard = props =>{

    console.log("check")
    console.log(props.males)

    if(props.males.length === 0){
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

            {props.males.map(male =>{
                return (
                    <div className="col-lg-3" key={male._id}>

                        <div className="card">
                            <img className="male-img" alt={male.name} src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg" />
                            <h3>{male.name}</h3>
                            <p className="male"><strong>{male.email}</strong></p>
                            <p>{male.phone}</p>
                            <p>{male.hobbies}</p>
                            <p>{male.employment_status}</p>
                            <p>{male.marital_status}</p>
                            <p>{male.age}</p>
                            <p>

                                <Link to={`/male/${male._id}/show`}>
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



export default MaleCard