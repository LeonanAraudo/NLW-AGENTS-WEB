import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateRoomRequest } from "./types/create-roomrequest";
import type { CreateRoomResponse } from "./types/create-room-response";





export function useCreateRoom(){
    const queryClient = useQueryClient()

    //Quando for fazer uma requisição que vai salvar dados ao inves de listar usa o useMutation
    //Pode usar ele sempre que for criação edição ou remoção
    //useQuery sempre que for listagem
    return useMutation({
        mutationFn: async (data: CreateRoomRequest) => {
            const response = await fetch('http://localhost:3333/rooms', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const result: CreateRoomResponse = await response.json()
            return result
        },

        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['get-rooms']}) //Vai refazer automaticamente todas as queries que tem essa chave ou seja ao cadastrar uma sala ela aparece automaticamente na lista sem precisar da f5 
        }

        })
    }