<template>
  <q-page data-vue-component-name="PageIndex">
    <div class="row justify-between">
      <q-parallax
        v-show="!$q.screen.xs"
        src="statics/img/main.jpg"
      >
        <h4 class="text-white">
          СИМОНІВСЬКИЙ ЗЗСО І-ІІІ СТУПЕНІВ
        </h4>
      </q-parallax>

    </div>
    <section class="q-px-md top_news">
      <div class="text-h4 text-bold text-center headers">
        Новини
      </div>
      <q-card class="my-card" flat bordered>
        <q-img
          src="statics/img/news/1.jpg"
        />

        <q-card-section>
          <div class="text-caption">
            Учні 11-х класів у 2020/2021 навчальному році звільняються від проходження ДПА – Верховна Рада ухвалила
            закон
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            flat
            :icon-right="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            label="Детальніше"
            @click="expanded = !expanded"
          />
        </q-card-actions>

        <q-slide-transition>
          <div v-show="expanded">
            <q-separator />
            <q-card-section class="text-subitle2 text-justify">
              Учні, які завершують здобуття повної загальної середньої освіти у 2020/2021 навчальному році, звільняються
              від проходження державної підсумкової атестації. Сьогодні, 13 квітня 2021 року, відповідний закон № 5014
              ухвалила Верховна Рада України.Ініціатива покликана мінімізувати ризики захворювання на COVID-19 під час
              оцінювання результатів навчання учнів, які завершують здобуття повної загальної середньої освіти. Також це
              уможливить отримання ними в установленому законодавством порядку документів про здобуття повної загальної
              середньої освіти.
              Окрім того, законодавчими змінами передбачено, що учні, які завершують здобуття повної загальної середньої
              освіти у 2020/2021 навчальному році, мають право пройти державну підсумкову атестацію, зокрема у формі
              зовнішнього незалежного оцінювання, за власним бажанням.
              Ці законодавчі зміни також було підтримано Президентом України Володимиром Зеленським і визначено як
              невідкладні.
              Водночас усі етапи зовнішнього незалежного оцінювання 2021 року відбудуться у заплановані терміни
              незалежно від рівня епідемічної небезпеки у регіонах:
              • пробне тестування – 24 квітня у Києві, Чернігівській та Миколаївській областях (у решті регіонів
              відбулось 10 квітня),
              • основна сесія ЗНО – з 21 травня до 15 червня,
              • додаткова сесія – з 26 червня до 16 липня.

              За інформацією Українського центру оцінювання якості освіти, на ЗНО-2021 зареєстровано 389 710 осіб, які
              обрали 1 543 756 тестувань.
              За статистичними показниками реєстрації, 42 580 осіб зареєструвалися для участі в ЗНО з усіх предметів
              лише з метою проходження ДПА (170 269 тестувань). Усього учасниками ЗНО вказано на бажання отримати
              результат ЗНО лише для отримання оцінки за ДПА з 235 363 тестувань, що становить 15,24% від загальної
              кількості тестувань.
            </q-card-section>
          </div>
        </q-slide-transition>
      </q-card>
    </section>
    <div class="text-h4 text-bold text-center headers docs_anchor">
      Документація
    </div>
    <q-list bordered separator class="rounded-borders">
      <q-expansion-item
        v-for="(file, i) in files"
        :key="i"
        switch-toggle-side
        expand-separator
        icon="list"
        :label="file.label"
      >
        <q-list
          bordered
          separator
        >
          <q-item
            v-for="(item, index) in file.files"
            :key="index"
            v-ripple
            clickable
            @click="downloadFile(item)"
          >
            <q-item-section>
              <q-item-label>{{ `${index + 1}. ${item.title}` }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon
                v-if="item.extension !== 'pdf'"
                class="q-ml-md"
                size="sm"
                name="visibility"
                color="primary"
                @click.stop="viewFile(item)"
              >
                <q-tooltip>Перегляд</q-tooltip>
              </q-icon>
            </q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>
    </q-list>
    <div class="text-h4 text-bold text-center headers gallery_anchor">
      Галерея
    </div>
    <div class="row wrap">
      <q-carousel
        v-model="slider1"
        animated
        arrows
        infinite
        swipeable
        :style="`${$q.screen.xs ? 'width: 100%': 'width: 45%'};margin: 20px auto`"
      >
        <q-carousel-slide
          v-for="(foto, index) in 6"
          :key="index"
          :name="index + 1"
          :img-src="`statics/img/school/${index+1}.jpg`"
        />
      </q-carousel>
      <q-carousel
        v-model="slider2"
        arrows
        infinite
        swipeable
        :style="`${$q.screen.xs ? 'width: 100%': 'width: 45%'};margin: 20px auto`"
      >
        <q-carousel-slide
          v-for="(foto, index) in 17"
          :key="index"
          :name="index + 1"
          :img-src="`statics/img/${index+1}.jpg`"
        />
      </q-carousel>
    </div>

    <FooterForIndexLayout />
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
    FooterForIndexLayout: () => import('components/FooterForIndexLayout.vue'),
  },
  data() {
    return {
      expanded: false,
      slider1: 1,
      slider2: 1,
      fotoNames: ['main.jpg'],
      files: [
        {
          label: 'Загальні',
          files: [
            {
              title: 'Ліцензія на продовження освітньої діяльності',
              extension: 'pdf',
              path: '/statics/files/general/Ліцензія на продовження освітньої діяльності.pdf',
            },
            {
              title: 'Статут СИМОНІВСЬКИЙ ЗЗСО  за новим законом про освіту',
              extension: 'doc',
              path: '/statics/files/general/Статут СИМОНІВСЬКИЙ ЗЗСО  за новим законом про освіту.doc',
            },
            {
              title: 'Правила поведінки здобувачів освіти',
              extension: 'docx',
              path: '/statics/files/general/Правила поведінки здобувачів освіти.docx',
            },
            {
              title: 'Правила прийому до закладу освіти',
              extension: 'docx',
              path: '/statics/files/general/Правила прийому до закладу освіти.docx',
            },
            {
              title: 'Територія обслуговування',
              extension: 'docx',
              path: '/statics/files/general/Територія обслуговування.docx',
            },
            {
              title: 'Додаткові освітні послуги',
              extension: 'docx',
              path: '/statics/files/general/Додаткові освітні послуги.docx',
            },
            {
              title: 'Умови доступності ЗЗСО для навчання дітей з особливими потребами',
              extension: 'docx',
              path: '/statics/files/general/Умови доступності ЗЗСО для навчання дітей з особливими потребами.docx',
            },
            {
              title: 'Мова освітнього процесу',
              extension: 'docx',
              path: '/statics/files/general/Мова освітнього процесу.docx',
            },
            {
              title: 'Наявність вакантних посад',
              extension: 'docx',
              path: '/statics/files/general/Наявність вакантних посад.docx',
            },
            {
              title: 'Структура та органи управління закладу',
              extension: 'docx',
              path: '/statics/files/general/Структура та органи управління закладу.docx',
            },
            {
              title: 'Ліцензований обсяг',
              extension: 'docx',
              path: '/statics/files/general/Ліцензований обсяг.docx',
            },
            {
              title: 'Матеріально-технічна база',
              extension: 'docx',
              path: '/statics/files/general/Матеріально-технічна база.docx',
            },
            {
              title: 'Кадровий склад',
              extension: 'docx',
              path: '/statics/files/general/Кадровий склад.docx',
            },
            {
              title: 'План заходів спрямований на запобігання булінгу',
              extension: 'docx',
              path: '/statics/files/general/План заходів спрямований на запобігання булінгу.docx',
            },
            {
              title: 'Порядок надання та розгляду заяв про випадки булінгу',
              extension: 'docx',
              path: '/statics/files/general/Порядок надання та розгляду заяв про випадки булінгу.docx',
            },
            {
              title: 'Порядок реагування на доведені випадки булінгу',
              extension: 'docx',
              path: '/statics/files/general/Порядок реагування на доведені випадки булінгу.docx',
            },
            {
              title: 'Освітня програма',
              extension: 'docx',
              path: '/statics/files/general/Освітня програма.docx',
            },
          ],
        },
        {
          label: '2021 рік',
          files: [
            // {
            //   title: 'Звіт',
            //   extension: 'docx',
            //   path: '/statics/files/2021/Звіт.docx',
            // },
            {
              title: 'Кошторис',
              extension: 'pdf',
              path: '/statics/files/2021/Кошторис.pdf',
            },
          ],
        },
        {
          label: '2020 рік',
          files: [
            {
              title: 'Звіт',
              extension: 'docx',
              path: '/statics/files/2020/Звіт.docx',
            },
            {
              title: 'Кошторис',
              extension: 'pdf',
              path: '/statics/files/2020/Кошторис.pdf',
            },
          ],
        },
      ],
    };
  },
  methods: {
    downloadFile({ title, path }) {
      const link = document.createElement('a');
      link.href = `https://symony-school.site${path}`;
      link.setAttribute('download', title);
      link.setAttribute('target', '_blank');
      document.body.appendChild(link);
      link.click();
    },
    viewFile({ path }) {
      const link = document.createElement('a');
      link.href = `https://view.officeapps.live.com/op/embed.aspx?src=http://symony-school.site${path}&embedded=true`;
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

.my-card
  width 100%
  max-width 350px
</style>
