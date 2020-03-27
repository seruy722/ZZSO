<template>
    <div
        data-vue-component-name="Badge"
    >
        <q-badge
            :color="color"
            :floating="floating"
            :align="align"
            :transparent="transparent"
        >
            {{ value }}
        </q-badge>
    </div>
</template>

<script>
  export default {
    name: 'Badge',
    props: {
      value: {
        type: [String, Number],
        default: 'primary',
      },
      color: {
        type: String,
        default: 'primary',
      },
      align: {
        type: String,
        default: 'top',
      },
      floating: {
        type: Boolean,
        default: false,
      },
      transparent: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>
