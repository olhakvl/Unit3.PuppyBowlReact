import { useGetPlayerDetailsQuery } from "../api/puppyBowlApi";

function SinglePlayer( { singlePlayerId } ) {

    const { data, isLoading, error } = useGetPlayerDetailsQuery(singlePlayerId);

    // Show a loading message while data is being fetched
    if (isLoading) return <p>Loading...</p>;

    // Show an error message if the fetch failed
    if (error) return <p>Error fetching data: {error.message}</p>;

    console.log("Data: ", data.data);

    const player = data.data.player;

    const teamName = player.team === null ? "Unassigned" : player.team.name;

    return(
        <div id="playerDetails">
            <h2>{player.name}</h2>
            <p>ID: {player.id}</p>
            <p>Breed: {player.breed}</p>
            <p>Status: {player.status}</p>
            <p>Team Name: {teamName}</p>
            <img src={player.imageUrl} alt={player.id} />
        </div>
    )
}

export default SinglePlayer;