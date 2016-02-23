import React, {
    StyleSheet,
    Component,
    View,
    Text,
    PropTypes,
    Animated,
    Dimensions,
    TouchableWithoutFeedback,
    Easing
} from 'react-native';
const TOAST_MAX_WIDTH = 0.8;
const TOAST_DEFAULT_OFFSET = 20;
const TOAST_ANIMATION_DURATION = 200;
const DIMENSION = Dimensions.get('window');
const WINDOW_WIDTH = DIMENSION.width;
const WINDOW_HEIGHT = DIMENSION.height;
const positions = {
    TOP: 20,
    BOTTOM: -20,
    CENTER: 0
};

const durations = {
    LONG: 3500,
    SHORT: 2000
};

let styles = StyleSheet.create({
    defaultStyle: {
        position: 'absolute',
        width: WINDOW_WIDTH,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        padding: 10,
        backgroundColor: '#000',
        opacity: 0.8,
        borderRadius: 5,
        marginHorizontal: WINDOW_WIDTH * ((1 - TOAST_MAX_WIDTH) / 2)
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 4,
            height: 4
        },
        shadowOpacity: 0.8,
        shadowRadius: 6,
        elevation: 10
    },
    bottom: {
        bottom: TOAST_DEFAULT_OFFSET
    },
    top: {
        top: TOAST_DEFAULT_OFFSET
    },
    text: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center'
    }
});

class ToastContainer extends Component {
    static displayName = 'ToastContainer';

    static propTypes = {
        ...View.propTypes,
        duration: PropTypes.number,
        visible: PropTypes.bool,
        animation: PropTypes.bool,
        shadow: PropTypes.bool,
        position: PropTypes.number,
        delay: PropTypes.number,
        hideOnPress: PropTypes.bool
    };

    static defaultProps = {
        visible: false,
        duration: durations.SHORT,
        animation: true,
        shadow: true,
        position: positions.BOTTOM,
        delay: 0,
        hideOnPress: true
    };

    constructor() {
        super(...arguments);
        this.state = {
            visible: this.props.visible,
            opacity: new Animated.Value(0)
        };
    }

    componentDidMount = () => {
        if (this.state.visible) {
            this._show();
        }

    };

    componentWillReceiveProps = nextProps => {
        if (nextProps.visible !== this.props.visible) {
            this.setState({
                visible: nextProps.visible
            });
        }
    };

    componentWillUnmount = () => {
        console.log(111);
    };

    shouldComponentUpdate = (nextProps, nextState) => {
        return this.state.visible !== nextState.visible;
    };

    _animating = false;
    _root = null;
    _timeout = null;

    _show = () => {
        if (!this._animating) {
            clearTimeout(this._timeout);
            this._animating = true;
            this._root.setNativeProps({
                pointerEvents: 'auto'
            });
            Animated.timing(this.state.opacity, {
                toValue: 1,
                duration: TOAST_ANIMATION_DURATION,
                easing: Easing.out(Easing.ease)
            }).start(({finished}) => {
                if (finished) {
                    this._timeout = setTimeout(() => this._hide(),this.props.duration);
                    this._animating = !finished
                }
            });
        }
    };

    _hide = () => {
        if (!this._animating) {
            clearTimeout(this._timeout);
            this._root.setNativeProps({
                pointerEvents: 'none'
            });
            Animated.timing(this.state.opacity, {
                toValue: 0,
                duration: TOAST_ANIMATION_DURATION,
                easing: Easing.in(Easing.ease)
            }).start(({finished}) => {
                if (finished) {
                    this._animating = false;
                }
            });
        }
    };

    render() {
        let offset = this.props.position;
        let position = offset ? {
            [offset < 0 ? 'bottom' : 'top']: Math.abs(offset)
        } : {
            top: 0,
            bottom: 0
        };
        return (this.state.visible || this._animating) ? <View
            style={[
                styles.defaultStyle,
                position
            ]}
            pointerEvents="box-none"
        >
            <TouchableWithoutFeedback
                onPress={this.props.hideOnPress ? this._hide : null}
            >
                <Animated.View
                    style={[styles.container, {
                        opacity: this.state.opacity
                    }]}
                    pointerEvents="none"
                    ref={ele => this._root = ele}
                >
                    <Text style={styles.text}>{this.props.children}</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View> : null;
    }
}

export default ToastContainer;
export {
    positions,
    durations
}

