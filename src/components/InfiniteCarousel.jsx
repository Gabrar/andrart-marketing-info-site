import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';

function InfitieCarousel() {
    const logos = [
        { src: img1, alt: "Logo 1" },
        { src: img2, alt: "Logo 2" },
        { src: img3, alt: "Logo 3" },
        { src: img4, alt: "Logo 4" },
        { src: img5, alt: "Logo 5" },
        { src: img6, alt: "Logo 6" },
        { src: img7, alt: "Logo 7" }
    ]

    return (
        <div className="w-full inline-flex justify-start flex-nowrap overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
                {logos.map((logo, index) => (
                    <li key={index}>
                        <img src={logo.src} alt={logo.alt} className="h-16 lg:h-24 w-auto" />
                    </li>
                ))}
            </ul>

            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                {logos.map((logo, index) => (
                    <li key={index}>
                        <img src={logo.src} alt={logo.alt} className="h-16 lg:h-24 w-auto" />
                    </li>
                ))}
            </ul>


        </div>
    )
}

export default InfitieCarousel