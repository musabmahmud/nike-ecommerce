import React from 'react'

const Footer = () => {
    return (
        <footer className="lg:py-24 py-8 px-8 w-full bg-[#131313]" id="footer">
            <div className="container mx-auto max-sm:mt-12">
                <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
                    <div className="flex flex-col items-start">
                        <a href="">
                            <img src="./images/logo.png" alt="Icon" width="150" height="46" />
                        </a>
                        <p className='mt-6 text-base leading-7 text-[#fffc] sm:max-w-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum temporibus natus minima libero laborum molestias non fugiat quaerat est tempore.
                        </p>
                        <div className='flex items-center gap-5 mt-8'>
                            <div className='flex items-center gap-5 mt-8'>
                                <a href='' className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                                    <img src="./social/facebook.svg" alt="" />
                                </a>
                                <a href='' className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                                    <img src="./social/twitter.svg" alt="" />
                                </a>

                                <a href='' className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                                    <img src="./social/instagram.svg" alt="" />
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
                        <div>
                            <h4 className="text-white text-2xl leading-normal font-medium mb-6">Products</h4>
                            <ul className='p-0'>
                                <li className='mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer'>
                                    Air Max Shoes.
                                </li>
                                <li className='mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer'>
                                    Air Max Shoes.
                                </li>
                                <li className='mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer'>
                                    Air Max Shoes.
                                </li>
                                <li className='mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer'>
                                    Air Max Shoes.
                                </li>
                                <li className='mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer'>
                                    Air Max Shoes.
                                </li>
                                <li className='mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer'>
                                    Air Max Shoes.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
                        <div>
                            <h4 className="text-white text-2xl leading-normal font-medium mb-6">Help</h4>
                            <ul className='p-0'>
                                <li className='mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer'>
                                    About us
                                </li>
                                <li className='mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer'>
                                    FAQs
                                </li>
                                <li className='mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer'>
                                    How it works
                                </li>
                                <li className='mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer'>
                                    Privacy policy
                                </li>
                                <li className='mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer'>
                                    Payment policy
                                </li>
                                <li className='mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer'>
                                    Air Max Shoes.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
                        <div>
                            <h4 className="text-white text-2xl leading-normal font-medium mb-6">Get in Touch</h4>
                            <ul className='p-0'>
                                <li className='mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer'>
                                    <a href="mailto:">customer@nike.com</a>
                                </li>
                                <li className='mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer'>
                                    <a href="callto:+8801309633888">+8801309633888</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between text-[#fffc] mt-24 max-sm:flex-col max-sm:items-center">
                    <div className='flex flex-1 justify-start items-center gap-2'>
                        <p>&copy; Copyright. All Rights Reserved.</p>
                    </div>
                    <a href=''>Terms & conditions</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer