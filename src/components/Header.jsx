import { useEffect, useState } from 'react'
import { HiArrowCircleRight } from 'react-icons/hi';

const Header = () => {

    const [imageUrl, setImageUrl] = useState('/1.png');

    useEffect(() => {
        setImageUrl(imageUrl)
    }, [imageUrl]);

    return (
        <div>
            <div className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-y-10 container mx-auto' id='home'>
                <section className='relative z-10 xl:w-2/5 flex flex-col justify-center items-start px-8 pt-28'>
                    <p className='text-xl text-[#ff6452]'>Our Summer Collection</p>
                    <h1 className='mt-10 font-palanquin text-black text-8xl max-sm:text-[72px] leading-[106px] max-sm:leading-[82px] font-bold'>
                        <span className='bg-white relative z-10 pr-10 lg:text-8xl font-palaquin xl:whitespace-nowrap'>The New Arrival</span> {" "}
                        <br />
                        <span className='text-[#ff6452] inline-block mt-3'>Nike</span> Shoes
                    </h1>
                    <p className='text-[#6D6D6D] text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <button className='flex justify-center items-center gap-2 px-7 py-4 border-none text-lg leading-none rounded-full bg-[#ff6452]'>Shop Now 
                        <HiArrowCircleRight className='ml-2 rounded-full text-2xl'/></button>
                    <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
                        <div>
                            <p className='text-5xl font- font-bold text-black'>1k+</p>
                            <p className='leading-7 font-monsterrat text-[#6D6D6D]'>Brands</p>
                        </div>

                        <div>
                            <p className='text-5xl font- font-bold text-black'>500+</p>
                            <p className='leading-7 font-monsterrat text-[#6D6D6D]'>Shops</p>
                        </div>
                        
                        <div>
                            <p className='text-5xl font- font-bold text-black'>250k+</p>
                            <p className='leading-7 font-monsterrat text-[#6D6D6D]'>Customers</p>
                        </div>
                    </div>
                </section>
                <section>
                    
                </section>
            </div>
        </div>
    )
}

export default Header