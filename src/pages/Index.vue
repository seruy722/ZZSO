<template>
  <q-page data-vue-component-name="PageIndex">
    <div class="row justify-between">
      <q-parallax
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      >
        <h3 class="text-white">СИМОНІВСЬКИЙ ЗЗСО І-ІІІ СТУПЕНІВ</h3>
      </q-parallax>

    </div>
    <div class="text-h4 text-bold text-center headers docs_anchor">
      Документація
    </div>
    <q-list bordered separator>
      <q-item
        v-for="(item, index) in filesNames"
        :key="index"
        v-ripple
        clickable
        @click="downloadFile(item)"
      >
        <q-item-section>
          <q-item-label>{{ `${index + 1}. ${item.title}` }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon class="q-ml-md" size="sm" name="visibility" color="primary" @click="viewFile(item)">
            <q-tooltip>Перегляд</q-tooltip>
          </q-icon>
        </q-item-section>
      </q-item>
    </q-list>
    <div class="text-h4 text-bold text-center headers gallery_anchor">
      Галерея
    </div>

    <q-carousel
      v-model="slide"
      animated
      arrows
      navigation
      infinite
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg"/>
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg"/>
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg"/>
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg"/>
    </q-carousel>
    <FooterForIndexLayout/>
    <q-page-scroller position="bottom-right" :scroll-offset="250" :offset="[18, 50]">
      <q-btn fab icon="keyboard_arrow_up" color="accent" />
      <q-tooltip>Вгору</q-tooltip>
    </q-page-scroller>
  </q-page>
</template>

<script>
  export default {
    name: 'PageIndex',
    components: {
      // Button: () => import('src/components/Buttons/Button.vue'),
      // IFrameDocs: () => import('src/components/IFrameDocs.vue'),
      FooterForIndexLayout: () => import('components/FooterForIndexLayout.vue'),
    },
    data() {
      return {
        slide: 1,
        filesNames: [
          {
            title: 'Статут СИМОНІВСЬКИЙ ЗЗСО  за новим законом про освіту',
            extension: 'doc',
          }, {
            title: 'Правила поведінки здобувачів освіти',
            extension: 'docx',
          },
          {
            title: 'Правила прийому до закладу освіти',
            extension: 'docx',
          },
          {
            title: 'Територія обслуговування',
            extension: 'docx',
          },
          {
            title: 'Додаткові освітні послуги',
            extension: 'docx',
          },
          {
            title: 'Умови доступності ЗЗСО для навчання дітей з особливими потребами',
            extension: 'docx',
          },
          {
            title: 'Мова освітнього процесу',
            extension: 'docx',
          },
          {
            title: 'Наявність вакантних посад',
            extension: 'docx',
          },
          {
            title: 'Структура та органи управління закладу',
            extension: 'docx',
          },
          {
            title: 'Ліцензований обсяг',
            extension: 'docx',
          },
          {
            title: 'Матеріально-технічна база',
            extension: 'docx',
          },
          {
            title: 'Кадровий склад',
            extension: 'docx',
          },
          {
            title: 'План заходів спрямований на запобігання булінгу',
            extension: 'docx',
          },
          {
            title: 'Порядок надання та розгляду заяв про випадки булінгу',
            extension: 'docx',
          },
          {
            title: 'Порядок реагування на доведені випадки булінгу',
            extension: 'docx',
          },
        ],
      };
    },
    methods: {
      downloadFile({ title, extension }) {
        const link = document.createElement('a');
        link.href = `http://symony-school.site/statics/files/${title}.${extension}`;
        link.setAttribute('download', title);
        link.setAttribute('target', '_blank');
        document.body.appendChild(link);
        link.click();
      },
      viewFile({ title, extension }) {
        const link = document.createElement('a');
        link.href = `https://view.officeapps.live.com/op/embed.aspx?src=http://symony-school.site/statics/files/${title}.${extension}&embedded=true`;
        link.setAttribute('target', '_blank');
        document.body.appendChild(link);
        link.click();
      },
    },
  };
</script>

<style lang="stylus" scoped>
  .b_image
    background url("/statics/icons/main/slide_2.png") no-repeat 0 50%
    background-size cover
    height 600px

  .headers
    color #0066E3
    padding 50px 0
</style>
