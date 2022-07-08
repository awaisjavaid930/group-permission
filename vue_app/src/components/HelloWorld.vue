<template>
  <div class="hello">
    <!-- <h1>{{ user.name }}</h1> -->
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
import { useLoggedInUserStore } from "@/store/loggedInUser";
import { mapState } from "pinia";

export default {
  name: "HelloWorld",
  setup() {
    const user = useLoggedInUserStore();
    user.name;
    return { user };
  },
  computed: {
    ...mapState(useLoggedInUserStore, ["name"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
