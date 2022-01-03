<template>

  <div  class="md-elevation-10">
    <md-subheader id="emphase" class="md-primary cornered">ROS</md-subheader>
    <div class=" md-layout md-gutter md-alignment-center-center" >
      <div class="md-layout-item md-small-size-50">
        Connexion ROS vers <i class="md-accent"> {{ rosAddress }} </i>
      </div>

      <div class="md-layout-item md-small-size-10">
        <md-button v-on:click="$emit('update-ros-address', rosAddress)"
          class="md-icon-button md-raised">
          <md-icon >refresh</md-icon>
        </md-button>
      </div >

    </div>

    <form action="/" method="post">
      <md-autocomplete v-model="ipAddress" :md-options="addressOptions">
        <label>addresse IP</label>
      </md-autocomplete>
      <md-autocomplete v-model="port" :md-options="portOptions">
        <label>port</label>
      </md-autocomplete>
    </form>
    <md-divider></md-divider>
  </div>
</template>

<script>

export default {
  name: 'AppBackend',
  emits: ['update-ros-address'],
  data: () => {
    return {
      ipAddress: 'localhost',
      port: '9090',
      addressOptions: [
        'localhost',
        '192.168.1.19',
      ],
      portOptions: [
        '9090',
      ],
    };
  },
  computed: {
    rosAddress() {
      return `ws://${this.ipAddress}:${this.port}`;
    },
  },

};
</script>

<style>
.center-div {
  margin-left:20%;
  margin-right:20%;
}
.md-accent {
  color:#b6ffff;
}
.cornered {
    width: 50%;
    max-width: 250px;
    border-right: 40px solid #303030;
    border-bottom: 1px solid var(--md-theme-default-accent);
    margin-bottom:10px;

}
#emphase {
  color: #87b3fb;
  font-family: system-ui;
}
</style>
