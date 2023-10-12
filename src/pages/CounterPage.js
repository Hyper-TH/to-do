import { useCounter } from '../components/useCounter';

export const CounterPage = () => {
    const { count, 
        addCount,
        reduceCount,
        resetCount
    } = useCounter();

    return (
        <div>
            <h1> {count} </h1>
            <button onClick={addCount}> Add </button>
            <button onClick={reduceCount}> Reduce </button>
            <button onClick={resetCount}> Reset to 0 </button>
        </div>
    );
};