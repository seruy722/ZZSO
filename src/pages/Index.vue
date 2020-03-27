<template>
  <q-page data-vue-component-name="PageIndex">
    <div class="row justify-between">
      <q-parallax
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      >
        <h3 class="text-white">СИМОНІВСЬКИЙ ЗЗСО І-ІІІ СТУПЕНІВ</h3>
      </q-parallax>

    </div>
    <div class="text-h4 text-bold text-center">
      Документация
    </div>

    <!--    <div-->
    <!--      class="row justify-around"-->
    <!--    >-->
    <!--      <IFrameDocs-->
    <!--        v-for="(item, index) in filesNames"-->
    <!--        :key="index"-->
    <!--        class="q-ma-md"-->
    <!--        :src="`https://view.officeapps.live.com/op/embed.aspx?src=http://symony-school.site/statics/files/${item}&embedded=true`"-->
    <!--        :width="$q.screen.xs ? '100%' : '560px'"-->
    <!--        :height="$q.screen.xs ? '200px' : '350px'"-->
    <!--      />-->
    <!--    </div>-->
    <div class="text-h4 text-bold text-center">
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
        filesNames: ['mon.doc', '11_Статут СИМОНІВСЬКИЙ ЗЗСО  за новим законом про освіту .doc', 'Правила поведінки здобувачів освіти.docx', 'Правила прийому до закладу освіти.docx', 'Територія обслуговування.docx', 'Додаткові освітні послуги.docx', 'Умови доступності ЗЗСО для навчання дітей з особливими потребами.docx', 'Мова освітнього процесу.docx', 'Наявність вакантних посад.docx', 'Структура та органи управління закладу.docx', 'Ліцензований обсяг.docx', 'Матеріально-технічна база.docx', 'Кадровий склад.docx', 'План заходів спрямований на запобігання булінгу.docx'],
      };
    },
  };
</script>

<style lang="stylus" scoped>
  .b_image
    background url("/statics/icons/main/slide_2.png") no-repeat 0 50%
    background-size cover
    height 600px
</style>
