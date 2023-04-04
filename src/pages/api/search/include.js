// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

export default async function handler(req, res) {
  const {ingredients} = req.query;
  try {
    const response = await axios.get(`http://localhost:3000/drink/search?i=${ingredients}`);
    res.status(200).json(response.data);
  } catch (e) {
    res.status(500).json({error: e.message});
  }
}
