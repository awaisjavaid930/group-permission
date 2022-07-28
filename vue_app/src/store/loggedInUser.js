import axios from 'axios';
import { defineStore } from 'pinia'

export const useLoggedInUserStore = defineStore({
  // id is required so that Pinia can connect the store to the devtools
  id: 'loggedInUser',
  state: () =>({
        token: localStorage.getItem('token') ?? null,
        user : localStorage.getItem('user') ?? null
    }),
    getters: {
        is_user_logged: (state) => state.user != null,
    },
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
      },
      async data_request(data)
      {
        let token = localStorage.getItem('token'); 
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        return await axios.request({
          method : data.method,
          url : 'http://127.0.0.1:8000/api/' + data.url , config ,
          data: data.data ? data.data : '',
          responseType  : data.responseType ? data.responseType : 'json' 
        })
        .then(res => {
          if (data.method == 'POST') {
            var pageData =  res.data.response  
          } else {
            var pageData = res.data.data  
          }
          return Promise.resolve(pageData)
        })
        .catch(err => {
          console.log(err)
        })
      }
    }
});
