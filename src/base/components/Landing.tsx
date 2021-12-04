import { BrowserRouter as Router } from "react-router-dom"
import { Header } from "./Header"

export const Landing = () => {
    return (
        <div className="landing">
            <Router>
                <div className="landingHeader">
                    <Header />
                </div>
            </Router>
        </div>
    )
}

