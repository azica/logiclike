import { BrowserRouter } from "react-router-dom"
import { Navigation } from "utils/routes/Navigation"

const App = () => {

  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  )
}

export default App