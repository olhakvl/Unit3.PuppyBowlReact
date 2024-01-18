import { Link } from 'react-router-dom'

function NavBar() {
    return(
        <div>This is NavBar Component
            <Link to="/players/:id">Link To A Single Player</Link>
        </div>
    )
}

export default NavBar;