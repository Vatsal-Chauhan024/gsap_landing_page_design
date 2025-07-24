import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import { Hero, Navbar } from "@components"
import { BrowserRouter, Route, Routes } from "react-router-dom"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <main>
                        <Navbar />
                        <Hero />
                        <div className="dvh bg-black" />
                    </main>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default App