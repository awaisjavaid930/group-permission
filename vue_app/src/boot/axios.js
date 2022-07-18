import axios from 'axios';

const api = axios.create({baseURL : process.env.API_URL});

export default boot(({ app, store, router }) => {
    
    // set default to use withCredentials
    api.defaults.withCredentials = true ;
    
    /**
    * Intercept every request to make sure we have a csrf token. If we dont then get a fresh token
    */

    // No Idea About This 
    // api.interceptors.request.use( async req => {
    //     if(!store.state.auth.csrfToken && !Cookies.get('XSRF-TOKEN') && req.url != '/api/csrf-cookie') {
    //         await api.get('/api/csrf-cookie').catch(error => {
    //             console.log(error)
    //             return Promise.reject();    // if(store.state.auth.userToken) {
    //         req.headers['Authorization'] =  'Bearer ' + store.state.auth.userToken
    //         })
    //     }
    // })

    /**
     * Automatically append the authorization header
     */
    let user_token = LocalStorage.getItem('token')
    if(user_token && user_token) {
      req.headers['Authorization'] =  'Bearer ' + user_token
    }


    /**
     * Automatically append the Content type header if its not set
    */
    req.headers['Content-Type'] = req.headers['Content-Type'] ? req.headers['Content-Type'] : 'application/json'
    return Promise.resolve(req)

})