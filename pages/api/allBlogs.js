export default async function handler(req, res) {
	const data = await fetch(`${process.env.NEXT_PUBLIC_FIREBASE}/posts.json`)
	const resp = await data.json()
	res.json(resp)
}
