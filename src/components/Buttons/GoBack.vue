<template>
    <q-btn
        :color="color"
        :flat="flat"
        :round="round"
        :dense="dense"
        :icon="icon"
        data-vue-component-name="GoBack"
        @click="onClick(url)"
    >
        <slot></slot>
    </q-btn>
</template>

<script>
  export default {
    name: 'GoBack',
    component: {
      Button: () => import('src/components/Buttons/Button.vue'),
    },
    props: {
      url: {
        type: [String, Object],
        default: '/',
      },
      color: {
        type: String,
        default: 'primary',
      },
      flat: {
        type: Boolean,
        default: false,
      },
      label: {
        type: String,
        default: 'primary',
      },
      round: {
        type: Boolean,
        default: false,
      },
      dense: {
        type: Boolean,
        default: false,
      },
      icon: {
        type: String,
        default: 'arrow_back',
      },
    },
    methods: {
      onClick(url) {
        devlog.log('PATH', url);
        devlog.log('$route', this.$route);
        if (_.isObject(url)) {
          this.$router.push(url);
        } else if (url && _.isString(url)) {
          this.$router.push(url);
        }
      },
    },
  };
</script>
