import Card from "./components/Card/Card"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Layout from "./layouts/Layout"
import { useRef, useState} from "react"
import { Element } from "react-scroll"
import Modal from "./components/Modal/Modal"
function App() {
  const [modal, setModal] = useState(false)
  const ref = useRef(null)
  const modalButton = useRef(null)

  const handleScroll = () => {}
  const modalBox = (data) => {
      setModal(data)
  }
  const closeModalBox = (data) => {
      setModal(data)
  }
  return (
    <Layout>
      <Navbar scroll={handleScroll} />
      <section className="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-zinc-700 bg-blend-soft-light bg-fixed ">
        {modal == true ? <Modal closeModalBox={closeModalBox}/> : null}
        <Hero scroll={handleScroll}/>
      </section>
      <Element name="test" className="flex flex-wrap justify-center  min-h-screen p-[55px] items-center gap-7 bg-zinc-200" ref={ref}>
        <Card image={"https://picsum.photos/200/300"} title="Landing Page" buttonModal={modalBox} animation={modalButton}/>
        <Card image={"https://picsum.photos/200/300?random=2"} title="Company Profile" buttonModal={modalBox}/>
        <Card image={"https://picsum.photos/200/300?random=1"} title="Portfolio" buttonModal={modalBox}/>
        <Card image={"https://picsum.photos/200/300?random=4"} title="Example" buttonModal={modalBox}/>
        <Card image={"https://picsum.photos/200/300?random=3"} title="Example" buttonModal={modalBox}/>
      </Element>
    </Layout>
  )
}

export default App
