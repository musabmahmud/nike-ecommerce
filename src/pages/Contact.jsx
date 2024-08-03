
const Contact = () => {
    return (
        <div className="lg:pb-24 pb-8 px-8 w-full" id="testimonial">
            <section className="container mx-auto max-sm:mt-12">
                <div className="flex flex-col justify-start gap-5">
                    <h2 className="text-5xl font-polaquin font-bold">Contact <span className="text-[#FF6452]">Us</span>
                    </h2>
                    <p className="lg:max-w-lg text-[#6D6D6D] leading-7">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                </div>
                <div className="mt-8 sm:w-1/2 mx-auto bg-black p-8 text-white rounded-xl">
                <form action="#" className="space-y-8">
                    <div>
                        <label className="block mb-2 text-sm font-medium">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Email....." required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm font-medium">Your message</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button className="flex justify-center items-center gap-2 px-7 py-4 border-non text-lg leading-none rounded-full bg-[#FF6452] text-white hoverBtn">Send Message</button>
                </form>
                </div>
            </section>
        </div>
    )
}

export default Contact