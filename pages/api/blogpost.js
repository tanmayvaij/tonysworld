export default async function handler(req, res) {
    const data = await fetch(`${process.env.FIREBASE}/posts/${req.query.post}.json`)
    const resp = await data.json()
    res.json(resp)
}
  