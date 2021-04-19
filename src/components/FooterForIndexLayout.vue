<template>
  <div
    class="bg-grey-8 text-white"
    data-vue-component-name="FooterForIndexLayout"
  >
    <div class="text-white bg-primary">
      <div class="q-pa-md">
        <q-item-label class="text-h4 text-bold">
          Контакти
        </q-item-label>
        <q-list
          v-for="(item, index) in contacts"
          :key="index"
          padding
          class="rounded-borders"
        >
          <q-item-section>
            <q-item-label>{{ item.label }}</q-item-label>
          </q-item-section>
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
  data() {
    return {
      footer: true,
      contacts: [
        {
          label: '11257, Житомирська обл., Ємільчинський р-н., с. Симони, вул. Першотравнева, б. 15',
        },
        {
          label: 'Телефон: +80 (4149) 766-36',
        },
        {
          label: 'E-mail: symonyschool@ukr.net',
        },
      ],
    };
  },
};
</script>
