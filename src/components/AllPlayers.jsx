import { useEffect, useState } from "react";
// import { fetchAllPlayers } from "../api/puppyBowlApi";

function AllPlayers() {

    // const [players, setPlayers] = useState([]);

    // useEffect(() => {
    //     const getAllPlayers = async () => {
    //         try {
    //             const playersData = await fetchAllPlayers();
    //             console.log("playersData: ", playersData);
    //             setPlayers(playersData);
    //         } catch (error) {
    //             console.log("Error: ", error);
    //         }
    //     }
        
    //     // console.log("Players: ", players);
    //     getAllPlayers();
    // }, []);

    return(
        <div id="allPlayersComponent">
            {/* {players.map(player => {
                return(
                    <div className="singlePlayerCard" key={player.id}>
                        <h3>Name: {player.name}</h3>
                        <p>Breed: {player.breed}</p>
                        <img src={player.imageUrl} alt={player.id} />
                    </div>
                )
            })} */}
        </div>
    )
}

export default AllPlayers;