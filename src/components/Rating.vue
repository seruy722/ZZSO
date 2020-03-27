<template>
  <q-rating
    :value="value"
    size="3.5em"
    color="info"
    icon="stars"
    :max="4"
    icon-selected="star"
    ata-vue-component-name="Rating"
    @input="$emit('input', $event)"
  />
</template>

<script>
  export default {
    name: 'Rating',
    props: {
      value: {
        type: [String, Number],
        default: 0,
      },
    },
  };
</script>
