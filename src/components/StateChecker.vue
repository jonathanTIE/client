<script>
export default {
  name: 'HomeLink',
  props: ['otherValue'],
};
</script>

<template>
  <div>
    <div id="state"></div>
    <button>recheck</button>
    <button>{{ otherValue }}</button>
  </div>
</template>

<style>
#state {
    background-color: blue;
    width: 50px;
    height: 50px;
    display: inline-block;
}
</style>
