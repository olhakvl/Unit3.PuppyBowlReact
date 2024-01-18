import { Link } from 'react-router-dom'

function SearchBar() {
    return(
        <div id="searchBar">This is SearchBar Component
            <Link to="/players/:id">Link To A Single Player</Link>
        </div>
    )
}

export default SearchBar;