import React, {
    Component,
    View,
    PropTypes
} from 'react-native';
import RootSiblings from 'react-native-root-siblings';
import ToastContainer, {positions, durations} from './ToastContainer';

class Toast extends Component {
    static displayName = 'Toast';
    static propTypes = {
        duration: PropTypes.bool,
        visible: PropTypes.bool,
        animation: PropTypes.bool,
        shadow: PropTypes.bool,
        position: PropTypes.number,
        delay: PropTypes.number,
        hideOnPress: PropTypes.bool
    };

    static positions = positions;
    static durations = durations;

    static show = (message, options = {position: positions.BOTTOM, duration: durations.SHORT}) => {
        return new RootSiblings(<ToastContainer
            {...options}
            visible={true}
        >
            {message}
        </ToastContainer>);
    };

    static hide = toast => {
        if (toast instanceof RootSiblings) {
            toast.destroy();
        } else {
            console.warn(`Toast.hide expected a \`RootSiblings\` instance as argument.\nBut got \`${typeof toast}\` instead.`);
        }
    };

    _toast = null;

    componentWillMount = () => {
        this._toast = new RootSiblings(<ToastContainer
            {...this.props}
        />);
    };

    componentWillReceiveProps = nextProps => {
        this._toast.update(<ToastContainer
            {...nextProps}
        />);
    };

    componentWillUnmount = () => {
        this._toast.destroy();
    };

    render() {
        return null;
    }
}

export {
    RootSiblings as Manager
};
export default Toast;
