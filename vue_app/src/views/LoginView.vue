<template>
  <div class="home">
    <div class="container text-start">
      <div class="card">
        <div class="card-header">Login</div>
        <HelloWorld />
        <div class="card-body">
          <form @submit="login">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input
                type="password"
                v-model="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HelloWorld from "@/components/HelloWorld.vue";
import { useLoggedInUserStore } from "@/store/loggedInUser";
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
      const loggedInUser = useLoggedInUserStore();
      await loggedInUser.login(this.email, this.password).then(res => {
        if (res == 200) {
          this.$router.push("/dashboard");
        }
      });
    }
  },
  components: { HelloWorld }
};
</script>
