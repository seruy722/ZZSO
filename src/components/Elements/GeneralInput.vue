<template>
  <q-input
    data-vue-component-name="GeneralInput"
    :value="value"
    :label="label"
    :rules="rules"
    :type="type"
    :autofocus="autofocus"
    :autogrow="autogrow"
    dense
    lazy-rules
    @input="inputEvent"
  />
</template>

<script>
  export default {
    name: 'GeneralInput',
    props: {
      value: {
        type: [Number, String],
        default: null,
      },
      rules: {
        type: Array,
        default: () => [],
      },
      label: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: 'text',
      },
      autofocus: {
        type: Boolean,
        default: false,
      },
      autogrow: {
        type: Boolean,
        default: false,
      },
      inputRule: {
        type: Function,
        default: () => true,
      },
    },
    methods: {
      inputEvent(val) {
        devlog.log(val);
        if (this.inputRule(val)) {
          this.$emit('input', val);
        } else {
          this.$emit('input', null);
        }
      },
    },
  };
</script>
