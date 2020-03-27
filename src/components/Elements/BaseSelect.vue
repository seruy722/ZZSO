<template>
  <q-select
    :filled="filled"
    :dark="dark"
    :label="label"
    :options="options"
    :value="value"
    :error-message="viewError()"
    :error="isError"
    :dense="dense"
    :color="color"
    :no-error-icon="noErrorIcon"
    emit-value
    map-options
    data-vue-component-name="BaseSelect"
    @input="inputEvent"
  />
</template>

<script>
  import ErrorsServerMixin from 'src/mixins/ViewErrors';

  export default {
    name: 'BaseSelect',
    mixins: [ErrorsServerMixin],
    props: {
      // inputData: {
      //   type: Object,
      //   default: () => ({}),
      // },
      filled: {
        type: Boolean,
        default: true,
      },
      value: {
        type: [String, Number],
        default: '',
      },
      options: {
        type: Array,
        default: () => [],
      },
      field: {
        type: String,
        default: '',
      },
      label: {
        type: String,
        default: '',
      },
      color: {
        type: String,
        default: '',
      },
      dense: {
        type: Boolean,
        default: false,
      },
      dark: {
        type: Boolean,
        default: false,
      },
      noErrorIcon: {
        type: Boolean,
        default: true,
      },
      errors: {
        type: Object,
        default: () => ({}),
      },
    },
    methods: {
      inputEvent($event) {
        this.$emit('input', $event);
        this.changeErrors();
      },
    },
  };
</script>
