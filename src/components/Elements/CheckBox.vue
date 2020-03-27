<template>
    <q-checkbox
        :value="value"
        :val="val"
        :color="color"
        :label="label"
        data-vue-component-name="CheckBox"
        @input="$emit('input', $event)"
    />
</template>

<script>
  export default {
    name: 'CheckBox',
    props: {
      value: {
        type: [Array, String],
        default: () => [],
      },
      color: {
        type: String,
        default: '',
      },
      val: {
        type: String,
        default: '',
      },
      label: {
        type: String,
        default: '',
      },
    },
  };
</script>
