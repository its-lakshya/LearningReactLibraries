import { useSelector, useDispatch } from "react-redux"
import {ordered, restocked} from "./iceCremeSlice"
import { useState } from "react"

const IceCreamView = () => {
  const numberOfIceCream = useSelector((state) => state.iceCream.numberOfIceCream)
  const dispatch = useDispatch()
  const [iceCreamValue , setIceCreamValue] = useState(1)
  return (
    <div>
        <h2>Number of IceCream {numberOfIceCream}</h2>
        <input type = 'number' value={iceCreamValue} onChange={(e) => setIceCreamValue(parseInt(e.target.value))}/>
        <button onClick={()=> {dispatch(ordered(iceCreamValue))}}>Order IceCream</button>
        <button onClick={()=> {dispatch(restocked(3))}}>Restock IceCream</button>
    </div>
  )
}

export default IceCreamView