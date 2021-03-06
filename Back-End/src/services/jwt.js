module.exports = (jwt, env) => {
  const JWT_SIGN_SECRET = env.app_JWT
    const token_service = {
  generateTokenForUser: (userData) => {
    return jwt.sign( 
      {
        userId: userData.id,
      },
      JWT_SIGN_SECRET,
      {
        expiresIn: '10h',
      }
    );
  },
  parseAuthorization: (authorization) => {
    return authorization != null ? authorization.replace('Bearer ', '') : null;
  },
  getUserId: (authorization) => {
    var userId = -1;
    var token = authorization;
    if (token != null) {
      try {
        var jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
        if (jwtToken != null) userId = jwtToken.userId;
      } catch (err) { }
    }
    return userId;
  }
}
return token_service;
};