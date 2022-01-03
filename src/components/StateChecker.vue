<script>
export default {
  name: 'StateChecker',
  props: {
    options: {
      type: Array,
    },
  },

  computed: {
    buttonsNames() {
      const formatted = [];
      for (let i = 0; i < this.options.length; i += 1) {
        formatted[i] = { id: i, name: this.options[i] };
      }
      return formatted;
    },
  },
  methods: {
    highlight() {
      this.$emit('highlight', true);
    },
  },
};
</script>

<template>
  <div>
    <div id="state"></div>
    <button>recheck</button>
    <ul v-for="option in options" :key="option.name">
      <button v-on:click="highlight">
        {{ option }}
      </button>
      </ul>

  </div>
</template>

<style>
#state {
    background-color: blue;
    width: 50px;
    height: 50px;
    display: inline-block;
}
#validate-hightlight {
  color: var(--is-highlight-green);
}
</style>
