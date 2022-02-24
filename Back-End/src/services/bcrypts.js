module.exports=(bcrypt)=> {
    const bcrypts_service = {
        bcryptPassword: (password, salt) => {
            return new Promise((resolve, reject) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) reject();
                    resolve(hash);
                });
            });
        },
        comparePassword: (password, hashedPassword) => {
            if (!password || !hashedPassword) {
              return Promise.resolve(false);
            }
            return bcrypt.compare(password, hashedPassword);
        }
    }
    
    return bcrypts_service;
}
    
