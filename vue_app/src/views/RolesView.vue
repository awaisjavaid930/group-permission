<template>
  <div class="container">
    <span>Role List</span>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Role Name</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="role in data" :key="role.id">
          <th scope="row">{{ role.id }}</th>
          <td>{{ role.name }}</td>
          <td>
            <button class="btn btn-primary" @click="changeRoute('/role/'+role.id)">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { useLoggedInUserStore } from "@/store/loggedInUser";

export default {
  name: "RolesView",
  data() {
    return {
      data: []
    };
  },
  methods: {
    getRoles() {
      const userLoggedStore = useLoggedInUserStore();
      let url = { url: "role" };
      return userLoggedStore
        .data_request(url)
        .then(res => {
          this.data = res;
        })
        .catch(err => {
          console.log(err);
        });
    },
    changeRoute(url) {
      return this.$router.push(url);
    }
  },
  created() {
    this.getRoles();
  }
};
</script>