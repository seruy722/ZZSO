<template>
    <q-linear-progress
        data-vue-component-name="LinearProgress"
        :value="value"
        style="height: 8px"
        class="q-mt-md"
        :color="color"
        rounded
    />
</template>

<script>
  export default {
    name: 'LinearProgress',
    props: {
      value: {
        type: Array,
        default: () => [],
      },
      color: {
        type: String,
        default: 'secondary',
      },
    },
  };
</script>
