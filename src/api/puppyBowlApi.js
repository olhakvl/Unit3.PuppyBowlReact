import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-pt-sf-b-olha/";

export const puppyBolwApi = createApi({
    reducerPath: "puppyBolwApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getPlayers: builder.query({
            query: () => "players",
            providesTags: ['Players']
        }),
        getPlayerDetails: builder.query({
            query: (playerId) => `players/${playerId}`
        }),
        addPlayer: builder.mutation({
            query: (newPlayerRequestBody) => ({
                url: "players",
                method: "POST",
                body: newPlayerRequestBody
            }),
            invalidatesTags: ['Players']
        }),
        deletePlayer: builder.mutation({
            query: (playerId) => ({
                url: `players/${playerId}`,
                method: "DELETE"
            }),
            invalidatesTags: ['Players']
        }),
    })
});

export const { useGetPlayersQuery, useGetPlayerDetailsQuery, useAddPlayerMutation, useDeletePlayerMutation } = puppyBolwApi
