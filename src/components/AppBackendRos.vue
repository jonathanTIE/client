<script>

import '../assets/js/roslib.js';

/* eslint-disable */

export default {
  name: 'RosHandler',
  emits: ['onConnexionChange'],
  props: {
      url_ros: String,
      default: "ws://localhost:9090",
  },
  components: {

  },
  data: () => {
    let ros = new window.ROSLIB.Ros();
    console.log(ros);
    console.log(ROSLIB);

    return {
      ros: ros,
    };

  },
  computed: {
    isOnline() {
      return this.ros.isConnected;
    },

  },
  watch: {
    url_ros: function(previous,next) {
      console.log("aaaa");
      this.ros.close();

    },
  },
  created() {
    this.tryConnectRos();
    this.ros.on("connection", () => {
      this.$emit('onConnexionChange', this.isOnline); 
    });
    this.ros.on("error", () => {
      this.tryConnectRos();
      this.$emit('onConnexionChange', this.isOnline);
    });
    this.ros.on("close", () => {
      this.tryConnectRos();
      this.$emit('onConnexionChange', this.isOnline);
    });

  },
  mounted() {

  },
  methods: {
    tryConnectRos(){
      this.ros.connect(this.url_ros);
      let rosConnecter = window.setInterval(() => {
        if (this.isOnline) window.clearInterval(rosConnecter);
        else this.ros.connect(this.url_ros);
        }, 1000
      );
    },

  },

};
</script>

<template>

  
</template>

<style>

</style>
