import styles from "../styles/Footer.module.css"

const Footer = () => {
    return(
        <div className={styles.Footer}>
            <a target="_blank" href="https://www.facebook.com/tanmay.vaij">
                <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a target="_blank" href="https://www.instagram.com/tanmayvaij/">
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a target="_blank" href="https://github.com/tanmayvaij">
                <i className="fa-brands fa-github"></i>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/tanmayvaij/">
                <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a target="_blank" href="https://twitter.com/tanmay_vaij">
                <i className="fa-brands fa-twitter"></i>
            </a>
        </div>
    )
}

export default Footer