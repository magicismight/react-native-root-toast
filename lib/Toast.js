import React, {
    Component,
} from 'react';
import RootSiblings from 'react-native-root-siblings';
import ToastContainer, {positions, durations} from './ToastContainer';


class Toast extends Component {
    static displayName = 'Toast';
    static propTypes = ToastContainer.propTypes;
    static positions = positions;
    static durations = durations;

    static show = (message, options = {position: positions.BOTTOM, duration: durations.SHORT}) => {
        let instance = {destroy: () => {}};
        const onHidden = ()=>{
            options.onHidden && options.onHidden();
            instance.destroy();
        }
        instance = new RootSiblings(<ToastContainer
            {...options}
            onHidden={onHidden}
            visible={true}
        >
            {message}
        </ToastContainer>);
        return instance;
    };

    static hide = toast => {
        if (toast instanceof RootSiblings) {
            toast.destroy();
        } else {
            console.warn(`Toast.hide expected a \`RootSiblings\` instance as argument.\nBut got \`${typeof toast}\` instead.`);
        }
    };

    _toast = null;

    componentDidMount = () => {
        this._toast = new RootSiblings(<ToastContainer
            {...this.props}
            duration={0}
        />);
    };

    componentDidUpdate = prevProps => {
        this._toast.update(<ToastContainer
            {...this.props}
            duration={0}
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
