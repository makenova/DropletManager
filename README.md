# DropletManager

Android and iOS React Native Application to manage
[Digital Ocean](https://www.digitalocean.com) Droplets.

# Not in active development

I asked myself what features I would like to see in a Mobile app for Digital
Ocean and I couldn't think of anything but metrics, and those aren't exposed
through the API. So I'm putting this on pause until I get some inspiration. Until then, this endeavor is on paws 🐱.

## Dev

Generate a personal access token for authentication in your DO control panel
and make that available as an environment variable, `DO_TOKEN`.

Follow the react-native getting started
[guide](https://facebook.github.io/react-native/docs/getting-started.html) to
set up your environment. Then run the following commands from the root directory

```sh
npm install
npm start
```

In a separate terminal window, run the following to start the iOS simulator and
install the application in it.

```sh
npm run dev:iOS
```

To install the app in an Android Emulator, make sure one is running. You can use
the Emulator available in Android Studio or you can use
[GenyMotion](https://www.genymotion.com), either way, make sure it is listed
when you run `adb devices`. Then run the following command:

```sh
npm run dev:android
```

### Note
This uses a modified version of [@matt-major](https://github.com/matt-major)'s
[do-wrapper](https://github.com/matt-major/do-wrapper) which can be found
[here](https://github.com/makenova/do-wrapper).
The fork is necessary because some of the Node.js core modules are not
available in the React Native environment.

## Bugs

Please report any bugs to: https://github.com/makenova/dropletManager/issues

## License

Licensed under the MIT License: https://opensource.org/licenses/MIT
