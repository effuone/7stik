import React from "react";
import { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
const DataPostForm = ({create}) => {
  const [point, setPoint] = useState
  (
    {
        year: 0,
        userGain: 0,
        userLost: 0
    }
  )

  const addNewPoint = (e) => {
    e.preventDefault()
    const newPoint = {
        id:Date.now(), ...point, 
    }
    create(newPoint)
    setPoint({
        year: 0,
        userGain: 0,
        userLost: 0
    })
  }

    return (
        <div>
            <form>
                {/* {"Управляемый копмонент"} */}
                <MyInput
                value={point.year}
                onChange={e=>setPoint({...point, year: e.target.value})}
                type="number" 
                placeholder="Год"
                />
                <MyInput
                value={point.userGain}
                onChange={e=>setPoint({...point, userGain: e.target.value})}
                type="number" 
                placeholder="Приток"
                />
                <MyInput
                value={point.userLost}
                onChange={e=>setPoint({...point, userLost: e.target.value})}
                type="number" 
                placeholder="Отток"
                />
                <MyButton 
                onClick={addNewPoint}
                >
                Добавить точку
                </MyButton>
            </form>
        </div>
    )
}
export default DataPostForm;