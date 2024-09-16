import React,{useState} from 'react';
import Leftpanel from "./Leftpanel";
import Rightpanel from "./Rightpanel";

function Frontpage() {
    const [secondChildHeight, setSecondChildHeight] = useState(0);

    return (
        <div className=" p-3 gap-4 overflow-hidden custom-lg:flex ">
            <Leftpanel secondChildHeight={secondChildHeight}/>
            <Rightpanel setSecondChildHeight={setSecondChildHeight}/>
        </div>
    );
}

export default Frontpage;
