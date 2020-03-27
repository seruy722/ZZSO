<template>
    <q-radio
        :value="value"
        :val="val"
        :color="color"
        data-vue-component-name="Radio"
        @input="$emit('input', $event)"
    />
</template>

<script>
  export default {
    name: 'Radio',
    props: {
      value: {
        type: [String, Array],
        default: '',
      },
      color: {
        type: String,
        default: '',
      },
      val: {
        type: String,
        default: '',
      },
    },
  };
</script>
