<template>
    <q-field
        label=""
        helper="Helper"
        :error="isError"
        :error-label="viewError()"
        :error-message="viewError()"
    >
        <q-checkbox
            :dark="dark"
            :type="type"
            :label="label"
            :dense="dense"
            :autofocus="autofocus"
            :value="value"
            :error-message="viewError()"
            :error="isError"
            clearable
            clear-icon="close"
            :filled="filled"
            :mask="mask"
            :disable="disable"
            bottom-slots
            data-vue-component="BaseCheckbox"
            @input="inputEvent"
        />
    </q-field>
</template>

<script>
    import ErrorsServerMixin from 'src/mixins/ViewErrors';

    export default {
        name: 'BaseCheckbox',
        mixins: [ErrorsServerMixin],
        props: {
            value: {
                type: Boolean,
                default: false,
            },
            type: {
                type: String,
                default: '',
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
                default: true,
            },
            autofocus: {
                type: Boolean,
                default: false,
            },
            disable: {
                type: Boolean,
                default: false,
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
