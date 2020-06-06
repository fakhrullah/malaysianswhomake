// take only needed user fields to avoid sensitive ones (such as password)
export function extractUser(req) {
    if (!req.user) return null;
    const {
      _id, name, username, email, createdAt, bio, profilePicture, emailVerified, location, expertises,
      link_website, link_portfolio, link_twitter, link_github, link_linkedin,
      link_instagram, link_behance, link_dribbble, link_medium
    } = req.user;
    return {
      _id, name, username, email, createdAt, bio, profilePicture, emailVerified, location, expertises,
      link_website, link_portfolio, link_twitter, link_github, link_linkedin,
      link_instagram, link_behance, link_dribbble, link_medium
    };
  }  