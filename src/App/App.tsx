import { RoutesDom } from "./routes/index"
import { UserLoggedProvider } from "./shared/contexts"

function App() {
  return (
    <UserLoggedProvider>
      <RoutesDom />
    </UserLoggedProvider>
  )
}

export default App
