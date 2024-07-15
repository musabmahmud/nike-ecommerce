import Card from "../components/Card"

const Products = () => {
    return (
        <div className="lg:py-24 py-12 px-8 w-full container mx-auto" id="products">
            <main className="container mx-auto max-sm:mt-12">
                <div className="flex flex-col justify-start gap-5">
                    <h2 className="text-5xl font-polaquin font-bold">
                        <span className="text-[#FF6452]">Popular</span> Products
                    </h2>
                    <p className="lg:max-w-lg text-[#6D6D6D] leading-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab ducimus veritatis ad saepe rerum laudantium officiis! </p>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 mt-16">
                    <Card img="/images/shoe-1.jpg" price='200' rating='4.5' title='Nike Air Jordan' />
                    <Card img="/images/shoe-2.jpg" price='150' rating='4.7' title='Nike Air Jordan' />
                    <Card img="/images/shoe-3.jpg" price='100' rating='4.3' title='Nike Air Jordan' />
                    <Card img="/images/shoe-4.jpg" price='400' rating='4.9' title='Nike Air Jordan' />
                </div>
            </main>
        </div>
    )
}

export default Products