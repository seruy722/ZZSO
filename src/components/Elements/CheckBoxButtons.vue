<template>
    <q-option-group
        :value="value"
        :options="options"
        :color="color"
        type="checkbox"
        data-vue-component-name="CheckBoxButtons"
        @input="$emit('input', $event)"
    />
</template>

<script>
  export default {
    name: 'CheckBoxButtons',
    props: {
      value: {
        type: [String, Array],
        default: '',
      },
      color: {
        type: String,
        default: 'primary',
      },
      options: {
        type: Array,
        default: () => [],
      },
    },
  };
</script>
