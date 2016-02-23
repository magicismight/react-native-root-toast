/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import Toast from 'react-native-root-toast';

let {
    durations,
    positions
} = Toast;

const buttons = [
    {
        value: {
            duration: durations.LONG,
            position: positions.TOP
        },
        text: {
            duration: 'long',
            position: 'top'
        }
    },
    {
        value: {
            duration: durations.LONG,
            position: positions.CENTER
        },
        text: {
            duration: 'long',
            position: 'center'
        }
    },
    {
        value: {
            duration: durations.LONG,
            position: positions.BOTTOM
        },
        text: {
            duration: 'long',
            position: 'bottom'
        }
    }
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    button: {
        borderRadius: 5,
        padding: 3
    }
});

const messages = [
    'Mr. and Mrs. Dursley, of number four Privet Drive, were proud to say that they were perfectly normal, thank you very much.',
    '“I am not worried, Harry,” said Dumbledore, his voice a little stronger despite the freezing water. “I am with you.”',
    'You’re a wizard, Harry.',
    'But you know, happiness can be found even in the darkest of times, if one only remembers to turn on the light.',
    'Ah, music,” he said, wiping his eyes. “A magic beyond all we do here!”',
    'I am what I am, an’ I’m not ashamed. ‘Never be ashamed,’ my ol’ dad used ter say, ‘there’s some who’ll hold it against you, but they’re not worth botherin’ with.',
    'Never trust anything that can think for itself if you can’t see where it keeps its brain.',
    'There are some things you can’t share without ending up liking each other, and knocking out a twelve-foot mountain troll is one of them.',
    'It’s wingardium leviOsa, not leviosAH.',
    'There is no need to call me Sir, Professor.',
    '’I’m not going to be murdered,’ Harry said out loud.‘That’s the spirit, dear,’ said his mirror sleepily.',
    'You sort of start thinking anything’s possible if you’ve got enough nerve.',
    'It is our choices, Harry, that show what we truly are, far more than our abilities.',
    'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.',
    'Just because you have the emotional range of a teaspoon doesn’t mean we all have.',
    '‘He is dead!’ Narcissa Malfoy called to the watchers.',
    'Really Hagrid, if you are holding out for universal popularity, I’m afraid you will be in this cabin for a very long time',
    'Chaos reigned.',
    'Give her hell from us, Peeves!',
    'Until the very end.',
    'Oculus Reparo!',
    '“After all this time?”“Always,” said Snape.'
];

class ReactNativeRootToast extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            duration: buttons[0].value.duration,
            position: buttons[0].value.position
        };
    }

    show = (duration, position) => {
        Toast.show(messages[~~(messages.length * Math.random())], {
            duration,
            position
        });
    };

    render() {
        return (
            <View style={styles.container}>
                {buttons.map((button, i) => <TouchableHighlight
                    key={i}
                    style={styles.button}
                    underlayColor="rgba(0, 0, 0, 0.2)"
                    onPress={() => this.show(button.value.duration, button.value.position)}
                >
                    <Text>
                        Show {button.text.position} toast with {button.text.duration} duration
                    </Text>
                </TouchableHighlight>)}
            </View>
        );
    }
}

AppRegistry.registerComponent('ReactNativeRootToast', () => ReactNativeRootToast);
