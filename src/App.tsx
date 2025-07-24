import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import { Navbar } from "@components"
import { BrowserRouter, Route, Routes } from "react-router-dom"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <main>
                        <Navbar />
                    </main>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default App