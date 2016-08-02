class AuthService {
    signIn(username, password) {
        return new Promise((resolve, reject) => {
            if (username === 'admin' && password === 'admin') {
                resolve({
                    userId: '1',
                    username: 'admin',
                });
                return;
            }

            reject('There was an error signing in');
        });
    }
}

export default new AuthService();
