import Hero from "../../components/hero/Hero"
import HomeType from "../../components/home-type/HomeType"
import Products from "../../components/products/Products"
import Skleton from "../../components/products/Skleton"
import { useFetch } from "../../hooks/useFetch"

const Home = () => {
  const { data, error, loading } = useFetch("/products", { limit: 8, })
  return (
    <div>
      <Hero />
      <HomeType />
      {
        error && <p>something went weong :(</p>
      }
      {loading ? <Skleton/> : <Products data={data.products} />}
    </div>
  )
}

export default Home