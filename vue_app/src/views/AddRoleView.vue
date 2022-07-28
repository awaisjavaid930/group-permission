<template>
    <div class="container">
        <span>
            Add New Role
        </span>
        <form @submit="addRole">
            <input type="text"  v-model="role" class="form-control" />
            <button class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>
<script>
import { useLoggedInUserStore } from '@/store/loggedInUser'

export default {
    name : 'AddRoleView',
    data() {
        return {
            role : ''
        }
    },
    methods : {
        addRole(e)
        {
            e.preventDefault();
            let loggedInUser = useLoggedInUserStore();
            let payload = { data : {name : this.role } , method: 'POST' , url : 'role' };
            loggedInUser.data_request(payload)
            .then(res => {
                if(res == 'success') {
                    this.$router.push('/roles');
                }
            })
            .catch(err => {
                console.log(err.response.data)
                // console.log(err.message)
            })
        }
    }
}
</script>