<template>
    <iframe
        :width="width"
        :height="height"
        :src="src"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        data-vue-component-name="IFrame"
    ></iframe>
</template>

<script>
    export default {
        name: 'IFrame',
        props: {
            src: {
                type: String,
                default: '',
            },
            width: {
                type: [String, Number],
                default: '100%',
            },
            height: {
                type: String,
                default: '100%',
            },
        },
    };
</script>
