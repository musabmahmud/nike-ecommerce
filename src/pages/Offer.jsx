import { HiArrowCircleRight } from "react-icons/hi"

const Offer = () => {
    return (
        <div className='lg:py-24 py-12 px-8 w-full' id='about-us'>
            <section className='container mx-auto max-sm:mt-12 flex justify-between items-center max-lg:flex-col gap-10 w-full'>
                <div className="flex justify-between items-center max-xl:flex-col-reverse gap-10">
                    <div className="sm:w-1/2 grid grid-rows-2 grid-flow-row gap-4 rounded-xl">
                        <div className="">
                            <img src="./images/offer1.jpg" alt="" className="object-contain rounded-xl" />
                        </div>
                        <div className="">
                            <img src="./images/offer2.jpg" alt="" className="object-contain rounded-xl" />
                        </div>
                        <div className="col-span-2">
                            <img src="./images/offer4.jpg" alt="" className="object-contain rounded-xl" />
                        </div>
                    </div>
                    <div>
                        <h1 className="font-palaquin text-5xl capitalize font-bold lg:max-w-lg">
                            <span className="text-[#FF6452]">Special</span> Offer
                        </h1>
                        <p className="mt-4 lg:max-w-lg text-[#6D6D6D] text-lg leading-7 text-justify">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique officia quaerat culpa debitis rerum quae, minus non earum architecto nemo, excepturi reprehenderit nam consectetur eaque deserunt neque velit nisi laudantium magni veniam esse.
                        </p>
                        <p className="mt-4 lg:max-w-lg text-[#6D6D6D] text-lg leading-7 text-justify">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, rem quia sunt corrupti sed pariatur blanditiis perferendis cupiditate quidem, nulla aliquid possimus. Possimus dolorem aperiam consequuntur? Nobis beatae incidunt aliquid.
                        </p>
                        <div className="mt-11 flex flex-wrap gap-4">
                            <button className="flex justify-center items-center gap-2 px-7 py-4 border-non text-lg leading-none rounded-full bg-[#FF6452] text-white hoverBtn">Shop now <HiArrowCircleRight className="ml-2 rounded-full text-2xl" />
                            </button>
                            <button className="flex justify-center items-center gap-2 px-7 py-4 border border-solid text-lg leading-non rounded-full bg-white text-[#6D6D6D] border-[#6D6D6D]">Learn more</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Offer