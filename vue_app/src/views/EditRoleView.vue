<template>
  <div>
    <span>Edit Role</span>
  </div>
</template>
<script>
import { useLoggedInUserStore } from "@/store/loggedInUser";

export default {
  name: "EditRoleView",
  methods: {
    getEditRole() {
      let userLoggedStore = useLoggedInUserStore();
      let url = { url: "role/" + this.$route.params.id };
      userLoggedStore
        .data_request(url)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    return this.getEditRole();
  }
};
</script>