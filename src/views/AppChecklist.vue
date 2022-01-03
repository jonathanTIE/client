<template>
  <div>
    <state-checker @highlight="onHighlight" v-bind:options="['Violet', 'Jaune']"></state-checker>

      <md-bottom-bar md-sync-route>
        <md-bottom-bar-item exact :style="colorIfHighlightedGreen"
        v-on:click="onUnhighlight" md-label="Valider" md-icon="done"></md-bottom-bar-item>
        <md-bottom-bar-item exact :style="colorIfHighlightedRed"
          v-on:click="onUnhighlight" md-label="Reset" md-icon="highlight_off"></md-bottom-bar-item>

      </md-bottom-bar>
  </div>
</template>

<script>
import StateChecker from '../components/StateChecker.vue';

export default {
  components: {
    StateChecker,
  },
  data: () => {
    return {
      colorIfHighlightedGreen: { color: '#fff' },
      colorIfHighlightedRed: { color: '#fff' },
    };
  },
  mounted() {

  },
  methods: {
    onHighlight() {
      this.colorIfHighlightedGreen.color = '#a5d6a7';
      this.colorIfHighlightedRed.color = '#ef9a9a';
    },
    onUnhighlight() {
      this.colorIfHighlightedGreen.color = '#fff';
      this.colorIfHighlightedRed.color = '#fff';
    },

  },
};
</script>

<style>
</style>
