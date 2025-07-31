import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

export default {
    state() {
        return {
            userId: null,
            token: null,
            didLogout: false
        }
    },
    getters,
    actions,
    mutations
};