import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateRoom } from "./pages/create-room";
import { Room } from "./pages/room";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Index é pra mostar que a rota vai ser aberta em /   */}
          <Route element={<CreateRoom />} index />
          <Route element={<Room />} path="/room/:roomID" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

