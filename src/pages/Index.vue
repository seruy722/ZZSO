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
      <div class="row q-gutter-md">
        <q-card
          v-for="(item, index) in news"
          :key="index"
          class="my-card"
          flat
          bordered
        >
          <q-img
            :src="item.path"
          />

          <q-card-section>
            <div class="text-caption">
              {{ item.title }}
            </div>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              flat
              :icon-right="item.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              label="Детальніше"
              @click="item.expanded = !item.expanded"
            />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="item.expanded">
              <q-separator />
              <q-card-section class="text-subitle2 text-justify">
                {{ item.text }}
              </q-card-section>
              <q-separator />
              <q-card-section>
                <q-list separator bordered>
                  <q-item
                    v-for="(elem, i) in item.dopFiles"
                    :key="i"
                    v-ripple
                    clickable
                    @click="downloadFile(elem)"
                  >
                    <q-item-section>
                      {{ elem.title }}
                    </q-item-section>
                    <q-item-section avatar>
                      <q-icon
                        name="file_download"
                        size="sm"
                        color="primary"
                      />
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>
    </section>
    <div class="text-h4 text-bold text-center headers docs_anchor">
      Документація
    </div>
    <q-list
      bordered
      separator
      class="rounded-borders"
    >
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
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="250"
      :offset="[18, 50]"
    >
      <q-btn
        fab
        icon="keyboard_arrow_up"
        color="accent"
      />
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
      news: [
        {
          title: 'Учні 11-х класів у 2020/2021 навчальному році звільняються від проходження ДПА – Верховна Рада ухвалила закон',
          path: 'statics/img/news/1.jpg',
          expanded: false,
          dopFiles: [],
          text: 'Учні, які завершують здобуття повної загальної середньої освіти у 2020/2021 навчальному році, звільняються\n'
            + '              від проходження державної підсумкової атестації. Сьогодні, 13 квітня 2021 року, відповідний закон № 5014\n'
            + '              ухвалила Верховна Рада України.Ініціатива покликана мінімізувати ризики захворювання на COVID-19 під час\n'
            + '              оцінювання результатів навчання учнів, які завершують здобуття повної загальної середньої освіти. Також це\n'
            + '              уможливить отримання ними в установленому законодавством порядку документів про здобуття повної загальної\n'
            + '              середньої освіти.\n'
            + '              Окрім того, законодавчими змінами передбачено, що учні, які завершують здобуття повної загальної середньої\n'
            + '              освіти у 2020/2021 навчальному році, мають право пройти державну підсумкову атестацію, зокрема у формі\n'
            + '              зовнішнього незалежного оцінювання, за власним бажанням.\n'
            + '              Ці законодавчі зміни також було підтримано Президентом України Володимиром Зеленським і визначено як\n'
            + '              невідкладні.\n'
            + '              Водночас усі етапи зовнішнього незалежного оцінювання 2021 року відбудуться у заплановані терміни\n'
            + '              незалежно від рівня епідемічної небезпеки у регіонах:\n'
            + '              • пробне тестування – 24 квітня у Києві, Чернігівській та Миколаївській областях (у решті регіонів\n'
            + '              відбулось 10 квітня),\n'
            + '              • основна сесія ЗНО – з 21 травня до 15 червня,\n'
            + '              • додаткова сесія – з 26 червня до 16 липня.\n'
            + '\n'
            + '              За інформацією Українського центру оцінювання якості освіти, на ЗНО-2021 зареєстровано 389 710 осіб, які\n'
            + '              обрали 1 543 756 тестувань.\n'
            + '              За статистичними показниками реєстрації, 42 580 осіб зареєструвалися для участі в ЗНО з усіх предметів\n'
            + '              лише з метою проходження ДПА (170 269 тестувань). Усього учасниками ЗНО вказано на бажання отримати\n'
            + '              результат ЗНО лише для отримання оцінки за ДПА з 235 363 тестувань, що становить 15,24% від загальної\n'
            + '              кількості тестувань.',
        },
        {
          title: 'Державна служба якості освіти України спільно з Комітетом з фізичного виховання та спорту Міністерства освіти і науки України проводить опитування учнів, вчителів фізичної культури, директорів та батьків з метою вивчення стану фізичної культури в закладах загальної середньої освіти.',
          path: 'statics/img/news/fv.png',
          expanded: false,
          dopFiles: [
            {
              title: 'Додаток',
              path: '/statics/files/general/Опитування супровідний лист.docx',
            },
          ],
          text: 'Управління Державної  служби якості освіти у Житомирській області надсилає покликання на опитування для учнів, батьків, вчителів, директорів та пропонує поширити їх серед керівників закладів загальної середньої освіти. Опитування триває до 4 травня 2021 року.\n'
            + '\tІніційоване всеукраїнське опитування дасть можливість Комітету з фізичного виховання та спорту Міністерства освіти і науки України сформувати план конкретних дій щодо розвитку фізичного виховання у закладах загальної середньої освіти.\n'
            + '\tДякуємо за співпрацю!\n'
            + '\n'
            + 'Додаток на 1 арк. в 1 прим.\n',
        },
      ],
      files: [
        {
          label: 'Загальні',
          files: [
            {
              title: 'Опитування стану фізичної культури в закладах загальної середньої освіти',
              extension: 'docx',
              path: '/statics/files/general/Опитування супровідний лист.docx',
            },
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
            {
              title: 'Інформація про перелік товарів, робіт і послуг, отриманих як благодійна допомога',
              extension: 'docx',
              path: '/statics/files/general/Інформація про перелік товарів, робіт і послуг, отриманих як благодійна допомога.docx',
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
        {
          label: 'Дистанційне навчання',
          files: [
            {
              title: 'Положення про дистанційне навчання',
              extension: 'docx',
              path: '/statics/files/distance/Положення про дистанційне навчання.docx',
            },
            {
              title: 'Поради батькам',
              extension: 'docx',
              path: '/statics/files/distance/Поради батькам.docx',
            },
            {
              title: 'Поради учням',
              extension: 'docx',
              path: '/statics/files/distance/Поради учням.docx',
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
