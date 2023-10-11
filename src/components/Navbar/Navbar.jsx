import { useRef } from 'react';
import {animateScroll as scroll} from 'react-scroll';
const Navbar = () => {
    const ref = useRef(null)
    const options = {
        duration: 800,
        smooth: true,
    }

   const hashCode = (s) => {
        return s.split("").reduce(function(a, b) {
          a = ((a << 5) - a) + b.charCodeAt(0);
          return a & a;
        }, 0);
      }
    const scrollToTop = () => {
        scroll.scrollToTop(options)
    }
    return (
            <nav ref={ref} onClick={() => scrollToTop()} className="bg-zinc-800 fixed top-0 left-0 right-0 w-full h-[75px] text-white flex items-center justify-between px-4 z-[9999] max-sm">
                <h1 className="md:text-2xl md:ml-0  sm:text-xl m-auto font-extralight">W e b T e m p l a t e</h1>
                <ul className="md:flex gap-6 px-4 items-center hidden">
                    <li>
                        <a className="hover:text-zinc-300 cursor-pointer" onClick={() => scrollToTop()}>Home</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-zinc-300">Landing Page</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-zinc-300">Company Profile</a>
                    </li>
                    
                    <a href={`mailto:${hashCode("senseilevi851@gmail.com")}`} className="bg-rose-500 px-4 py-2 rounded-md hover:bg-rose-600">Contact Us</a>
                </ul>
            </nav>
    )
}

export default Navbar   