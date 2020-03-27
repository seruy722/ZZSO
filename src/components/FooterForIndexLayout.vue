<template>
    <div
        class="bg-grey-8 text-white"
        data-vue-component-name="FooterForIndexLayout"
    >
        <div class="text-white bg-primary">
            <div class="row justify-around q-py-lg">
                <div>
                    <q-list
                        padding
                        dense
                        class="rounded-borders"
                    >
                        <ItemLabel class="text-h6 q-ml-md q-mb-sm">Быстрые ссылки</ItemLabel>
                        <ListItem
                            v-for="(item, index) in quickLinks"
                            :key="index"
                            v-ripple
                            clickable
                            active-class="text-white"
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
                <div>
                    <q-list
                        padding
                        dense
                        class="rounded-borders"
                    >
                        <ItemLabel class="text-h6 q-ml-md q-mb-sm">Контакты</ItemLabel>
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
            </div>

            <div class="bg-accent text-center row justify-center">
                <div
                    style="width: 400px; font-size: 16px; padding: 20px 0;"
                >
                    © 2020 Все права защищены
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
                quickLinks: [
                    {
                        label: 'Главная',
                        to: '/',
                    },
                    {
                        label: 'Семинар',
                    },
                    {
                        label: 'Лицензионное соглашение',
                    },
                    {
                        label: 'Обратная связь',
                    },
                ],
              contacts: [
                {
                  label: '11257, с. Симони, ул. Першотравнева, б. 15',
                },
                {
                  label: 'Телефон: +7(499)653-99-36',
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
