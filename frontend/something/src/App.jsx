import { useState } from 'react'
import axios from 'axios'
// axios> fetch()
import './App.css'

function App() {
  const [product,setProduct] = useState([])

  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:3000/api/products")
    const info = await response.data
   await setProduct(info.products)
   console.log("Product Fetched from DB")
   console.log("State Available: NOTES[{}]")
  }

  

  useEffect(()=>{
    fetchProducts()
  },[])
  return (
    <>
     
    </>
  )
}

export default App
