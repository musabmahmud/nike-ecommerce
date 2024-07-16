import React from 'react'
import { FaCartArrowDown, FaLuggageCart, FaOpencart, FaShippingFast, FaShoppingCart, FaUserLock } from 'react-icons/fa'

const About = () => {
    return (
        <div className='lg:py-24 py-12 px-8 w-full mx-auto' id='about-us'>
            <section className='container mx-auto max-sm:mt-12 flex justify-between items-center max-lg:flex-col gap-10 w-full'>
                <div className='flex flex-1 flex-col'>
                    <h1 className='text-5xl leading-[58px] capitalize font-bold lg:max-w-lg'>
                        We Provide You
                        <span className='text-[#FF6452]'> Super</span> <span className='text-[#FF6452]'>Quality</span> Shoes
                    </h1>
                    <p className='mt-6 lg:max-w-lg text-lg text-[#6D6D6D] leading-7 text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum et iusto eveniet placeat fugit similique animi.
                        <br />
                        Our dedication to detail and excellence ensures your satisfactory.</p>
                    <div className='mt-11'>
                        <button className='flex justify-center items-center gap-2 px-7 py-4 border-none text-lg leading-none rounded-full bg-[#FF6452] text-white hoverBtn'>View Details</button>
                    </div>
                </div>
                <div className='flex-1 flex justify-center items-center'>
                    <img className='object-contain max-w-full h-auto rounded-xl transform transition duration-1000 hover:scale-110 cursor-pointer' src="/images/card.jpg" width="570" height="522" alt="Shoe" />
                </div>
            </section>
            <div className='lg:px-16 px-8 lg:py-24 py-10'>
                <div className='flex justify-center flex-wrap gap-9'>
                    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 hoverBtn">
                        <div className="w-11 h-11 justify-center items-center bg-[#ff6452] rounded-full">
                            <FaShippingFast size={40} />
                        </div>
                        <h1 className='mt-5 font-bold text-3xl leading-normal capitalize'>
                            free shipping
                        </h1>
                        <p className='mt-3 break-words text-lg leading-normal text-gray-300'>
                            Enjoy Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iure!
                        </p>
                    </div>

                    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 hoverBtn">
                        <div className="w-11 h-11 justify-center items-center bg-[#ff6452] rounded-full">
                            <FaUserLock size={40} />
                        </div>
                        <h1 className='mt-5 font-bold text-3xl leading-normal capitalize'>
                            Secured Conntection
                        </h1>
                        <p className='mt-3 break-words text-lg leading-normal text-gray-300'>
                            Enjoy Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iure!
                        </p>
                    </div>

                    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 hoverBtn">
                        <div className="w-11 h-11 justify-center items-center bg-[#b4200f] rounded-full">
                            <FaOpencart size={40} />
                        </div>
                        <h1 className='mt-5 font-bold text-3xl leading-normal capitalize'>
                            Love to Help
                        </h1>
                        <p className='mt-3 break-words text-lg leading-normal text-gray-300'>
                            Enjoy Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iure!
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About