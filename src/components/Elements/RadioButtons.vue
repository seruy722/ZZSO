<template>
    <q-option-group
        :value="value"
        :options="options"
        :color="color"
        data-vue-component-name="RadioButtons"
        @input="$emit('input', $event)"
    />
</template>

<script>
  export default {
    name: 'RadioButtons',
    props: {
      value: {
        type: [String, Number, Array],
        default: '',
      },
      color: {
        type: String,
        default: 'primary',
      },
      options: {
        type: Array,
        default: () => ([]),
      },
    },
  };
</script>
