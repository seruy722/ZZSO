<template>
  <q-layout
    view="hHh lpr fFf"
    style="max-width: 1920px; margin: 0 auto"
  >
    <q-header
      reveal
      elevated
      class="bg-primary text-white top_anchor"
    >
      <q-toolbar>
        <q-toolbar-title class="row items-center q-pa-md">
          <!--          <q-avatar size="100px" font-size="52px" color="teal" text-color="white" icon="directions"/>-->
          <div
            style="max-width: 500px;overflow: hidden;font-size: 1em;word-wrap: break-word;white-space: normal;margin-left: 50px;">
            СИМОНІВСЬКИЙ ЗЗСО І-ІІІ СТУПЕНІВ ЄМІЛЬЧИНСЬКОЇ СЕЛИЩНОЇ РАДИ ЖИТОМИРСЬКОЇ ОБЛАСТІ
          </div>
        </q-toolbar-title>
      </q-toolbar>
      <div class="bg-white text-black" style="font-size: 20px;">
        <q-list
          padding
          class="rounded-borders row justify-center"
        >
          <q-item
            v-for="({label, to}, index) in menu"
            :key="index"
            v-ripple
            clickable
            class="cursor-pointer"
            @click="scrollToElement(to)"
          >
            <ItemSection>
              {{ label }}
            </ItemSection>
          </q-item>
        </q-list>
      </div>
    </q-header>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
  import { scroll } from 'quasar';

  const { getScrollTarget, setScrollPosition } = scroll;

  export default {
    components: {
      // ListItem: () => import('components/Elements/ListItem.vue'),
      ItemSection: () => import('components/Elements/ItemSection.vue'),
    },
    data() {
      return {
        menu: [
          {
            label: 'Головна',
            to: 'top_anchor',
          },
          {
            label: 'Документація',
            to: 'docs_anchor',
          },
          {
            label: 'Галерея',
            to: 'gallery_anchor',
          },
          {
            label: 'Контакти',
            to: 'contacts_anchor',
          },
        ],
      };
    },
    methods: {
      scrollToElement(className) {
        if (className) {
          const el = document.querySelector(`.${className}`);
          const target = getScrollTarget(el);
          const offset = el.offsetTop;
          const duration = 1000;
          setScrollPosition(target, offset, duration);
        }
      },
      // scrolTo() {
      //   const anchors = document.querySelectorAll('a[href*="#"]');
      //   for (const anchor of anchors) {
      //     anchor.addEventListener('click', (e) => {
      //       e.preventDefault();
      //
      //       const blockID = anchor.getAttribute('href').substr(1);
      //
      //       document.getElementById(blockID).scrollIntoView({
      //         behavior: 'smooth',
      //         block: 'start',
      //       });
      //     });
      //   }
      // },
    },
  };
</script>
