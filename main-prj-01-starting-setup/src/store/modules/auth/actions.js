export default {
    async userLogin(context, payload) {
        const response = await fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDpocGB9m4IdSgSMyB8Jvl8PCW_GxxwF0s',
            {
                method: 'POST',
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true
                })
            });
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to authenticate.');
            throw error;
        }

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.userId,
            tokenExpiration: responseData.expiresIn
        });

    },
    async userSignup(context, payload) {

        const response = await fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDpocGB9m4IdSgSMyB8Jvl8PCW_GxxwF0s',
            {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to authenticate.');
            throw error;
        }

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.userId,
            tokenExpiration: responseData.expiresIn
        });

    },
    logout(context) {
        context.commit('setUser', {
            token: null,
            userId: null,
            tokenExpiration: null
        })
    }
};