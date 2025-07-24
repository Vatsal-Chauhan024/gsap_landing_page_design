import { English, Images } from "@/helpers"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { Link } from "react-router-dom"

const Hero = () => {

  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: 'chars, words' })
    const paragraphSplit = new SplitText(".subtitle", { type: 'lines' })

    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06
    })

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 1
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    }).to('.right-leaf', {y: 200}, 0)
    .to('left-leaf', {y: -200}, 0)

  }, [])

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title uppercase">{English.E1}</h1>

        <img src={Images.LeftLeaf} alt="left-leaf-icon" className="leaf-leaf" />
        <img src={Images.RightLeaf} alt="left-right-icon" className="right-leaf" />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>{English.E2}</p>
              <p className="subtitle">
                {English.E3} <br /> {English.E4}
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">{English.E5}</p>
              <Link to="#cocktails">{English.E6}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero