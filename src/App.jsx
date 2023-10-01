import { AuthProvider } from "./context/AuthContext"
import Routing from "./layout/Routing/routing"


function App() {

  return (
    <>
    <AuthProvider>
      <Routing/>
    </AuthProvider>
    
    </>
  )
}

export default App
