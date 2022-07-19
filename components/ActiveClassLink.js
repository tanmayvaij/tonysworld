import Link from "next/link"
import { useRouter } from "next/router"

const ActiveClassLink = ({text, href}) => {

    const router = useRouter()
    
    const style = {
        color: router.asPath == href ? '#ec008c': 'black',
        fontWeight: router.asPath == href ? 'bold': 'normal'
    }

    return(
        <Link href={href}><a style={style}>{text}</a></Link>
    )

}

export default ActiveClassLink
