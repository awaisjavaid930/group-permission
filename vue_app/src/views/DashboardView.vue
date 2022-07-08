<template>
  <div>
    <h1>{{ name }} Yeah It</h1>
  </div>
</template>
<script>
export default {
  name: "DashboardView",
  data() {
    name: "";
  },
  methods: {
    getName() {
      this.name = "Awais";
    }
  },
  created() {
    this.getName();
  }
};
</script>