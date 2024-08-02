
const Testimonial = () => {
    return (
        <div className="lg:py-24 py-12 px-8 w-full" id="testimonial">
            <section className="container mx-auto max-sm:mt-12">
                <div className="mx-auto text-center">
                    <h2 className="text-5xl font-polaquin font-bold">
                        What Our <span className="text-[#FF6452]">Customer</span> Say?
                    </h2>
                    <p className="text-[#6D6D6D] mt-5 leading-7 text-center sm:w-5/12 mx-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab ducimus veritatis ad saepe rerum laudantium officiis! </p>
                </div>
                <div>
                    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                        <figure className="max-w-screen-md mx-auto">
                            <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                            </svg>
                            <blockquote>
                                <p className="text-2xl font-medium text-gray-900 dark:text-white">&quot;Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.&quot;</p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                <img className="w-10 h-10 rounded-full" src="/images/ceo.jpg" alt="profile picture" />
                                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                    <div className="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                                    <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at XYZ</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial