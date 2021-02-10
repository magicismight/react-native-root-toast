## react-native-root-toast [![npm version](https://badge.fury.io/js/react-native-root-toast.svg)](http://badge.fury.io/js/react-native-root-toast)

-----------------------

#### Features
1. Pure javascript solution.
2. Support both Android and iOS.
3. Lots of custom options for Toast.
4. You can show/hide Toast by calling api or using Component inside render.

![screen-shoots](./Example/screen-shoots.gif)

### Install

`npm install react-native-root-toast`

> react-native-root-toast >= 2.1.0 only supports react-native >= 0.47.0 , for lower version choose 2.0.0 or below.

In react native >= 0.62, the new LogBox component would impact this component's initialization. To make it work we have to explicitly insert a mount point in your app like this:

```js
// in your entry file like `App.js`

// In theory you don't have to install `react-native-root-siblings` because it's a dep of root-toast
// But you can install it explicitly if your editor complains about it.
import { RootSiblingParent } from 'react-native-root-siblings';

// in your render function 
return (
  <RootSiblingParent>  // <- use RootSiblingParent to wrap your root component
    <App />
  </RootSiblingParent>
);
            
```

You can skip this step if your react-native is lower than 0.62. And actually you can inject RootSiblingParent into anywhere like a react portal, for example if you have multiple rootviews you can choose where to display the root toast.

Read more about [`react-native-root-siblings`](https://github.com/magicismight/react-native-root-siblings) which powers `react-native-root-toast`. 


### Usage

There are two different ways to manage a Toast.

##### **Calling api**

```js
import Toast from 'react-native-root-toast';


// Add a Toast on screen.
let toast = Toast.show('This is a message', {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    onShow: () => {
        // calls on toast\`s appear animation start
    },
    onShown: () => {
        // calls on toast\`s appear animation end.
    },
    onHide: () => {
        // calls on toast\`s hide animation start.
    },
    onHidden: () => {
        // calls on toast\`s hide animation end.
    }
});

// You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
setTimeout(function () {
    Toast.hide(toast);
}, 500);

```

##### **Using a Component**

**NOTE:**
Showing a toast by using a Component inside render, The toast will be automatically disappeared when the `<Toast />` is unmounted.

```js
import React, {Component} from 'react-native';
import Toast from 'react-native-root-toast';

class Example extends Component{
    constructor() {
        super(...arguments);
        this.state = {
            visible: false
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({
            visible: true
        }), 2000); // show toast after 2s

        setTimeout(() => this.setState({
            visible: false
        }), 5000); // hide toast after 5s
    };

    render() {
        return <Toast
            visible={this.state.visible}
            position={50}
            shadow={false}
            animation={false}
            hideOnPress={true}
        >This is a message</Toast>;
    }
}

```

---

## Reference

### Props

Name                | Default                  |  Type    | Description
--------------------|--------------------------|----------|---------------------------
duration            | Toast.durations.SHORT    | Number   | The duration of the toast. (Only for api calling method)
visible             | false                    | Bool     | The visibility of toast. (Only for Toast Component)
position            | Toast.positions.BOTTOM   | Number   | The position of toast showing on screen (A negative number represents the distance from the bottom of screen. A positive number represents the distance form the top of screen. `0` will position the toast to the middle of screen.)
animation           | true                     | Bool     | Should preform an animation on toast appearing or disappearing.
shadow              | true                     | Bool     | Should drop shadow around Toast element.
backgroundColor     | null                     | String   | The background color of the toast.
shadowColor         | null                     | String   | The shadow color of the toast.
textColor           | null                     | String   | The text color of the toast.
delay               | 0                        | Number   | The delay duration before toast start appearing on screen.
hideOnPress         | true                     | Bool     | Should hide toast that appears by pressing on the toast.
opacity             | 0.8                      | Number   | The Toast opacity.
onShow              | null                     | Function | Callback for toast\`s appear animation start
onShown             | null                     | Function | Callback for toast\`s appear animation end
onHide              | null                     | Function | Callback for toast\`s hide animation start
onHidden            | null                     | Function | Callback for toast\`s hide animation end

### Constants

##### Toast.durations

presets of duration of the toast.

1. Toast.durations.SHORT (equals to *2000*)

2. Toast.durations.LONG (equals to *3500*)

##### Toast.positions

presets of position of toast.

1. Toast.positions.TOP (equals to *20*)

2. Toast.positions.BOTTOM (equals to *-20*)

3. Toast.positions.CENTER (equals to *0*)

