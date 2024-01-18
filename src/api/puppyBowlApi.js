import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-pt-sf-b-olha/";

export const puppyBolwApi = createApi({
    reducerPath: "puppyBolwApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getPlayers: builder.query({
            query: () => "players"
        }),
        getPlayerDetails: builder.query({
            query: (playerId) => `players/${playerId}` 
        }),
        addPlayer: builder.mutation({
            query: (newPlayerRequestBody) => ({
                url: "players",
                method: "POST",
                body: newPlayerRequestBody
            })
        }),
        deletePlayer: builder.mutation({
            query: (playerId) => `players/${playerId}`,
            method: "DELETE"
        })
    })
});

export const { useGetPlayersQuery, useGetPlayerDetailsQuery, useAddPlayerMutation, useDeletePlayerMutation } = puppyBolwApi




// export const fetchAllPlayers = async () => {
//     try {
//         // Get all players from API 
//         const playersResponse = await fetch(API_URL);
//         // Convert the response to JSON format
//         const playersJson = await playersResponse.json();
//         console.log("playersJson.data.players: ", playersJson.data.players);
//         return playersJson.data.players;
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// }