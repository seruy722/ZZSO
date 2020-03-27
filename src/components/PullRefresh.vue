<template>
    <q-pull-to-refresh
        data-vue-component-name="PullRefresh"
        @refresh="refresh"
    >
        <slot></slot>
    </q-pull-to-refresh>
</template>

<script>
    export default {
        name: 'PullRefresh',
        methods: {
            refresh(done) {
                setTimeout(() => {
                    done();
                }, 2000);
            },
        },
    };
</script>
