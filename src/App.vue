<script>
import AppNav from './components/AppNav.vue';
import AppBackendHandler from './components/AppBackendHandler.vue';

import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default-dark.css';

export default {
  name: 'App',
  components: {
    AppNav,
    AppBackendHandler,
  },
  data: () => {
    return {
      ros_url: 'ws://192.168.1.19:9090',
    };
  },
  methods: {
    update_ros_url(url) {
      this.ros_url = url;
    },
  },
};
</script>

<template>
  <div id="app">
    <md-toolbar :md-elevation="3">
      <AppNav></AppNav>
    </md-toolbar>
    <AppBackendHandler v-bind:url="this.ros_url"></AppBackendHandler>
    <router-view @update-ros-address="update_ros_url"></router-view>

  </div>
</template>
