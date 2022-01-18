import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";


const ComponentB = () => {

    const {increaseCount} = useContext(CounterContext)

    return ( 
        <div style={ { backgroundColor:"red" } }>

            <button onClick={increaseCount}>IncreaseCount</button>

        </div>
     );
}
 
export default ComponentB;