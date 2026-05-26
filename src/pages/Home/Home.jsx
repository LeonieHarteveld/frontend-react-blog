import './Home.css'
import logo from "../../assets/logo-white.png"

function Home() {
    return (
        <div className="home-container">
            <h1>Bij Blogventure geloven we in de kracht van woorden*</h1>
            <img src={logo} alt="Afbeelding van een billboarde"/>
            <p>* En in billboards. Die zijn niet te missen namelijk.</p>
        </div>
    )
}

export default Home
