<template>
  <q-layout
    view="hHh lpr fFf"
    style="max-width: 1920px; margin: 0 auto"
  >
    <q-header
      reveal
      elevated
      class="bg-primary text-white"
    >
      <q-toolbar>
        <q-toolbar-title class="row items-center q-pa-md">
          <!--          <q-avatar size="100px" font-size="52px" color="teal" text-color="white" icon="directions"/>-->
          <div
            style="overflow: hidden;font-size: 1em;word-wrap: break-word;white-space: normal;margin:0 auto;">
            СИМОНІВСЬКИЙ ЗЗСО І-ІІІ СТУПЕНІВ ЄМІЛЬЧИНСЬКОЇ СЕЛИЩНОЇ РАДИ ЖИТОМИРСЬКОЇ ОБЛАСТІ
          </div>
        </q-toolbar-title>
      </q-toolbar>
      <div class="bg-white text-black" style="font-size: 20px;">
        <q-list
          padding
          class="rounded-borders row justify-center"
        >
          <ListItem
            v-for="(item, index) in menu"
            :key="index"
            v-ripple
            clickable
            active-class="text-yellow"
            :active="activeMenuItem(item)"
            :to="item.to"
            class="cursor-pointer"
          >
            <ItemSection>
              {{ item.label }}
            </ItemSection>
          </ListItem>
        </q-list>
      </div>
    </q-header>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
  export default {
    components: {
      ListItem: () => import('components/Elements/ListItem.vue'),
      ItemSection: () => import('components/Elements/ItemSection.vue'),
    },
    data() {
      return {
        menu: [
          {
            label: 'Главная',
          },
          {
            label: 'Документация',
          },
          {
            label: 'Галерея',
          },
          {
            label: 'Контакты',
          },
        ],
      };
    },
    methods: {
      activeMenuItem(item) {
        return item.to === this.$route.path;
      },
    },
  };
</script>
