db.createUser(
        {
            user: "loginapplication",
            pwd: "aplicacaologin",
            roles: [
                {
                    role: "readWrite",
                    db: "login"
                }
            ]
        }
);

db.createCollection( "users", { collation: { locale: "fr" } } );