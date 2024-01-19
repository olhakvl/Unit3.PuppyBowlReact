import { useState } from "react";
import { useAddPlayerMutation } from "../api/puppyBowlApi";


function NewPlayerForm() {
    const [playerName, setPlayerName] = useState("");
    const [playerBreed, setPlayerBreed] = useState("");
    const [playerStatus, setPlayerStatus] = useState("field");
    const [playerImage, setPlayerImage] = useState("");
    const [error, setError] = useState(null);

    // use a mutation hook to create a new player
    const [ addNewPlayer ] = useAddPlayerMutation();

    function handleSubmit(event) {
        event.preventDefault();

        try {
            const body = {
                name: playerName,
                breed: playerBreed,
                status: playerStatus,
                imageUrl: playerImage,
            }
            addNewPlayer(body);

            setPlayerName("");
            setPlayerBreed("");
            setPlayerStatus("field");
            setPlayerImage("");

        } catch (error) {
            setError(error);
            console.log("Error: ", error);
        }
    }

    return(
        <div id="formSection">
            <form className="form">
            <h2>Add New Player Form</h2>
                <label> Name:
                    <input type="text" name="name" onChange={(e) => setPlayerName(e.target.value)}/>
                </label>
                <label> Breed:
                    <input type="text" name="breed" onChange={(e) => setPlayerBreed(e.target.value)}/>
                </label>
                <label> Bench
                    <input type="radio" id="bench" name="status" value="bench" onChange={(e) => setPlayerStatus(e.target.value)}/> 
                </label>
                <label> Field
                    <input type="radio" id="field" name="status" value="field"  onChange={(e) => setPlayerStatus(e.target.value)}/> 
                </label>
                <label> Image URL:
                    <input type="imageUrl" name="imageUrl" onChange={(e) => setPlayerImage(e.target.value)}/>
                </label>
                <button id="createPlayerButton" type="submit" onClick={handleSubmit}>Add a New Player</button>
            </form>
        </div>
    )
}

export default NewPlayerForm;