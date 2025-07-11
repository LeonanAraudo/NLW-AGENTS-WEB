//Basicamente um Hook
import { useQuery } from "@tanstack/react-query"
import type { GetRoomsAPIResponse } from "./types/get-rooms-response"

export function useRooms(){
    return useQuery({
    queryKey: ['get-rooms'], //Identificador único para a chamada http
    queryFn: async () => {
        const response = await fetch('http://localhost:3333/rooms')
        const result: GetRoomsAPIResponse = await response.json()
        return result
    } //Qual função vai executar para trazer os dados da api
}
    )
}