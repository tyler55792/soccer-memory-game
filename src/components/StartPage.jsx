import { Link } from "react-router-dom";

const StartPage = () => {
    return (
        <div className="body">
            <div className="logoContainer">
                <img className="logo" src="/images/logo.png"/>
            </div>
            <div className="startContainer">
                <p>Memory Card Game: Remeber and avoid selecting the same card in consecutive rounds</p>
            </div>
            <Link className="startLink" to="app">Start Game</Link>
        </div>
    )
}

export default StartPage;
