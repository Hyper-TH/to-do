import { useState } from 'react';

export const useCounter = (initialVal = 0 ) => {
    const [count, setCount] = useState(initialVal);

    const addCount = () => {
        setCount((count) => count + 1);
    };

    const reduceCount = () => {
        setCount((count) => count - 1);

    };

    const resetCount = () => {
        setCount(0);
    };

    return { count, addCount, reduceCount, resetCount };
};