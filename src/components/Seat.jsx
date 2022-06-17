import { useState } from "react"
import React from "react"

const Seat = (props) => {
    const [isTaken, setIsTaken] = useState(false)
    const [type, setType] = useState('для вип казахов')
    const BuySeat = ()=>{
        setIsTaken(true)
    }
    return(
        <div className="singleSeat">
            <button 
            onClick={BuySeat}
            >
            </button>
        </div>
    )
}
export default Seat