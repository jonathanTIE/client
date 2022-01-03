<template>
  <div class="md-layout">
    <nav class="md-layout">
      <md-menu class="md-layout">
        <router-link class="md-layout-item" to="backend">
          <md-button >Backend</md-button>
        </router-link>
        <router-link class="md-layout-item" to="/checklist">
          <md-button >checklist</md-button>
        </router-link>
        <router-link class="md-layout-item" to="/debug">
          <md-button >debug</md-button>
        </router-link>
      </md-menu>
    </nav>
    <md-divider></md-divider>
  </div>
</template>

<script>

export default {
  name: 'AppNav',
  components: {
  },
};
</script>

<style>
router-link.md-layout-item {
  border: solid;
}
</style>
