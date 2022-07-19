import Head from "next/head"
import Image from "next/image"
import styles from "../styles/About.module.css"

const About = () => {
    return(
        <div className={styles.About}>

			<Head>
				<title>Tony's World - About Me</title>
				<meta name="description" content="Tony's world is a personal blog" />
				<meta charset="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="author" content="Tanmay Vaij" />
				<link rel="icon" href="/logo.png" />
			</Head>

            <h1>About Us</h1>

            <Image src={'/about.jpg'} width="500" height="300" /> 

            <p>
                Tony's World is a personal blog created by Tanmay Vaij ( BCA student of DYPIU ).
                Here you can find blogs on varoius topic such as travelling, online product recommendations,
                world news, news on crypto market and stock market and some awesome fact which you might not 
                know. You can feel free to contact me on the social media platforms mentioned in the footer
                section and you can also send a message through the contact page of this website. Thank You.
            </p>

        </div>
    )
}

export default About