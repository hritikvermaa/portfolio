import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import logo from "../assets/Logo.webp"

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6' >
        <div className='flex flex-shrink-0 items-center' >
            <a href='/' aria-label='Home' >
                <img src={logo} className="mx-2" width={50} height={33} 
                alt="Logo" />
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 twxt-2xl" >
            <a href="https://www.linkedin.com/in/ritikdeveloper" 
               target="_blank"
               rel="noopener noreferrer"
               aria-label="LinkedIn">
                <FaLinkedin />
            </a>
            <a href="https://github.com/hritikvermaa" 
               target="_blank"
               rel="noopener noreferrer"
               aria-label="GitHub">
                <FaGithub />
            </a>
            <a href="https://www.instagram.com/hritik_kumar.2575/" 
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Instagram">
                <FaInstagram />
            </a>
            <a href="https://x.com/hriti92828" 
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Twitter">
                <FaTwitter />
            </a>

        </div>
    </nav>
  )
}

export default Navbar