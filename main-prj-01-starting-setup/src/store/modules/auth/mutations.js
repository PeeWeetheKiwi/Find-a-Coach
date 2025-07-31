export default {
    setUser(state, payload) {
        state.token = payload.token;
        state.userId = payload.userId;
        state.didLogin = false;
    },
    didLogout(state) {
        state.didLogout = true;
    }
};