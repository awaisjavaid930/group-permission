<template>
  <div>
    <h1>{{ name }} Yeah It</h1>
    <button class="btn btn-primary" @click="logout">Logout</button>
  </div>
</template>
<script>
import { useLoggedInUserStore } from "@/store/loggedInUser";
export default {
  name: "DashboardView",
  data() {
    name: "";
  },
  methods: {
    getName() {
      this.name = "Awais";
    },
    async logout(e) {
      e.preventDefault();
      const loggedInUser = useLoggedInUserStore();
      await loggedInUser.logout();
      this.$router.push("/");
    }
  },
  created() {
    this.getName();
  }
};
</script>