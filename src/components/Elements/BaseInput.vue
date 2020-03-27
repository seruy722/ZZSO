<template>
    <q-input
        :dark="dark"
        :type="type"
        :label="label"
        :dense="dense"
        :autofocus="autofocus"
        :value="value"
        :error-message="viewError()"
        :error="isError"
        :no-error-icon="noErrorIcon"
        clearable
        clear-icon="cancel"
        :color="color"
        :filled="filled"
        :disable="disable"
        :mask="mask"
        bottom-slots
        data-vue-component="BaseInput"
        @input="inputEvent"
        @keyup="$emit('onKeyUp', $event)"
    >
        <template v-slot:append>
            <slot name="append"></slot>
        </template>

        <template v-slot:prepend>
            <slot name="prepend"></slot>
        </template>
    </q-input>
</template>

<script>
  import ErrorsServerMixin from 'src/mixins/ViewErrors';

  export default {
    name: 'BaseInput',
    mixins: [ErrorsServerMixin],
    props: {
      value: {
        type: [String, Number],
        default: '',
      },
      type: {
        type: String,
        default: '',
      },
      color: {
        type: String,
        default: 'primary',
      },
      field: {
        type: String,
        default: '',
      },
      mask: {
        type: String,
        default: '',
      },
      label: {
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
      filled: {
        type: Boolean,
        default: false,
      },
      disable: {
        type: Boolean,
        default: false,
      },
      autofocus: {
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
    watch: {
      value(val) {
        if (val) {
          this.changeErrors();
        }
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
