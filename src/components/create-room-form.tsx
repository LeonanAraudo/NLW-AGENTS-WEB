import { useForm } from "react-hook-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {z} from 'zod/v4'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useCreateRoom } from "@/http/use-create-room";


const createRoomSchema = z.object({
    name: z.string().min(3, {message: 'Inclua no minimo 3 caracteres'}),
    description: z.string()
})

type CreateRoomFormData = z.infer<typeof createRoomSchema> //Esse infer transforma o creareRoomSchema que está em js para ts assim podendo usar ele para validação
 
export function CreateRoomForm(){

    const { mutateAsync: createRoom } = useCreateRoom() //Esse mutate é a função que vai chamar a mutationFn lá do useCreateRoom

    const createRoomForm = useForm<CreateRoomFormData>({
        resolver: zodResolver(createRoomSchema),
        defaultValues: { //Colocado porque quando clicava em criar sala aparecia erro de undefined, agora com dando a eles o valor de string vazia aparece o erro especificado no zod
            name: "",
            description: ""
        }
    })

    async function handleCreateRoom({name, description}: CreateRoomFormData){
        // biome-ignore lint/suspicious/noConsole: para de ser chato biome
        await createRoom({name, description})
        createRoomForm.reset() //Limpa os input após o cadastro
    }

    return(
        <Card>
            <CardHeader>
                <CardTitle>Criar Sala</CardTitle>
                <CardDescription>Crie uma nova sala para começar a fazer perguntas e receber respostas de I.A</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...createRoomForm}>
                     <form onSubmit={createRoomForm.handleSubmit(handleCreateRoom)} className="flex flex-col gap-4">
                        <FormField  
                            control={createRoomForm.control}
                            name="name"
                            render={({field}) => {
                                return(
                                    <FormItem>
                                        <FormLabel>Nome da sala</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="Digite o nome da sala" />
                                        </FormControl>
                                        {/* Mensagem de erro caso exista */}
                                        <FormMessage />
                                    </FormItem>
                                )
                            }}
                        />
                        <FormField  
                            control={createRoomForm.control}
                            name="description"
                            render={({field}) => {
                                return(
                                    <FormItem>
                                        <FormLabel>Descrição</FormLabel>
                                        <FormControl>
                                            <Textarea {...field} placeholder="Digite a descrição" />
                                        </FormControl>
                                        {/* Mensagem de erro caso exista */}
                                        <FormMessage />
                                    </FormItem>
                                )
                            }}
                        />
                        <Button className="w-full" type="submit" >Criar sala</Button>
                     </form>
                </Form>
            </CardContent>
        </Card>
    )
}