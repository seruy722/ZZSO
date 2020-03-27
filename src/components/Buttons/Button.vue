<template>
    <q-btn
        :color="color"
        :flat="flat"
        :round="round"
        :dense="dense"
        :icon="icon"
        :label="label"
        :to="to"
        :unelevated="unelevated"
        data-vue-component-name="Button"
        @click="$emit('buttonClick')"
    >
        <slot></slot>
    </q-btn>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      color: {
        type: String,
        default: 'primary',
      },
      flat: {
        type: Boolean,
        default: false,
      },
      label: {
        type: String,
        default: '',
      },
      round: {
        type: Boolean,
        default: false,
      },
      unelevated: {
        type: Boolean,
        default: false,
      },
      dense: {
        type: Boolean,
        default: false,
      },
      icon: {
        type: String,
        default: '',
      },
      to: {
        type: [String, Object],
        default: '',
      },
    },
  };
</script>
