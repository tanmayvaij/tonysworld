import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import ActiveClassLink from "./ActiveClassLink"

const Navbar = () => {
    return (  
        <div className={styles.Navbar}>
            <div>
                <Image src="/logo.png" width="100px" height="50px" />
                <h1>Tony's World</h1>
            </div>
            <ul>
                <li>
                    <ActiveClassLink text="Home" href="/" />
                </li>
                <li>
                    <ActiveClassLink text="Blogs" href="/blogs" />
                </li>
                <li>
                    <ActiveClassLink text="About" href="/about" />
                </li>
                <li>
                    <ActiveClassLink text="Contact" href="/contact" />
                </li>
            </ul>
        </div>
    )
}

export default Navbar