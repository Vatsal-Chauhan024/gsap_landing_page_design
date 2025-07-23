import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
    return (
        <div className="text-3xl flex-center h-screen">
            Hello World!!!
        </div>
    )
}

export default App