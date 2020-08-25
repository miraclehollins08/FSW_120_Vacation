import React from "react"

function Cards(props) {
    return (
        <div>
            <h3 styles={{color: !props.place && "#32CD32"}}>Place: {props.place}</h3>
            <h3 styles={{color: !props.price && "#FFFFFF"}}>Price: {props.price}</h3>
            <h3 styles={{color: !props.timeToGo && "#32CD32"}}>timeToGo: {props.timeToGo}</h3>
            <hr/>
        </div>
    )
}

export default Cards