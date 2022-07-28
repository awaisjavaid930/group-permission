<template>
    <div class="container">
        <h4>Add New Permission</h4>
        <form @submit="submitPermissionForm">
            <div class="mb-3">
                <label class="form-label">Add Route Permission</label>
                <input type="text" v-model="permission" class="form-control" placeholder="">
            </div>
            <input type="submit" class="btn btn-primary float-start" value="Submit" />
        </form>
    </div>
</template>
<script>
import { useLoggedInUserStore } from '@/store/loggedInUser'
export default {
    name : 'AddPermissionView',
    data()
    {
        return {
            permission: ''
        }
    },
    methods : {
        async submitPermissionForm(e)
        {
            e.preventDefault();
            let store = useLoggedInUserStore();
            let payload = { url : 'permission' , method : 'POST' , data : {permission : this.permission} }; 
            store.data_request(payload)
            .then(res => {
                if(res == 'success'){
                    this.$router.push('/dashboard');
                }
            })
            .catch(err =>{
                console.log(err)
            })
        }
    }
}
</script>