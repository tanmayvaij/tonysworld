import Image from "next/image"
import Link from "next/link"
import styles from "../styles/BlogCard.module.css"

const BlogCard = ({ id, image, title, para, date }) => {
    return (
        <Link href={`/blogs/${id}`}>
            <a>
                <div className={styles.BlogCard}>
                    <Image src={image} width="250" height="170" />
                    <div>
                        <h3>{title}</h3>
                        <p className={styles.para}>{para.slice(0,30)} ...</p>
                        <p className={styles.date}>{date}</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default BlogCard