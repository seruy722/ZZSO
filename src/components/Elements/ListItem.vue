<template>
    <q-item
        :clickable="clickable"
        :active="active"
        :focused="active"
        :to="to"
        tag="label"
        :active-class="activeClass"
        data-vue-component-name="ListItem"
        @click="$emit('listItemClick')"
    >
        <slot></slot>
    </q-item>
</template>

<script>
    export default {
        name: 'ListItem',
        props: {
            clickable: {
                type: Boolean,
                default: false,
            },
            active: {
                type: Boolean,
                default: false,
            },
            to: {
                type: [String, Object],
                default: '',
            },
            activeClass: {
                type: String,
                default: 'text-primary text-bold',
            },
        },
    };
</script>
