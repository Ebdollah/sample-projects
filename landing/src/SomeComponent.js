import React, { useContext } from 'react';
import { MyContext } from './MyContextProvider';

const SomeComponent = () => {
    const { value, setValue } = useContext(MyContext);

    return (
        <div>
            <p>The value is: {value}</p>
            <button onClick={() => setValue("Updated Value")}>Update Value</button>
        </div>
    );
};

export default SomeComponent;
