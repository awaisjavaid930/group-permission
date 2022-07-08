import { defineStore } from 'pinia'

export const useLoggedInUserStore = defineStore({
  // id is required so that Pinia can connect the store to the devtools
  id: 'loggedInUser',
  state: () =>({
        name: 'John Doe',
        email: 'fake@email.com',
        username: 'jd123'
    }),
    getters: {},
    actions:{}
});
