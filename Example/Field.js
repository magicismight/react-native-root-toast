import React, {
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    Picker,
    TextInput
} from 'react-native';
import Modal from 'react-native-root-modal';

const styles = StyleSheet.create({
    pickerModal: {
        bottom: 0,
        left: 0,
        right: 0
    },
    picker: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#ccc',
        backgroundColor: '#fff'
    },
    hidePicker: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 5
    },
    hidePickerText: {
        fontSize: 12,
        color: '#333'
    },
    field: {
        overflow: 'hidden',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    value: {
        alignItems: 'center',
        width: 200,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        height: 30,
        justifyContent: 'center'
    },
    input: {
        width: 200,
        height: 30,
        textAlign: 'center'
    },
    disabledValue: {
        borderBottomColor: 'transparent'
    },
    disabled: {
        color: '#ccc'
    }
});

class Field extends Component{
    constructor() {
        super(...arguments);
        let keys = this.keys = Object.keys(this.props.options);
        this.state = {
            value: this.props.options[keys[0]],
            text: `Toast.${this.props.name}s.${keys[0]}`,
            picked: keys[0],
            picker: false
        };
    }

    openPicker = () => {
        this.setState({
            picker: true
        });
    };

    closePicker = () => {
        this.setState({
            picker: false
        });
    };

    pickerChange = value => {
        let to = value ? this.props.options[value] : this.state.value;
        this.setState({
            value: to,
            picked: value,
            text: value ? `Toast.${this.props.name}s.${value}` : `Custom ${this.props.name}`
        });
        this.props.onChange(to);
    };

    inputChange = ({nativeEvent: {text}}) => {
        this.setState({
            value: text
        });
        this.props.onChange(+text);
    };

    render(){
        return <View style={styles.field}>
            <TouchableOpacity
                onPress={this.openPicker}
            >
                <View style={styles.value}>
                    <Text>{this.state.text}</Text>
                </View>
            </TouchableOpacity>
            <View style={[styles.value, this.state.picked && styles.disabledValue]}>
                <TextInput
                    style={[styles.input, this.state.picked && styles.disabled]}
                    keyboardType={'numeric'}
                    value={(this.state.value || 0).toString()}
                    onChange={this.inputChange}
                    editable={!this.state.picked}
                />
            </View>
            <Modal
                style={styles.pickerModal}
                visible={this.state.picker}
            >
                <Picker
                    selectedValue={this.state.picked}
                    onValueChange={this.pickerChange}
                    style={styles.picker}
                >
                    {this.keys.map(key => <Picker.Item
                        key={key}
                        label={`Toast.${this.props.name}s.${key}`}
                        value={key}
                    />)}
                    <Picker.Item
                        label={`Custom ${this.props.name}`}
                        value={false}
                    />
                </Picker>
                <TouchableOpacity
                    style={styles.hidePicker}
                    onPress={this.closePicker}
                >
                    <Text style={styles.hidePickerText}>DONE</Text>
                </TouchableOpacity>
            </Modal>
        </View>;
    }
}

export default Field;
