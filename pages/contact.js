import Head from "next/head"
import { useState } from "react"
import styles from "../styles/Contact.module.css"

const Contact = () => {

    const [ state, setState ] = useState({name: "", email: "", message: ""})

    const sendMessage = async (e) => {
        e.preventDefault()
        await fetch('https://blog-4b9ec-default-rtdb.firebaseio.com/messages.json', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(state)
        })
        setState({name: "", email: "", message: ""})
        alert('Message Sent')
    }

    return(
        <div className={styles.Contact}>

			<Head>
				<title>Tony's World - Contact</title>
				<meta name="description" content="Tony's world is a personal blog" />
				<meta charset="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="author" content="Tanmay Vaij" />
				<link rel="icon" href="/logo.png" />
			</Head>

            <h2>Contact Me</h2>

            <div className={styles.form}>
                <div>
                    <input onChange={ (e) => setState({...state, [e.target.name]: e.target.value}) } value={state.name} placeholder="Enter Full Name" type="text" name="name" />
                </div>
                <div>
                    <input onChange={ (e) => setState({...state, [e.target.name]: e.target.value}) } value={state.email} placeholder="Enter Email" type="email" name="email" />
                </div>
                <div>
                    <textarea onChange={ (e) => setState({...state, [e.target.name]: e.target.value}) } value={state.message} placeholder="Enter your message" name="message" cols="34" rows="7"></textarea>
                </div>
                <div className={styles.btn}>
                    <button onClick={sendMessage}>SUBMIT</button>
                </div>
            </div>
        </div>

    )
}

export default Contact