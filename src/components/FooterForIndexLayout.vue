<template>
  <div
    class="bg-grey-8 text-white"
    data-vue-component-name="FooterForIndexLayout"
  >
    <div class="text-white bg-primary">
      <div>
        <q-list
          padding
          dense
          class="rounded-borders"
        >
          <ItemLabel class="text-h4 q-ml-md q-mb-sm text-bold">Контакти</ItemLabel>
          <ListItem
            v-for="(item, index) in contacts"
            :key="index"
          >
            <ItemSection>
              <ItemLabel>{{ item.label }}</ItemLabel>
            </ItemSection>
          </ListItem>
        </q-list>
      </div>

      <div class="bg-accent text-center row justify-center contacts_anchor">
        <div
          style="width: 400px; font-size: 16px; padding: 20px 0;"
        >
          © 2020 Всі права захищені
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FooterForIndexLayout',
    components: {
      ListItem: () => import('components/Elements/ListItem.vue'),
      ItemSection: () => import('components/Elements/ItemSection.vue'),
      ItemLabel: () => import('components/Elements/ItemLabel.vue'),
    },
    data() {
      return {
        footer: true,
        contacts: [
          {
            label: '11257, Житомирська обл., Ємільчинський р-н., с. Симони, вул. Першотравнева, б. 15',
          },
          {
            label: 'Телефон: +0 (000) 000-00-00',
          },
          {
            label: 'E-mail: symonyschool@ukr.net',
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
