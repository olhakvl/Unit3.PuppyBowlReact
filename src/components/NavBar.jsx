import { Link } from 'react-router-dom'
import SearchBar from './SearchBar';

function NavBar() {
    return(
        <div id="navBar">
            <Link to="/">All Players</Link>
            {/* <Link to="/players/:id">Player Details</Link> */}
            <SearchBar />
        </div>
    )
}

export default NavBar;