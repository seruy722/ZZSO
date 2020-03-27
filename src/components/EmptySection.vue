<template>
    <div
        data-vue-component-name="EmptySection"
    >
        <slot>
            <div
                style="min-height: 300px;"
                class="flex justify-center items-center"
            >
                <q-spinner-dots
                    v-show="show"
                    color="primary"
                    size="40px"
                />

                <img
                    v-show="!show"
                    alt="EmptySection"
                    src="~assets/sad.svg"
                    style="width:60vw;max-width:150px;"
                >
            </div>
        </slot>
    </div>
</template>

<script>
    export default {
        name: 'EmptySection',
        data: () => ({
            show: true,
        }),
        created() {
            this.showBg();
        },
        methods: {
            showBg() {
                setTimeout(() => {
                    this.show = false;
                }, 5000);
            },
        },
    };
</script>
