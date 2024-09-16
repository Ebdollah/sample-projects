import React, { useEffect, useRef } from 'react';
import { FaCheck, FaTimes, FaQrcode } from 'react-icons/fa';
import qr from '../assets/qr.png';

function Rightpanel({ setSecondChildHeight }) {
    const secondChildRef = useRef(null);
    useEffect(() => {
        // Update the height in the parent component
        setSecondChildHeight(secondChildRef.current?.clientHeight);
    }, [setSecondChildHeight]);
    

    const features = [
        { name: 'Wow! the lowest pricing', withPower: true, withoutSuperPower: false },
        { name: 'Wow! the lowest pricing', withPower: true, withoutSuperPower: false },
        { name: 'Wow! the lowest pricing', withPower: true, withoutSuperPower: false },
        { name: 'Wow! the lowest pricing', withPower: true, withoutSuperPower: false },
        { name: 'Wow! the lowest pricing', withPower: true, withoutSuperPower: false },
        { name: 'We are so happy to help', withPower: true, withoutSuperPower: false },
        { name: 'We are so happy to help', withPower: true, withoutSuperPower: false },
        { name: 'We are so happy to help', withPower: true, withoutSuperPower: false },
        { name: 'We are so happy to help', withPower: true, withoutSuperPower: false },
        // Add more features as needed
    ];
    return (
        <div className="bg-gray-400 rounded-lg shadow-lg p-3 mx-auto">
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className="text-3xl font-medium mb-2">It's a no Brainer</h3>
                    <p className="text-black font-medium mb-4">
                        Get Started Now</p>
                </div>
                <img src={qr} alt="hero" className=" w-12 h-12 " />
            </div>
            <div className="flex justify-between bg-gray-100 shadow-lg p-1  lg:w-[40vw]" ref={secondChildRef}>
                <div className="flex-col w-[155px] mt-4">
                    <h1 className="font-medium mb-2 mt-10 ml-1">Restarting Steps</h1>
                    <ul className="list-none ml-1">
                        {features.map((feature, index) => (
                            <li className={`mb-1 text-sm ${index !== features.length && 'pb-2'}`} key={index}>
                                {feature.name}
                                {/* Added line after each list item */}
                                <div className="w-full h-px bg-gray-300 mt-2"></div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-col w-40 rounded-lg shadow-2xl border mb-3 mt-4 lg:w-28">
                    <h1 className="font-medium mb-12 ml-2 text-center">with Power</h1>
                    <ul className="list-none ml-0">
                        {features.map((feature, index) => (
                            <li className={`mb-1 ${index !== features.length && 'pb-2'}`} key={index}>
                                <div className="flex items-center justify-center">
                                    {/* Use text-center and flex justify-center */}
                                    {feature.withPower ? (
                                        <FaCheck className="bg-green-500 text-white rounded-full p-1" size={20} />
                                    ) : (
                                        <FaTimes className="bg-red-500 text-white rounded-full p-1" size={20} />
                                    )}
                                </div>
                                {/* Added line after each list item */}
                                <div className="w-full h-px bg-gray-300 mt-2"></div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-col rounded-lg shadow-lg border mr-2 px-3 bg-gray-200 mb-3 mt-4">
                    <h1 className="font-medium mb-12 text-center">without Super Power</h1>
                    <ul className="list-none ml-6">
                        {features.map((feature, index) => (
                            <li className={`mb-1 ${index !== features.length && 'pb-2'}`} key={index}>
                                <div className="flex items-center justify-center">
                                    {/* Use text-center and flex justify-center */}
                                    {feature.withoutSuperPower ? (
                                        <FaCheck className="bg-green-500 text-white rounded-full p-1" size={20} />
                                    ) : (
                                        <FaTimes className="bg-red-500 text-white rounded-full p-1" size={20} />
                                    )}
                                </div>
                                {/* Added line after each list item */}
                                <div className="w-full h-px bg-gray-300 mt-2"></div>
                            </li>
                        ))}
                    </ul>
                    {/* <p>Second child height: {secondChildRef.current?.clientHeight}px</p> */}
                </div>
            </div>


        </div>
    )
}

export default Rightpanel