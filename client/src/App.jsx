import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AddPage from "./pages/Add"
import { Details } from "./components/Details"
import WishlistPage from "./pages/WishlistPage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </>
  )
}

export default App
