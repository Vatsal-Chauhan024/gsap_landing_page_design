import { Constants, Images } from "@/helpers"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Link } from "react-router-dom"

const Navbar = () => {

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        })
        navTween.fromTo('nav', {
            backgroundColor: 'transparent'
        }, {
            backgroundColor: '#00000050',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
        })
    }, [])

    return (
        <nav>
            <div>
                <Link to="#" className="flex items-center gap-2">
                    <img src={Images.Logo} />
                    <p>Velvet Pour</p>
                </Link>

                <ul>
                    {Constants.navLinks.map((link) => {
                        return (
                            <li key={link.id}>
                                <Link to={link.id}>{link.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar