### react-native-root-toast

-----------------------

#### Features
1. Pure javascript solution.
2. Support both Android and iOS.
3. Lots of custom options for Toast.
4. You can show/hide Toast by calling api or using Component inside render.

### Install

`npm install react-native-root-toast`


### Props

### Usage

There are two different ways to manage a Toast.

1. **Calling api**

```
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

2. Using a Component

```
import Toast from 'react-native-root-toast';



```
