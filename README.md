# "React Native @ Sky" Workshop

Welcome to "React Native @ Sky" workshop repository. Here you'll find a sample project on how to build a greenfield application to target both Android, iOS, and Web with [React Native](https://facebook.github.io/react-native/).

Please note that [Expo](https://expo.io) is used in order to ease the process of both installing external depencies like [Android Studio](https://developer.android.com/studio) and [Xcode](https://apps.apple.com/pt/app/xcode/id497799835?mt=12) and bootstraping the application itself.

## Pre-requisites

**You can skip this part**, by creating an Expo account and downloading its [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) and/or [iOS](https://itunes.com/apps/exponent) application. If you do skip this, please ignore any `yarn avd` command you will see in the remainder of this guide.

If you want to run this project with either an Android emulator or an iOS simulator be sure to install [Android Studio](https://developer.android.com/studio) and/or [Xcode](https://apps.apple.com/pt/app/xcode/id497799835?mt=12).

Also, follow [this](https://developer.android.com/studio/run/managing-avds) guide to create an Android Emulator. Please name it `Base_AVD`.

## Install

```lang=sh
yarn
```

## Run on all platforms

```lang=sh
# Launch Android emulator first if you haven't already
yarn avd
yarn start
```

### Run on web

```lang=sh
yarn web
```

### Run on Android

```lang=sh
# Launch Android emulator first if you haven't already
yarn avd
yarn android
```

### Run on iOS

```lang=sh
yarn ios
```

## Authors

- **[Francisco Gonçalves](https://github.com/franciscocgoncalves)**
- **[João Campinhos](https://github.com/joaocampinhos)**
- **[Ricardo Cacheira](https://github.com/rcacheira)**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
