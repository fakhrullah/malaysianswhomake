import nextConnect from 'next-connect';
import middleware from '../../../middlewares/middleware';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  const users = await req.db
    .collection('profiles')
    .find({})
    .sort({ createdAt: -1 })
    // .limit(parseInt(req.query.limit, 10) || 10)
    .toArray();
    // console.log(`users:`,users)
  res.send({ users });
});

export default handler;