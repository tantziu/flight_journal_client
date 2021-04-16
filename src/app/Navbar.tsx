import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav>
            <section>
                <h1>Flights Journal</h1>

                <div className="navContent">
                    <div className="navLinks">
                        <Link to='/'>Flights</Link>
                        <Link to='/'>Cities</Link>
                        {/* <Link to='/'>Statistics</Link> */}
                        <Link to='/'>About</Link>
                    </div>
                </div>
            </section>
        </nav>
    )
}