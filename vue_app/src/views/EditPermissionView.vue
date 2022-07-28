<template>
  <div>
    <span>Edit Permission</span>
    <form @submit="updatePermission">
      <input :value="permission.permission" />
      <br />
      <input type="submit" value="update" class="btn btn-primary" />
    </form>
  </div>
</template>
<script>
import { useLoggedInUserStore } from "@/store/loggedInUser";

export default {
  name: "EditPermissionView",
  data() {
    return {
      permission: ""
    };
  },
  methods: {
    getData() {
      let loggedInStore = useLoggedInUserStore();
      let url = { url: "permission/" + this.$route.params.id , method : 'GET' };
      loggedInStore
        .data_request(url)
        .then(res => {
          this.permission = res;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>