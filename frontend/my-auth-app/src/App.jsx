
import Pages from "./pages/Pages"
import Navbar from "./components/Navbar"
import Category from "./components/Category"
import {CartProvider} from "./components/CartContext"
function App() {
  

  return (
   <div className="App">

<CartProvider>
<Navbar />
<Category />
<Pages />
</CartProvider>

   </div>
  )
}

export default App
