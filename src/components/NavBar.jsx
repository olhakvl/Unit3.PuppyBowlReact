import { Link } from 'react-router-dom'

function NavBar() {
    return(
        <div id="navBar">
            <Link to="/">All Players</Link>
            {/* <Link to="/players/:id">Player Details</Link> */}
            <input type="text" id="searchInput" placeholder="Search"/>
            <button>Search</button>
        </div>
    )
}

export default NavBar;