import { createStore } from "vuex";

const userStore = createStore({
    state: {
        user: null,
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
    },
});

export default userStore;