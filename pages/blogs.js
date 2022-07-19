import Head from "next/head"
import BlogCard from "../components/BlogCard"
import styles from "../styles/Blogs.module.css"

const Blogs = (props) => {

    const { data } = props

    return (
        <div className={styles.Blogs}>

			<Head>
				<title>Tony's World- Blogs</title>
				<meta name="description" content="Tony's world is a personal blog" />
				<meta charset="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="author" content="Tanmay Vaij" />
				<link rel="icon" href="/logo.png" />
			</Head>

            {
                data.map((val)=>{
                    return(
                        <BlogCard key={val.id} {...val} />
                    )
                })
            }

        </div>
    )

}

export async function getServerSideProps(context) {

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/allBlogs`)
    const data = await res.json()

    data.reverse()

    return {
        props: {data}
    }

}

export default Blogs