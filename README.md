# «SDO»

> Настройка

##### Через консоль заходим в коневую папку проекта
* `$ yarn`
* `$ npm install -g @quasar/cli`
* cd src-cordova
* `$ npm install -g cordova`
* `$ yarn`
* [download](https://developer.android.com/studio/index.html) Android studio
* [install](https://developer.android.com/studio/install.html)  Android studio
* [Configure Android studio](https://quasar.dev/quasar-cli/developing-mobile-apps/preparation#Windows)
* `$ quasar mode add cordova`
* `$ cordova platform add android`
* `$ cordova platform add ios`
* `$ cordova requirements`
* `$ cordova plugin add cordova-plugin-ionic-webview`
* `$ cordova plugin add cordova-plugin-wkwebview-engine`

> Вывод данных в консоль осуществлять через функцию devlog

## Сборка .apk файла для Android (из-под linux).
> [Источник](https://ionicframework.com/docs/v1/guide/publishing.html)

1. открыть файл .bashrc в директории /home/
2. добавить строки: 
	* export ANDROID_HOME=/home/{user}/Android/Sdk
	* export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
	* export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/build-tools/{version}
3. Открыть корневую директорию проекта в терминале
4. `$ npm run build:android`
5. Открыть в терминале папку: trudkrutclient/src-cordova/platforms/android/app/build/outputs/apk/release
	* (В этой папке находится неподписанный файл APK "app-release-unsigned.apk")
6. `$ keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000`
	* Будет предложено задать пароль для хранилища ключей и ответить на ряд вопросов. Сгенерируется файл "my-release-key.keystore"
	* **Полученный файл сохраните в безопасном месте, в противном случае вы не сможете обновлять приложение!**
7. `$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore app-release-unsigned.apk alias_name`
8. `$ zipalign -v 4 app-release-unsigned.apk HelloWorld.apk`
9. полученный файл является финальным релизом и его можно выпустить в магазине приложений Google Play

## Сборка .apk файла для Android (из-под Windows).
* У Cordova есть требование к версии винды. Работает только на **win 8/10**.
    На виртуалке не будет работать виртуальное android устройство.
    
> [Источник](https://ionicframework.com/docs/v1/guide/publishing.html)

1. Добавить в переменную среды `Path` пути утилит keytool, jarsigner, zipalign ([Как это сделать](https://stackoverflow.com/questions/44272416/how-to-add-a-folder-to-path-environment-variable-in-windows-10-with-screensho)).  
	  **Пути по умолчанию:**
    * keytool и jarsigner - C:\Program Files\Java\jdk1.8.0_211\bin
    * zipalign - C:\Users\\{UserName}\AppData\Local\Android\sdk\build-tools\\{version}
2. Открыть корневую директорию проекта в терминале
3. `$ npm run build:android`
4. Открыть в терминале папку: trudkrutclient\src-cordova\platforms\android\app\build\outputs\apk
	 (В этой папке находится неподписанный файл APK "app-release-unsigned.apk")
5. `$ keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000`
   * Будет предложено задать пароль для хранилища ключей и ответить на ряд вопросов. Сгенерируется файл "my-release-key.keystore"
   * **Полученный файл сохраните в безопасном месте, в противном случае вы не сможете обновлять приложение!**
6. `$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore app-release-unsigned.apk alias_name`
7. `$ zipalign -v 4 app-release-unsigned.apk HelloWorld.apk`
8. полученный файл является финальным релизом и его можно выпустить в магазине приложений Google Play

#### Примечание
> Если нужно открыть проект в **Android studio**, то его нужно открывать `src-cordova/platforms/android`
    
> Для успешного запуска эмулятора нужно дополнительно дописать в 
переменные среды > Системные переменные > Path  

    * C:\Users\<user>\AppData\Local\Android\Sdk\emulator  
    * C:\Users\<user>\AppData\Local\Android\Sdk\tools\bin

## Сборка .isp файла для iOS
> Собирать можно только с платформы macOS/Hackintosh

* Открыть /[Название проекта]/src-cordova/platforms/ios/[Название проекта].xcodeproj в Xcode
- Авторизоваться под учетной записью 

    > Xcode => Preferences => Accounts => Add Account => Apple ID *mail@prostoy.ru / пароль взять у Сапрыкиной Насти*
    
* Установить в проекте сертификат разработчика 
 
    > Проект => General => Signing => Team "Prostoy.Ru" LLC
    
* `$ quasar build -m cordova -T ios`
*  Установить параметр 

    > Setting Project => Build Setting => Signing => Release => iOS Developer вместо iOS Distribution
    
* Следовать командам из [статьи](https://medium.com/xcblog/xcodebuild-deploy-ios-app-from-command-line-c6defff0d8b8) или [видео](https://www.youtube.com/watch?v=T54FEVF9QrU)

    > Команды:
    
    * `xcodebuild -workspace ./src-cordova/platforms/ios/[Название проекта].xcworkspace -scheme [Схема] -sdk iphoneos -configuration AppStoreDistribution archive -archivePath [Путь для архива].xcarchive`
    * `xcodebuild -exportArchive -archivePath dist/cordova/ios/archive[Название проекта].xcarchive -exportOptionsPlist src-cordova/platforms/ios/[Название проекта]/[Название проекта]-Info.plist -exportPath [Путь для релиза приложения]`
