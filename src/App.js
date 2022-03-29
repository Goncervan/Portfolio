import "./App.css";
import { motion } from "framer-motion";
import Box from "./Components/Box";
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import Tecno from "./Components/Tecno";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
export default function App() {

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: "-300px",
      scale: 0.5
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 0.8,
        type: "spring",
        stiffness: 90
      }
    }
  }
  const subTitleVariants = {
    hidden: {
      opacity: 0,
      scale: 0
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 1,
      }
    }
  }




  return (
    <div className="App">
      <section className="principal">
        <motion.h1 className="title" variants={titleVariants} initial="hidden" animate="visible">
          GONZALO CERVAN
        </motion.h1>
        <motion.div variants={subTitleVariants} initial="hidden" animate="visible">
          <h2 className="subtitle">DEVELOPER</h2>
        </motion.div>
      </section>
      <section className="perfilCard">
        <h1 className="title">ABOUT ME</h1>
        <Box />
      </section>
      <section className="tecnologias">
        <Tecno />
      </section>
      <section className="proyectos">
        <h1 className="proyectos-title">PROJECTS</h1>
        <Projects />
      </section>
      <section className="contacto">
        <Contact/>
      </section>
      <BsFillArrowDownCircleFill className="arrowDown" />
    </div>
  );
}