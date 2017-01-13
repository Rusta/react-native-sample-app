# react-native-sample-app
Playpen for React Native App - POCs etc

## 3rd party plugins

- [@exponent/ex-navigation](https://github.com/exponent/ex-navigation)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

## Run the app

Ensure you have the React Native local environ dependencies installed (e.g. XCode and Android Studio - [link to getting started](https://facebook.github.io/react-native/docs/getting-started.html) )

### iOS

No need to open XCode, just run:

```
$ react-native run-ios
```

### Android

Open android virtual device manager

```
$ android avd
```

Start a simulator from the device manager, then run the below

```
$ react-native run-android
```


## In the beginning

The initial app was created on 4th Jan 2017 following the guidelines on

https://facebook.github.io/react-native/docs/getting-started.html

Also summarised below:

### Pre Reqs

Node and Watchman
```
$ brew install node
$ brew install watchman
```
XCode (for iOS development)

Then install the react-native-cli node package globally
```
$ npm install -g react-native-cli
```

### Initialise The App
```
$ react-native init sampleApp
```

### Run The App
This should compile the initial app and run it in the Simulator
```
$ cd sampleApp
$ react-native run-ios
```
Note: if you see an error stating that the app ‘has not been registered’ then check that no existing terminal windows are running the react native package management stuff
