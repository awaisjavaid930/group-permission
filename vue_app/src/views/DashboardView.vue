<template>
  <div class="container">
    <div>
      <span class="fs-2 me-2">Permissions</span>
      <button class="btn btn-primary" @click="changeRoute('roles')">Roles</button>
      <button class="btn btn-primary" @click="changeRoute('/permission/create')">Add Permission</button>
      <button class="btn btn-primary" @click="logout">Logout</button>
    </div>
    <table class="table border table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name Of Permission</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in permissions" :key="data.id">
          <th scope="row">{{ data.id }}</th>
          <td>{{data.permission}}</td>
          <td>
            <a @click="changeRoute('/permission/'+data.id)" class="btn btn-primary">Edit</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { useLoggedInUserStore } from "@/store/loggedInUser";
export default {
  name: "DashboardView",
  data() {
    return {
      sendrequest: "",
      permissions: []
    };
  },
  methods: {
    getData() {
      const loggedInUser = useLoggedInUserStore();
      let data = { url: "permission"  , method : 'GET'};
      this.sendrequest = loggedInUser
        .data_request(data)
        .then(res => {
          this.permissions = res;
        })
        .catch(err => {
          console.log(err);
        });
    },
    async logout(e) {
      e.preventDefault();
      const loggedInUser = useLoggedInUserStore();
      await loggedInUser.logout();
      this.$router.push("/");
    },
    changeRoute(url) {
      this.$router.push(url);
    }
  },
  created() {
    this.getData();
  }
};
</script>