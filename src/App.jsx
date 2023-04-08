import {BrowserRouter ,Routes ,Route } from "react-router-dom"
import AutLayout from "./layouts/AutLayout"
import Login from "./paginas/Login"
import Registrar from "./paginas/Registrar"
import NuevoPassword from "./paginas/NuevoPassword"
import OlvidePassword from "./paginas/OlvidePassword"
import ConfirmarCuenta from "./paginas/ConfirmarCuenta"

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<AutLayout/>}>
          <Route index element={<Login/>} />
          <Route path="registrar" element={<Registrar/>} />
          <Route path="olvide-password" element={<OlvidePassword/>} />
          <Route path="olvide-password/:token" element={<NuevoPassword/>} />
          <Route path="confirmar/:id" element={<ConfirmarCuenta/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
