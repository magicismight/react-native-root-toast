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
const colors = {
    default: null,
    red: 'red',
    blue: 'blue'
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    content: {
        paddingTop: 40,
        alignItems: 'center'
    },
    button: {
        borderRadius: 3,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: 'green',
        marginBottom: 10
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
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
    },
    code: {
        alignSelf: 'stretch',
        backgroundColor: '#f0f0f0',
        padding: 10,
        height: 200
    },
    codeText: {
        fontSize: 10
    },
    codeTittle: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    },
    value: {
        color: 'blue'
    },
    string: {
        color: 'grey'
    },
    api: {
        fontSize: 12,
        textAlign: 'center',
        marginRight: 10
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
            delay: 0,
            message: messages[~~(messages.length * Math.random())],
            backgroundColor: false,
            shadowColor: false,
            textColor: false
        };
    }

    toast = null;

    show = () => {
        let message = messages[~~(messages.length * Math.random())];
        this.toast && this.toast.destroy();
        this.setState({
            message
        });
        this.toast = Toast.show(message, {
            duration: this.state.duration,
            position: this.state.position,
            shadow: this.state.shadow,
            animation: this.state.animation,
            hideOnPress: this.state.hideOnPress,
            delay: this.state.delay,
            backgroundColor: this.state.backgroundColor ? 'blue' : null,
            shadowColor: this.state.shadowColor ? 'yellow' : null,
            textColor: this.state.textColor ? 'purple' : null,
            onPress: () => {
              alert('You clicked me!')
            },
            onHidden: () => {
                this.toast.destroy();
                this.toast = null;
            }
        });
    };

    getApiCode = () => <Text>
        {`Toast.show(
    `}<Text style={styles.string}>'{this.state.message}'</Text>{`,
    {
        position:`} <Text style={styles.value}>{this.state.position}</Text>{`,
        delay:`} <Text style={styles.value}>{this.state.delay}</Text>{`,
        shadow:`} <Text style={styles.value}>{this.state.shadow.toString()}</Text>{`,
        animation:`} <Text style={styles.value}>{this.state.animation.toString()}</Text>{`,
        hideOnPress:`} <Text style={styles.value}>{this.state.hideOnPress.toString()}</Text>{`,
        backgroundColor:`} <Text style={styles.value}>{this.state.backgroundColor.toString()}</Text>{`,
        shadowColor:`} <Text style={styles.value}>{this.state.shadowColor.toString()}</Text>{`,
        textColor:`} <Text style={styles.value}>{this.state.textColor.toString()}</Text>{`
    }
);`}
    </Text>;

    getSwitchList = () => {
        return ['shadow', 'animation', 'hideOnPress', 'backgroundColor', 'shadowColor', 'textColor'].map(prop =>
            <View style={styles.fieldContainer} key={prop}>
                <Text style={styles.fieldText}>{prop}</Text>
                <Switch
                    onValueChange={value => this.setState({[prop]: value})}
                    value={this.state[prop]}
                />
            </View>);
    };

    render() {
        let code = this.getApiCode();
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.content}
            >
                <View style={styles.prop}>
                    <Text style={styles.title}>duration</Text>
                </View>
                <Field
                    name="duration"
                    options={durations}
                    onChange={duration => this.setState({duration})}
                />
                <View style={styles.prop}>
                    <Text style={styles.title}>position</Text>
                </View>
                <Field
                    name="position"
                    options={positions}
                    onChange={position => this.setState({position})}
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
                {this.getSwitchList()}
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="green"
                    onPress={this.show}
                >
                    <Text style={styles.buttonText}>Show Toast</Text>
                </TouchableHighlight>
                <View style={styles.code}>
                    <Text style={styles.codeTittle}>CODE:</Text>
                    <Text style={styles.codeText}>{code}</Text>
                </View>
            </ScrollView>
        );
    }
}

// You can also show a toast by using a <Toast /> inside render
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


AppRegistry.registerComponent('ReactNativeRootToast', () => ReactNativeRootToast);
