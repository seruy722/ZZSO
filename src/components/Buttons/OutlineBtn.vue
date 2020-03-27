<template>
    <q-btn
        :color="color"
        :flat="flat"
        outline
        :label="label"
        :dense="dense"
        :icon="icon"
        data-vue-component-name="Button"
        @click.stop="$emit('outlineBtnClick')"
    >
        <slot name="body"></slot>
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
        default: 'primary',
      },
      round: {
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
    },
  };
</script>
