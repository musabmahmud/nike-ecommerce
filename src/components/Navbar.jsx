import { useState } from 'react';

import { MdClose } from "react-icons/md";

import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
    //33 min done
    const [dropDown, setDropDown] = useState(false);

    // const [showDown, setDropDown] = useState(false);

    const showDropDown = () => {
        setDropDown(!dropDown);
    }

    return (
        <nav className='w-full h-24 flex flex-col justify-center items-center lg:bg-transparent lg:absolute fixed z-20'>
            <div className='container mx-auto lg:px-6'>
                <div className='lg:w-full w-11/12 mx-auto h-full flex justify-between xl:items-baseline items-center text-[#12222E]'>
                    <div className='flex flex-col gap-y-4'>
                        <span onClick={() => window.location = '/'} className='flex items-center gap-x-2 font-bold text-2xl cursor-pointer'>
                            <img src="images/logo.png" alt="Nike Logo" className='w-full' />
                        </span>
                    </div>
                    <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                        <a className='font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline' href="#home">Home</a>
                        <a className='font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline' href="#about-us">About Us</a>
                        <a className='font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline' href="#products">Products</a>
                        <a className='font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline' href="#contact-us">Contact Us</a>
                    </ul>
                    {
                        dropDown ? (
                            <div className='lg:hidden text-[22px] cursor-pointer text-black' onClick={showDropDown} >
                                <MdClose />
                            </div>
                        )
                            : (
                                <div className='lg:hidden text-[22px] cursor-pointer text-black'>
                                    <HiMenuAlt3 onClick={showDropDown} />
                                </div>
                            )
                    }
                </div>

                {dropDown ? (
                    <div className='lg:hidden w-full h-[100vh] fixed top-24 bg-white transition ease-in-out duration-100' onClick={showDropDown}>
                        <div className='w-full h-[320px] flex flex-col items-baseline pt-8 gap-4 text-[#12222E]'>
                            <ul className='text-center p-0 flex flex-col justify-center w-full gap-y-8'>
                                <a className='font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline' href="#home">Home</a>
                                <a className='font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline' href="#about-us">About Us</a>
                                <a className='font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline' href="#products">Products</a>
                                <a className='font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline' href="#contact-us">Contact Us</a>
                            </ul>
                        </div>
                    </div>
                ) : null

                }
            </div>
        </nav>
    )
}

export default Navbar