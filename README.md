# Karhoo's React Native Networking SDK

## Start with development

You'll use the example project to compile the bridge library, so the working files for your library will stay in the `node_modules/react-native-karhoo-sdk/` folder.

### Get started with development for Android

1. Clone the repo
2. Go to the local folder of the library in your terminal
3. Run `npm pack`
4. Move the created `react-native-karhoo-sdk-x.y.z.tgz` archive to the `sample` folder
5. Run `cd sample` (go to the sample folder in your terminal)
6. Run `npm install` (install the basic react native dependencies). You should see the `node_modules` folder after this completes.
7. Run `npm install react-native-karhoo-sdk-x.y.z.tgz --save`. You should see the folder `node_modules/react-native-karhoo-sdk` after this completes. Also a new dependency should be added to the sample project `package.json` file.
8. Open the `sample/android` project in Android Studio and wait for Gradle to sync. After it completes, you should see your `app` module + a `react-native-karhoo-sdk` module. This is the Module where you can add your code.
9. After you have some working code, copy everything from the `node_modules/react-native-karhoo-sdk` (the code that you work with) to the `android` folder of the root library folder. This step is necessary, because the `node_modules` folder is ignored by the git (as it should be, because it's huge).
10. (Optional) to copy the files from the `node_modules/react-native-karhoo-sdk` to the library's `android` folder automatically, you ca try to use a tool like wml: https://github.com/wix/wml.

### Get started with development for iOS

1. Clone the repo
2. Go to the local folder of the library in your terminal
3. Run `npm pack`
4. Move the created `react-native-karhoo-sdk-x.y.z.tgz` archive to the `sample` folder
5. Run `cd sample` (go to the sample folder in your terminal)
6. Run `npm install` (install the basic react native dependencies). You should see the `node_modules` folder after this completes.
7. Run `npm install react-native-karhoo-sdk-x.y.z.tgz --save`. You should see the folder `node_modules/react-native-karhoo-sdk` after this completes. Also a new dependency should be added to the sample project `package.json` file.
8. Open the `sample/ios` project in Xcode. After it completes, you should see the Karhoo pod under `Pods/Development Pods/react-native-karhoo-sdk`. These are the files of the bridge library where you can add your code.
9. After you have some working code, copy everything from the `node_modules/react-native-karhoo-sdk` (the code that you work with) to the `ios` folder of the root library folder. This step is necessary, because the `node_modules` folder is ignored by the git (as it should be, because it's huge).
10. (Optional) to copy the files from the `node_modules/react-native-karhoo-sdk` to the library's `ios` folder automatically, you ca try to use a tool like wml: https://github.com/wix/wml.
