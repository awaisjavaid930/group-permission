import axios from 'axios';
import { defineStore } from 'pinia'

export const useLoggedInUserStore = defineStore({
  // id is required so that Pinia can connect the store to the devtools
  id: 'loggedInUser',
  state: () =>({
        token: localStorage.getItem('token') ?? null,
        user : localStorage.getItem('user') ?? null
    }),
    getters: {},
    actions:{
      async login(email , password)
      {
        return await axios.post(`http://127.0.0.1:8000/api/auth/login`, { email, password })
        .then(res => {  
          localStorage.setItem('token',res.data.data.token)
          localStorage.setItem('user',res.data.data.user)
          this.token = res.data.data.token ;
          this.user = res.data.data.user ;
          return Promise.resolve(res.status);
        }).catch(err =>{
          console.log(err)
        })
      },
      logout()
      {
            this.user = null;
            this.token = null;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            router.push('/');
      }
    }
});
