<template>
    <div
        data-vue-component-name="ProgressBar"
        class="list__item_round"
    >
        <q-linear-progress
            stripe
            rounded
            style="height: 10px"
            :value="value"
            :color="color"
        />
    </div>
</template>

<script>
  export default {
    name: 'ProgressBar',
    props: {
      color: {
        type: String,
        default: 'secondary',
      },
      value: {
        type: [String, Number],
        default: 0,
      },
    },
  };
</script>
