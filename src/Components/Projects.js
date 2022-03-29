import './Styles/Projects.modules.css'
import { FaRegFileCode, FaLaptopCode, FaLinkedin } from 'react-icons/fa'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Projects() {

    const projects = [
        {
            title: "Wiki-Mon",
            description: "Front-end: React-Redux and pure CSS, on the back-end I used Node, Sequelize, PostgreSQL, and Express. I used an external api and then created my own database where you can create your own pokemon! You can also filter them by type, strength level, speed, among others.",
            deploy: "",
            linkedIn: "https://www.linkedin.com/feed/update/urn:li:activity:6851857378682531840/",
            code: "https://github.com/Goncervan/P-I-Pokemon"
        },
        {
            title: "Spotify Clon",
            description: "Backend: Created using Node.js and Express for a small Authentication backend using the Spotify api. Frontend: Built using pure React.js and Css, and some Components from the 'react-spotify-web-playback' library. It allows you to log in using your Spotify account, search for songs or artists. play songs and also shows you the lyrics of the song you are listening to!",
            deploy: "",
            code: "https://github.com/Goncervan/Spotify-Clon",
            linkedIn: "",
        },
        {
            title: "Rick And Morty App",
            description: "My first app using GraphQl in React. It uses the Rick And Morty api to display the list of characters. Made with Typescript, GraphQl, React and fully responsive with CSS",
            deploy: "https://goncervan.github.io/TypesCript-GraphQL/",
            code: "https://github.com/Goncervan/TypesCript-GraphQL"
        },
        {
            title: "Critpo Currency App",
            description: "Displays information of the most famous Criptos. It gets its information from the Coin Gecko api. Made with React and fully responsive with Css",
            deploy: "https://goncervan.github.io/Crypto-Currency-App/",
            code: "https://github.com/Goncervan/Crypto-Currency-App"
        },
        {
            title: "Wheater App",
            description: "Application that allows you to search and see the current weather of the cities. Made with React, CSS and Bootstrap",
            deploy: "https://goncervan.github.io/WeatherApp/",
            code: "https://github.com/Goncervan/WeatherApp"
        },
        {
            title: "Marvel App",
            description: "It allows you to see a list of characters, series or comics, see the details of the characters and search by name. Made with React, Redux and CSS",
            deploy: "https://goncervan.github.io/Marvel/",
            code: "https://github.com/Goncervan/Marvel"
        },
        {
            title: "TypeScript Tasks App",
            description: "First app using TypeScript. Allows you to create a list of tasks and delete them when you have finished them. Made whit Typescript, React, Bootstrap and CSS",
            deploy: "https://goncervan.github.io/TypeScript-Tasks/",
            code: "https://github.com/Goncervan/TypeScript-Tasks"
        },
    ]
    const controls = useAnimation();


    const { inView, ref } = useInView();
    if (inView) {
        controls.start("show")
    }

    // const container = {
    //     hidden: {
    //         opacity: 0
    //     },
    //     show: {
    //         opacity: 1,
    //         transition: {
    //             dealy: 10,
    //             staggerChildren: 0.1,
    //             delayChildren: 0.3,
    //         },
    //     },
    // }

    const containerItem1 = {
        hidden: {
            scale: .5,
            x: -200,
            opacity: 0
        },
        show: (custom) => ({
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                delay: custom + 2,
                duration: 2,
            }
        })
    }
    const containerItem2 = {
        hidden: {
            scale: .5,
            x: 200,
            opacity: 0
        },
        show: (custom) => ({
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                delay: custom + 2,
                duration: 2,
            }
        })
    }

    return (
        <section className='timeline-section'>
            <div ref={ref} className='timeline-items'>
                {
                    projects.map((el, i) => (
                        <div key={i} className='timeline-item' >
                            <div className='timeline-dot'></div>
                            <motion.div className='timeline-content' custom={i} variants={i % 2 === 0 ? containerItem1 : containerItem2} initial="hidden" animate={controls}>
                                <h3>{el.title}</h3>
                                <p>{el.description}</p>
                                <div className='btns'>
                                    {
                                        el.deploy.length ? (
                                            <a href={el.deploy} rel="noreferrer" target="_blank"><FaLaptopCode className='icon-proyect' /> Deploy</a>
                                        ) : (
                                            <a href={el.deploy} rel="noreferrer" target="_blank"><FaLinkedin className='icon-proyect' /> LinkedIn</a>
                                        )
                                    }
                                    <a href={el.code} rel="noreferrer" target="_blank"><FaRegFileCode className='icon-proyect' /> Code</a>
                                </div>
                            </motion.div>
                        </div>
                    ))
                }
            </div>
        </section >
    )
}