<template>
    <q-dialog
        v-model="modelData"
        :persistent="persistent"
        data-vue-component-name="Dialog"
    >
        <q-card style="width: 100%; max-width: 1000px;">
            <q-card-section class="row justify-between bg-primary text-white items-center">
                <div class="text-h6">
                    {{ title }}
                </div>

                <div>
                    <Button
                        icon="close"
                        color="white"
                        flat
                        round
                        :dense="$q.screen.xs || $q.screen.sm"
                        @buttonClick="modelData = false"/>
                </div>
            </q-card-section>

            <q-card-section class="q-ma-xs">
                <slot name="body"></slot>
            </q-card-section>

            <Separator/>

            <q-card-actions>
                <slot name="actions"></slot>
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script>
    export default {
        name: 'Dialog',
        components: {
            Button: () => import('src/components/Buttons/Button.vue'),
            Separator: () => import('src/components/Separator.vue'),
        },
        props: {
            dialog: {
                type: Boolean,
                default: false,
            },
            title: {
                type: String,
                default: 'Dialog',
            },
            persistent: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            modelData: {
                get: function getValue() {
                    return this.dialog;
                },
                set: function setValue(newValue) {
                    this.$emit('update:dialog', newValue);
                },
            },
        },
    };
</script>
