import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type GetRoomsAPIResponse = Array<{
    id: string,
    name: string
}>//é usado para organizar as inofrmações de result

//Pagina que o usuário vai acessar quando ele entrar na aplicação
export function CreateRoom(){

const {data, isLoading } = useQuery({
    queryKey: ['get-rooms'], //Identificador único para a chamada http
    queryFn: async () => {
        const response = await fetch('http://localhost:3333/rooms')
        const result: GetRoomsAPIResponse = await response.json()
        return result
    } //Qual função vai executar para trazer os dados da api
})

    return(
        <div>
             {isLoading ? <p>carregando</p> : null}
             <div className="flex flex-col gap-1">
                {data?.map((room) => {
                    return <Link key={room.id} to={`/rooms/${room.id}`}>{room.name}</Link>
                })}
             </div>
        </div>
    )
}
//Por meio do link e possivel mudar de pagina sem recarregar ela do zero, diferente do <a>