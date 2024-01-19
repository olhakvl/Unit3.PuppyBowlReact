import { useGetPlayersQuery, useDeletePlayerMutation, useGetPlayerDetailsQuery } from "../api/puppyBowlApi";
import { useNavigate } from "react-router-dom";

function AllPlayers({ setSinglePlayerId }) {
    const navigate = useNavigate();

    // Use the generated hook to fetch data from the API
    // When the component is first rendered, it will start the API fetch
    // It will re-render each time the fetch status changes (e.g., "loading", "data arrived", "error")
    const { data, isLoading, error } = useGetPlayersQuery();
    const [ deletePlayer ] = useDeletePlayerMutation();

    function handleDelete(player) {
        deletePlayer(player.id);
    }

    function handleClick(player) {
        setSinglePlayerId(player.id);
        navigate(`/players/${player.id}`);
    }

    // Show a loading message while data is being fetched
    if (isLoading) {
        console.log("The data is loading...");
        return <p>Loading...</p>;
    }

    // Show an error message if the fetch failed
    if (error) {
        console.log("The data fetch has failed");
        return <p>Error fetching data: {error.message}</p>;
    }

    return(
        <div id="allPlayersComponent">
            {data.data.players.map((player) => {
                return(
                    <div className="singlePlayerCard" key={player.id}>
                        <h3>Name: {player.name}</h3>
                        <p>Breed: {player.breed}</p>
                        <p>Status: {player.status}</p>
                        <img src={player.imageUrl} alt={player.id} />
                        <button id={player.id} onClick={() => handleClick(player)}>See Details</button>
                        <button id={player.id} onClick={() => handleDelete(player)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default AllPlayers;
