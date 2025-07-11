import { CreateRoomForm } from "@/components/create-room-form";
import { RoomList } from "@/components/room-list";

// Pagina que o usuário vai acessar quando ele entrar na aplicação
export function CreateRoom(){



    return(
        <div className="min-h-screen px-4 py-8">
            <div className="mx-auto max-w-4xl">
                <div className="grid grid-cols-2 items-start gap-8">
                    <CreateRoomForm/>
                    <RoomList/>
                </div>
            </div>
        </div>
    )
}
//Por meio do link e possivel mudar de pagina sem recarregar ela do zero, diferente do <a>