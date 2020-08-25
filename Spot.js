import React from "react"

function Spot(props) {
    const styles = {
        backgroundColor: props.spotColor,
        height: 0,
        width: 0
    }

    return (
        <div styles={styles}></div>
    )
}

export default Spot