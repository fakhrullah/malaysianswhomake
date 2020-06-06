import nextConnect from 'next-connect';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import middleware from '../../../middlewares/middleware';
import { extractUser } from '../../../lib/api-helpers';

const upload = multer({ dest: '/tmp' });
const handler = nextConnect();

const {
  hostname: cloud_name,
  username: api_key,
  password: api_secret,
} = new URL(process.env.CLOUDINARY_URL);

cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
});

handler.use(middleware);

handler.get(async (req, res) => res.json({ user: extractUser(req) }));

handler.patch(upload.single('profilePicture'), async (req, res) => {
  if (!req.user) {
    req.status(401).end();
    return;
  }
  let profilePicture;
  if (req.file) {
    const image = await cloudinary.uploader.upload(req.file.path, {
      width: 250,
      height: 250,
      crop: 'fill',
    });
    profilePicture = image.secure_url;
  }
  const { name, username, bio, createdAt, location, expertises, link_website, link_portfolio, link_twitter, 
    link_github, link_linkedin, link_instagram, link_behance, link_dribbble, link_medium 
  } = req.body;
  await req.db.collection('profiles').updateOne(
    { _id: req.user._id },
    {
      $set: {
        ...(name && { name }),
        createdAt: createdAt,
        username: username || '',
        bio: bio || '',
        location: location || '',
        expertises: expertises || '',
        link_website: link_website || '',
        link_portfolio: link_portfolio || '',
        link_twitter: link_twitter || '',
        link_github: link_github || '',
        link_linkedin: link_linkedin || '',
        link_instagram: link_instagram || '',
        link_behance: link_behance || '',
        link_dribbble: link_dribbble || '',
        link_medium: link_medium || '',
        ...(profilePicture && { profilePicture }),
      },
    },
  );
  res.json({ user: { username, name, profilePicture, createdAt, bio, location, expertises, link_website, link_portfolio, 
    link_twitter, link_github, link_linkedin, link_instagram, link_behance, link_dribbble, link_medium 
  } });
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
