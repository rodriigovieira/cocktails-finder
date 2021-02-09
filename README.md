# CocktailFinder

This little app aims to provide an easy way to search for cocktails. You just type the words and they automatically appear at the screen!

It was made using React Native with Typescript, Redux and React-Navigation.

### Installing the project

This guide will assume that you already have React Native configured in your system. If you don't, [please check this link for instructions](https://reactnative.dev/docs/environment-setup).

Also, this project is using yarn. If you don't have it, you can install it by running `npm install -g yarn`.

First, clone this project:

```
git clone https://github.com/rodriigovieira/cocktail-finder
```

Then, go to the project's directory:

```
cd cocktail-finder
```

After that, install the project's dependencies using yarn:

```
yarn
```

If you wish to run it on iOS, install the CocoaPods dependencies before building the app - run `npx pod-install ios`.

Finally, run the project on your desired platform. You could either run `yarn ios` or `yarn android`.

### Libraries

This section aims to give a small introduction to the libraries being used in this project, and explain their benefits.

*Typescript*: provides a type-checking system to the project, avoiding runtime-errors and saving lots of hours on debugging.
*Redux*: provides an easy way to manage the app's state, the side effects of changing it, among many other things. Very useful as the project grows.
*react-native-linear-gradient*: provides an easy way of creating gradients.
*fontawesome*: library with several icons. The package facilitate its use, allowing us to resize and style them the way we see fit.

### Potential issues

At the moment, the list with the cocktails is being rendered using a simple `.map`. This could cause some performance issues if for some reason the list is too big.

If in the future we need to handle a bigger number of items, it's advised to use `<FlatList>` instead of simply rendering them to the screen. This is because `FlatList` contains several performance improvements both on the JS and native side, which gives a much better experience with big lists.
