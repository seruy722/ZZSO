<template>
    <q-btn-dropdown
        flat
        icon="search"
    >
        <q-input
            :dense="dense"
            :value="value"
            debounce="500"
            placeholder="Поиск"
            autofocus
            clearable
            :input-style="{padding: '0 10px'}"
            clear-icon="close"
            data-vue-component-name="Search"
            @input="$emit('input', $event)"
        />
    </q-btn-dropdown>
</template>

<script>
  export default {
    name: 'Search',
    props: {
      value: {
        type: String,
        default: '',
      },
      dense: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>
