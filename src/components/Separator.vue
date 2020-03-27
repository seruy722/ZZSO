<template>
    <q-separator
        data-vue-component-name="Separator"
        :inset="inset"
        :color="color"
    />
</template>

<script>
  export default {
    name: 'Separator',
    props: {
      inset: {
        type: [Boolean, String],
        default: false,
      },
      color: {
        type: String,
        default: '',
      },
    },
  };
</script>
