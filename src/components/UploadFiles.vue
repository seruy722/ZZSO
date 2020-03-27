<template>
    <q-card
        style="max-width: 350px;"
        data-vue-component-name="UploadFiles"
    >
        <q-card-section class="row bg-primary text-white justify-between">
            <div class="text-h6">Загрузка файлов</div>
            <div class="row" style="position:relative;">
                <Button
                    v-show="fileList.length"
                    flat
                    round
                    color="white"
                    icon="clear_all"
                    @buttonClick="clearAll"
                />
                <Button
                    v-show="!fileList.length"
                    flat
                    round
                    color="white"
                    icon="add_box"
                    @buttonClick="openDialogSelectFiles"
                />
                <input
                    v-show="!fileList.length"
                    ref="uploadInput"
                    :type="type"
                    :accept="accept"
                    :multiple="multiple"
                    style="width:30px;position:absolute;top:10px;opacity:0;"
                    @change="getFilesFromInput"
                />
                <Button
                    v-show="fileList.length && !hideUploadBtn"
                    flat
                    round
                    color="white"
                    icon="cloud_upload"
                    @buttonClick="checkMaxSize(fileList)"
                />
            </div>
        </q-card-section>

        <q-list
            v-show="fileList.length"
            bordered
            separator
            dense
        >
            <ListItem
                v-for="(file, index) in fileList"
                :key="index"
                clickable
            >
                <ItemSection avatar>
                    <Icon
                        v-if="(file.size / 1024) <= (maxSize * 1024)"
                        color="positive"
                        name="done"
                    />
                    <Icon
                        v-else
                        color="negative"
                        name="warning"
                    />
                </ItemSection>

                <ItemSection>
                    <ItemLabel>{{ breakString(file.name) }}</ItemLabel>
                    <ItemLabel caption>{{ file.size | fileSize }}</ItemLabel>
                </ItemSection>

                <ItemSection avatar>
                    <Button
                        v-show="fileList.length"
                        flat
                        round
                        icon="close"
                        @buttonClick="clear"
                    />
                </ItemSection>
            </ListItem>
            <!--            <Separator/>-->
            <!--            <div>{{ errors }}</div>-->
        </q-list>
    </q-card>
</template>

<script>
    import showNotify from 'src/mixins/showNotif';

    export default {
        name: 'UploadFiles',
        components: {
            ListItem: () => import('components/Elements/ListItem.vue'),
            ItemSection: () => import('components/Elements/ItemSection.vue'),
            ItemLabel: () => import('components/Elements/ItemLabel.vue'),
            Button: () => import('src/components/Buttons/Button.vue'),
            Icon: () => import('src/components/Elements/Icon.vue'),
            // Separator: () => import('src/components/Separator.vue'),
        },
        filters: {
            fileSize(val) {
                if (val) {
                    const size = _.round((val / 1024), 1);
                    return `${size > 1024 ? `${_.round(size / 1024, 1)} мб` : `${size} кб`}`;
                }
                return val;
            },
        },
        mixins: [showNotify],
        props: {
            type: {
                type: String,
                default: 'file',
            },
            url: {
                type: String,
                default: '',
            },
            accept: {
                type: String,
                default: '',
            },
            maxSize: {
                type: Number,
                default: 5,
            },
            multiple: {
                type: Boolean,
                default: false,
            },
            uploaded: {
                type: Boolean,
                default: false,
            },
            hideUploadBtn: {
                type: Boolean,
                default: false,
            },
            files: {
                type: Array,
                default: () => [],
            },
        },
        data() {
            return {
                fileList: [],
                progress: 0,
                errors: [],
            };
        },
        watch: {
            fileList(val) {
                this.$emit('update:files', val);
            },
        },
        methods: {
            async uploadFiles(files) {
                if (this.url) {
                    this.$q.loading.show();

                    const dataFile = new FormData();
                    dataFile.append('file', files[0]);

                    if (_.size(files) === 1) {
                        dataFile.append('file', _.first(files));
                    } else if (_.size(files) > 1) {
                        _.forEach(files, (file, index) => {
                            dataFile.append(`file${index}`, file);
                        });
                    }

                    const config = {
                        onUploadProgress: ((progressEvent) => {
                            const { loaded, total } = progressEvent;
                            this.progress = Math.round((loaded * 100) / total);
                        }),
                    };
                    await this.$axios.post(this.url, dataFile, config)
                        .then(({ data }) => {
                            if (_.get(data, 'data.attributes.saveUserAnswersCreativeTask')) {
                                this.showNotif('success', 'Файл успешно загружен.', 'top');
                                this.$emit('update:uploaded', true);
                            }
                            this.$q.loading.hide();
                        })
                        .catch((errors) => {
                            this.$q.loading.hide();
                            this.showNotif('warning', _.get(errors, 'response.data.errors.file'), 'top');
                        });
                }
            },
            openDialogSelectFiles() {
                this.$refs.uploadInput.click();
            },
            getFilesFromInput({ target }) {
                this.errors = [];
                devlog.log('TR', target.files);
                devlog.log('TR_25', this.$refs.uploadInput);
                _.forEach(target.files, (file) => {
                    if (this.checkExt(file)) {
                        this.fileList.push(file);
                    }
                });

                if (!_.isEmpty(this.errors)) {
                    this.showNotif('warning', `Файл ${this.errors} имеет недопустимый формат.`, 'center');
                }
            },
            clearAll() {
                this.fileList = [];
                this.clearInputData();
            },
            clear(index) {
                this.fileList.splice(index, 1);
                if (_.isEmpty(this.fileList)) {
                    this.clearInputData();
                }
            },
            clearInputData() {
                this.$refs.uploadInput.value = '';
            },
            checkMaxSize(files) {
                this.errors = [];
                _.forEach(files, (file) => {
                    devlog.log('TR_FF', file);
                    if ((file.size / 1024) >= (this.maxSize * 1024)) {
                        this.errors.push(file.name);
                    }
                });

                if (_.isEmpty(this.errors)) {
                    this.uploadFiles(files);
                } else {
                    this.showNotif('warning', `Файл ${this.errors} превышает допустимый размер.`, 'center');
                }
            },
            checkExt(file) {
                const fileExt = file.name.split('.').pop();
                devlog.log('fileExt', fileExt === 'docx');
                if (fileExt !== 'doc' && fileExt !== 'docx') {
                    this.errors.push(file.name);
                    return false;
                }

                return true;
            },
          breakString(str) {
            const maxSymbols = 50;
            let newStr = '';
            if (_.size(str) > maxSymbols) {
              _.forEach(_.chunk(_.split(str, ''), maxSymbols), (arr) => {
                newStr += `${_.join(arr, '')} `;
              });
              return newStr;
            }
            return str;
          },
        },
    };
</script>
