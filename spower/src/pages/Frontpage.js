import React, { useEffect, useState, useRef } from 'react';
import { FaCheck, FaTimes, FaQrcode } from 'react-icons/fa';
import qr from '../assets/qr.png';
import bag from '../assets/bag.png';
function Frontpage() {
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
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1175); // Adjust the breakpoint as needed
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className='p-3 gap-4 overflow-hidden lg:flex '>
            <div className="flex flex-col justify-start pl-7 pt-10 mb-5 w-full rounded-lg shadow-lg border lg:w-full lg:mb-0 md:w-full">
                <div className=" ">
                    <h6 className="pt-1 font-semibold mb-4">#Itstheeasywaytolearn</h6>
                    <h1 className="text-4xl md:text-5xl font-bold mb-8">
                        Get ladybugs with Katty.<br /> Get them now.
                    </h1>
                    <ul className="list-disc ml-6 md:text-2xl text-gray-700 text-left mb-8">
                        <li className="text-base mb-2">Benefit 01</li>
                        <li className="text-base mb-2">Benefit 02</li>
                        <li className="text-base mb-2">Benefit 03</li>
                    </ul>
                    <div className="flex justify-between">
                        <div className="flex-col">
                            <button className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-900">
                                Active Super power!
                            </button>
                            <div className="flex pt-3 text-xl font-semibold">
                                <p className="pr-3">Restart Step 1</p>
                                <div className="border-r-2 border-black mr-3"></div>
                                <p>Get Started Now</p>
                            </div>
                        </div>
                        <img src={bag} alt="hero" className="w-24 h-24" />
                    </div>
                </div>
            </div>
            <div className="bg-gray-400 rounded-lg shadow-lg p-3 mx-auto">
                <div className='flex justify-between items-center'>
                    <div>
                        <h3 className="text-3xl font-medium mb-2">It's a no Brainer</h3>
                        <p className="text-black font-medium mb-4">
                            Get Started Now</p>
                    </div>
                    <img src={qr} alt="hero" className=" w-12 h-12 " />
                </div>
                <div className="flex justify-between bg-gray-100 shadow-lg p-1  lg:w-[40vw]">
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
                    <div className="flex-col w-40 rounded-lg shadow-2xl border mb-3 mt-4 lg:w-28 custom-xl:w-52">
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
    {isLargeScreen ? (
        <h1 className="font-medium mb-12 text-center">Without Super Power</h1>
    ) : (
        <>
            <h1 className="font-medium text-center">Without</h1>
            <h1 className="font-medium mb-6 text-center">Super Power</h1>
        </>
    )}

    <ul className="list-none ml-6">
        {features.map((feature, index) => (
            <li className={`mb-1 ${index !== features.length && 'pb-2'}`} key={index}>
                <div className="flex items-center justify-center">
                    {feature.withoutSuperPower ? (
                        <FaCheck className="bg-green-500 text-white rounded-full p-1" size={20} />
                    ) : (
                        <FaTimes className="bg-red-500 text-white rounded-full p-1" size={20} />
                    )}
                </div>
                {/* Use flexbox to center the line */}
                <div className="flex justify-center w-full">
                    <div className="w-full h-px bg-gray-400 mt-2"></div>
                </div>
            </li>
        ))}
    </ul>
</div>

                </div>


            </div>
        </div>
    )
}
export default Frontpage