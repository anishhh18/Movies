import Featured from "../components/Featured"
import Footer from "../components/Footer"
import Genre from "../components/Genre"
import Header from "../components/Header"
import Latest from "../components/Latest"
import Popular from "../components/Popular"
import Trending from "../components/Trending"
import Updates from "../components/Updates"

function Home() {
  return (
    <>
      <Header></Header>
      <Featured></Featured>
      <Popular></Popular>
      <Trending></Trending>
      <Latest></Latest>
      <Genre></Genre>
      <Updates></Updates>
      <Footer></Footer>
    </>
  )
}

export default Home
