<template>
    <q-popup-edit
        v-model.trim="modelData"
        title="Редактирование"
        buttons
        label-set="OK"
        label-cancel="Отмена"
        data-vue-component-name="PopupEdit"
        @save="$emit('addToSave')"
    >
        <slot>
            <q-input
                v-model.trim="modelData"
                :type="inputType"
                :mask="mask"
                dense
                autofocus
            />
        </slot>
    </q-popup-edit>
</template>

<script>
    export default {
        name: 'PopupEdit',
        props: {
            value: {
                type: [String, Number],
                default: '',
            },
            title: {
                type: String,
                default: 'edit',
            },
            // labelSet: {
            //     type: String,
            //     default: 'save',
            // },
            // labelCancel: {
            //     type: String,
            //     default: 'cancel',
            // },
            inputType: {
                type: String,
                default: 'text',
            },
            mask: {
                type: String,
                default: '',
            },
        },
        computed: {
            modelData: {
                get: function getData() {
                    return this.value;
                },
                set: function setData(newValue) {
                    this.$emit('update:value', newValue);
                },
            },
        },
    };
</script>
