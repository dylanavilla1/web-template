import { Link } from "react-scroll"

const Hero = ({scroll}) => {
    return (    
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 min-h-screen flex flex-col items-center justify-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Make your website beautiful</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at Web Template we build beautiful websites for your business. For more details click The button below</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link activeClass="active" to="test" spy={true} smooth={true} offset={-25} duration={800}  className="cursor-pointer inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-rose-500 hover:bg-rose-700 " onClick={() => scroll()}>
                More Details
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
        </div>
    </div>
    )
}

export default Hero