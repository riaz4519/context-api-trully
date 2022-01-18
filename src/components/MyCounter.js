import {useContext} from 'react';
import { CounterContext } from '../contexts/CounterContext';

const MyCounter = () => {



    const {count,increaseCount,decreaseCount} = useContext(CounterContext);


    return ( 
        <div>
            <h3>Counter component</h3>
            <p>count is : {count}</p>
            <button onClick={ increaseCount }>Increase Count</button>
            <button onClick={ decreaseCount }>Decrease Count</button>
        </div>
     );
}
 
export default MyCounter;