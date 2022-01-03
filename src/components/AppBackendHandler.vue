<template>
  <div id='backend-state' :style='cssProps'>
    <RosBackend :v-if="selectedBackend == 'ros'"
    v-bind:url_ros="this.url"
    @onConnexionChange="onConnexionChange"></RosBackend>
    <div v-if='isOnline'  id="container-overlay">
      <md-progress-bar class="bar" md-mode="determinate" :md-value="100"></md-progress-bar>
      <span id="container-underlay">CONNECTÉ</span>
      </div>
    <div v-if='!isOnline' id="container-overlay">
      <md-progress-bar md-mode="indeterminate" class='md-accent bar'></md-progress-bar>
      <span id="container-underlay">DÉCONNECTÉ</span>
      </div>
    <md-divider></md-divider>
  </div>
</template>

<script>
import RosBackend from './AppBackendRos.vue';

export default {
  name: 'AppBackendHandler',
  components: {
    RosBackend,
  },
  props: {
    selectedBackend: {
      type: String,
      default: 'ros',
      validator: (backend) => backend === 'ros',
    },
    url: {
      type: String,
      default: 'ws://localhost:9090', // TODO : ajouter un validateur
    },
  },
  data: () => {
    /* eslint-disable */
    let isOnline = false;
    return {
      isOnline: isOnline,
    };
  },

  methods: {
    onConnexionChange(isOnline) {
      this.isOnline = isOnline;
    },
    cssProps() {
      return {
        '--color': this.color,
      };
    },
  },
};
</script>

<style>
@keyframes fadeIn { 
  0% { opacity: 0.75; } 
  100% {opacity: 1; }
}

.md-progress-bar.bar {
  length:80%;
  height:40px;
  animation: fadeIn 2s infinite alternate;
}
#backend-state {
  background-color: var(--color);
  display: block;
}

#container-overlay {
  position: relative;
}
#container-underlay {
   position: absolute;
  top: 12px;
  font-size: 24px;
  right:45%;
  z-index: 10;
  right: 50%;
  transform: translate(50%, 0);
}
</style>
