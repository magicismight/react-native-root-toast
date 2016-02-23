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
    TouchableHighlight,
    TouchableOpacity,
    Picker,
    TextInput,
    ScrollView,
    Switch
} from 'react-native';
import Toast from 'react-native-root-toast';
import Field from './Field';

let {
    durations,
    positions
} = Toast;

const DURATIONS_KEYS = Object.keys(durations);
const POSITIONS_KEYS = Object.keys(positions);

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    content: {
        flex: 1,
        paddingTop: 40,
        alignItems: 'center'
    },
    button: {
        borderRadius: 3,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: 'green'
    },
    prop: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'skyblue',
        borderBottomWidth: 1,
        borderBottomColor: '#666'
    },
    fieldContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    fieldText: {
        marginRight: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'skyblue'
    },
    input: {
        width: 100,
        height: 30,
        lineHeight: 30,
        fontWeight: 'bold',
        color: '#333'
    }
});

class ReactNativeRootToast extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            duration: durations[DURATIONS_KEYS[0]],
            position: positions[POSITIONS_KEYS[0]],
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0
        };
    }

    toast = null;

    show = () => {
        this.toast && this.toast.destroy();
        this.toast = Toast.show(messages[~~(messages.length * Math.random())], {
            duration: this.state.duration,
            position: this.state.position,
            shadow: this.state.shadow,
            animation: this.state.animation,
            hideOnPress: this.state.hideOnPress,
            delay: this.state.delay,
            onHidden: () => {
                this.toast.destroy();
                this.toast = null;
            }
        });
    };

    render() {
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.content}
                scrollEnabled={false}
            >
                <View style={styles.prop}>
                    <Text style={styles.title}>duration</Text>
                </View>
                <Field
                    name="durations"
                    options={durations}
                    onChange={duration => this.setState({duration})}
                    unit="ms"
                />
                <View style={styles.prop}>
                    <Text style={styles.title}>position</Text>
                </View>
                <Field
                    name="positions"
                    options={positions}
                    onChange={position => this.setState({position})}
                    unit=""
                />
                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldText}>delay (ms)</Text>
                    <TextInput
                        style={styles.input}
                        onChange={({nativeEvent: {text}}) => this.setState({delay: +text || 0})}
                        value={(this.state.delay || 0).toString()}
                        keyboardType={'decimal-pad'}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldText}>shadow</Text>
                    <Switch
                        onValueChange={value => this.setState({shadow: value})}
                        value={this.state.shadow}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldText}>animation</Text>
                    <Switch
                        onValueChange={value => this.setState({animation: value})}
                        value={this.state.animation}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldText}>hideOnPress</Text>
                    <Switch
                        onValueChange={value => this.setState({hideOnPress: value})}
                        value={this.state.hideOnPress}
                    />
                </View>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="green"
                    onPress={this.show}
                >
                    <Text style={styles.buttonText}>Show Toast</Text>
                </TouchableHighlight>
            </ScrollView>
        );
    }
}

AppRegistry.registerComponent('ReactNativeRootToast', () => ReactNativeRootToast);
