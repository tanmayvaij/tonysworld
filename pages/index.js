import Head from 'next/head'
import Image from 'next/image'
import styles from "../styles/Home.module.css"

export default function Home() {
	return (
		<>
			<Head>
				<title>Tony's World</title>
				<meta name="description" content="Tony's world is a personal blog" />
				<meta charset="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="author" content="Tanmay Vaij" />
				<link rel="icon" href="/logo.png" />
			</Head>

			<div className={styles.Home}>
				<Image src="/poster.png" width="1400" height="550" />
			</div>

			<div className={styles.Sub}>
				<h1>What We Have <span style={{color: "#ec008c"}}>?</span></h1>
			</div>

			<div className={styles.Content}>
				<div>
					<Image src={'/fleximg1.jpg'} height={200} width={400} />
					<h2>Personal Blog Posts</h2>
					<p>Presenting my blogs on some of my the interesting topics like traveling, best online products, stock new etc.</p>
				</div>
				<div>
					<Image src={'/fleximg2.jpg'} height={200} width={400} />
					<h2>Travel Blogs</h2>
					<p>As we all know traveling is fun and we all enjoy it. Presenting some of my travel blogs on some of the best places around the world.</p>
				</div>
				<div>
					<Image src={'/fleximg3.jpg'} height={200} width={400} />
					<h2>Product Recommendation</h2>
					<p>You might be browsing the web for a long time searching for a best deals. Have a look on my recommendations.</p>
				</div>
				<div>
					<Image src={'/fleximg4.jpg'} height={200} width={400} />
					<h2>World News</h2>
					<p>Also presenting some global news in front on you which can just help you to know the world better.</p>
				</div>
				<div>
					<Image src={'/fleximg5.jpg'} height={200} width={400} />
					<h2>Crypto and Stock News</h2>
					<p>It's an interesting thing for a lot of businessmans and youths, because who in this world doesn't likes money.</p>
				</div>
				<div>
					<Image src={'/fleximg6.jpg'} height={200} width={400} />
					<h2>Awesome Facts</h2>
					<p>Some blogs on scientific and other facts which will blow your minds. Some rules and regulations which you will not believe on.</p>
				</div>
			</div>

		</>
	)
}
