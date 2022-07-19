import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styles from "../../styles/Post.module.css"

const Post = (props) => {

    const { data } = props

    return (
        <div className={styles.Post}>

            <Head>
				<title>Tony's World - {data.title}</title>
				<meta name="description" content="Tony's world is a personal blog" />
				<meta charset="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="author" content="Tanmay Vaij" />
				<link rel="icon" href="/logo.png" />
			</Head>

            <h1>{data.title}</h1>

            <p>Posted on: {data.date}</p>

            <Image src={data.image} width="400" height="250" />

            <p className={styles.para}>{data.para}</p>

            <div className={styles.links}>
                <Link href='/blogs'>
                    <a className={styles.link1}>Back</a>
                </Link>
                { data.link && <a target="_blank" className={styles.link2} href={data.link}>Buy Now</a> }
            </div>

        </div>
    )
}

export async function getServerSideProps(context) {

    const { post } = context.query 
    const res = await fetch(`${process.env.HOST}/api/blogpost?post=${post}`)
    const data = await res.json()

    return {
        props: {data}
    }

}

export default Post