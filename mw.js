// Hydra middleware for JSON-Server
module.exports = (req, res, next) => {
  // res.header("X-Hello", "World");
  const link = '</doc>; rel="http://www.w3.org/ns/hydra/core#apiDocumentation"';
  // res.header("Link", link);
  res.header("Link", link);
  const jsonLD = "application/ld+json";
  res.header("Content-Type", jsonLD);
  next();
};
