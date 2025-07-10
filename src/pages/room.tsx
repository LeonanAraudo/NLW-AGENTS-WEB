//Depois que criar a sala, essa tela vai ser a de detalhes daquela sala

import { useParams, Navigate } from "react-router-dom"

type RoomParams = {
    roomID: string
}
export function Room(){
    const params = useParams<RoomParams>()
    if(!params.roomID){
        return <Navigate replace to="/"/>
    }//Se o usuário acessar a room e na url não tiver o id ou ele apagar ele vai ser mandado de volta para a tela inicial
    return <div> Room Details {JSON.stringify(params)}</div>
}