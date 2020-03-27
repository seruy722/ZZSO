<template>
    <q-table
        class="my-sticky-virtscroll-table"
        virtual-scroll
        table-style="max-height: 800px"
        :rows-per-page-options="[0]"
        :virtual-scroll-sticky-start="20"
        row-key="name"
        :selected.sync="selectedData"
        separator="cell"
        data-vue-component-name="Table"

        :title="title"
        :data="dataTable"
        :columns="columns"
        selection="multiple"
    >
        <template v-slot:body="props">
            <slot name="inner-body" :props="props"></slot>
        </template>
<!--        <template v-slot:body-cell-name="props">-->
<!--            <slot name="inner-body-cell-name" :props="props"></slot>-->
<!--        </template>-->

<!--        <template v-slot:body-cell-actions="props">-->
<!--            <slot name="inner-body-cell-actions" :props="props"></slot>-->
<!--        </template>-->

        <template v-slot:top-selection>
            <slot name="inner-top-selection"></slot>
        </template>

        <template v-slot:top-left>
            <slot name="inner-top-left"></slot>
        </template>

        <template v-slot:top-right>
            <div>записей в таблице: {{ countEntries() }}</div>
        </template>
        <template v-slot:no-data>
            Нет данных
        </template>
    </q-table>
</template>

<script>
    export default {
        name: 'Table',
        props: {
            title: {
                type: String,
                default: '',
            },
            columns: {
                type: Array,
                default: () => [],
            },
            dataTable: {
                type: Array,
                default: () => [],
            },
            selected: {
                type: Array,
                default: () => [],
            },
        },
        computed: {
            selectedData: {
                get: function get() {
                    return this.selected;
                },
                set: function set(val) {
                    this.$emit('update:selected', val);
                },
            },
        },
        methods: {
            countEntries() {
                return _.size(this.dataTable);
            },
        },
    };
</script>

<style lang="sass">
    .my-sticky-virtscroll-table
        /* max height is important */


        .q-table__middle
            max-height: 200px

        .q-table__top,
        .q-table__bottom,
        thead tr:first-child th
            background-color: #fff

        thead tr:first-child th
            position: sticky
            top: 0
            opacity: 1
            z-index: 1
</style>
