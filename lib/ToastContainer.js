import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    Text,
    Animated,
    Dimensions,
    Pressable,
    Easing,
    Keyboard,
    SafeAreaView,
    TouchableWithoutFeedback
} from 'react-native';
import { ViewPropTypes, TextPropTypes } from 'deprecated-react-native-prop-types';
const TOAST_MAX_WIDTH = 0.8;
const TOAST_ANIMATION_DURATION = 200;

const positions = {
    TOP: 20,
    BOTTOM: -20,
    CENTER: 0
};

const durations = {
    LONG: 3500,
    SHORT: 2000
};

const styles = StyleSheet.create({
    defaultStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerStyle: {
        padding: 10,
        backgroundColor: '#000',
        opacity: 0.8,
        borderRadius: 5
    },
    shadowStyle: {
        shadowColor: '#000',
        shadowOffset: {
            width: 4,
            height: 4
        },
        shadowOpacity: 0.8,
        shadowRadius: 6,
        elevation: 10
    },
    textStyle: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center'
    }
});

const Touchable = Pressable || TouchableWithoutFeedback;
const Wrapper = SafeAreaView || View;
class ToastContainer extends Component {
    static displayName = 'ToastContainer';

    static propTypes = {
        ...ViewPropTypes,
        containerStyle: ViewPropTypes.style,
        duration: PropTypes.number,
        visible: PropTypes.bool,
        position: PropTypes.number,
        animation: PropTypes.bool,
        shadow: PropTypes.bool,
        keyboardAvoiding: PropTypes.bool,
        backgroundColor: PropTypes.string,
        opacity: PropTypes.number,
        shadowColor: PropTypes.string,
        textColor: PropTypes.string,
        textStyle: TextPropTypes.style,
        delay: PropTypes.number,
        hideOnPress: PropTypes.bool,
        onPress: PropTypes.func,
        onHide: PropTypes.func,
        onHidden: PropTypes.func,
        onShow: PropTypes.func,
        onShown: PropTypes.func,
        accessible: PropTypes.bool,
        accessibilityLabel: PropTypes.string,
        accessibilityHint: PropTypes.string,
        accessibilityRole: PropTypes.string
    };

    static defaultProps = {
        visible: false,
        duration: durations.SHORT,
        animation: true,
        shadow: true,
        position: positions.BOTTOM,
        opacity: 0.8,
        delay: 0,
        hideOnPress: true,
        keyboardAvoiding: true,
        accessible: true,
        accessibilityLabel: undefined,
        accessibilityHint: undefined,
        accessibilityRole: "alert"
    };

    constructor() {
        super(...arguments);
        const window = Dimensions.get('window');
        this.state = {
            visible: this.props.visible,
            opacity: new Animated.Value(0),
            windowWidth: window.width,
            windowHeight: window.height,
            keyboardScreenY: window.height
        };
    }

    componentDidMount = () => {
        this.dimensionListener = Dimensions.addEventListener('change', this._windowChanged);
        if (this.props.keyboardAvoiding) {
            this.keyboardListener = Keyboard.addListener('keyboardDidChangeFrame', this._keyboardDidChangeFrame);
        }
        if (this.state.visible) {
            this._showTimeout = setTimeout(() => this._show(), this.props.delay);
        }
    };

    componentDidUpdate = prevProps => {
        if (this.props.visible !== prevProps.visible) {
            if (this.props.visible) {
                clearTimeout(this._showTimeout);
                clearTimeout(this._hideTimeout);
                this._showTimeout = setTimeout(() => this._show(), this.props.delay);
            } else {
                this._hide();
            }

            this.setState({
                visible: this.props.visible
            });
        }
    };

    componentWillUnmount = () => {
        this._hide();
        this.dimensionListener?.remove();
        this.keyboardListener?.remove();
    };

    _animating = false;
    _root = null;
    _hideTimeout = null;
    _showTimeout = null;
    _keyboardHeight = 0;

    _windowChanged = ({ window }) => {
        this.setState({
            windowWidth: window.width,
            windowHeight: window.height
        })
    };

    _keyboardDidChangeFrame = ({ endCoordinates }) => {
        this.setState({
            keyboardScreenY: endCoordinates.screenY
        })
    };

    _show = () => {
        clearTimeout(this._showTimeout);
        if (!this._animating) {
            clearTimeout(this._hideTimeout);
            this._animating = true;
            this._root.setNativeProps({
                pointerEvents: 'auto'
            });
            this.props.onShow && this.props.onShow(this.props.siblingManager);
            Animated.timing(this.state.opacity, {
                toValue: this.props.opacity,
                duration: this.props.animation ? TOAST_ANIMATION_DURATION : 0,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true
            }).start(({finished}) => {
                if (finished) {
                    this._animating = !finished;
                    this.props.onShown && this.props.onShown(this.props.siblingManager);
                    if (this.props.duration > 0) {
                        this._hideTimeout = setTimeout(() => this._hide(), this.props.duration);
                    }
                }
            });
        }
    };

    _hide = () => {
        clearTimeout(this._showTimeout);
        clearTimeout(this._hideTimeout);
        if (!this._animating) {
            if (this._root) {
                this._root.setNativeProps({
                    pointerEvents: 'none'
                });
            }

            if (this.props.onHide) {
                this.props.onHide(this.props.siblingManager);
            }

            Animated.timing(this.state.opacity, {
                toValue: 0,
                duration: this.props.animation ? TOAST_ANIMATION_DURATION : 0,
                easing: Easing.in(Easing.ease),
                useNativeDriver: true
            }).start(({finished}) => {
                if (finished) {
                    this._animating = false;
                    this.props.onHidden && this.props.onHidden(this.props.siblingManager);
                }
            });
        }
    };

    render() {
        let {props} =  this;
        const { windowWidth } = this.state;
        let offset = props.position;

        const { windowHeight, keyboardScreenY } = this.state;
        const keyboardHeight = Math.max(windowHeight - keyboardScreenY, 0);
        let position = offset ? {
            [offset < 0 ? 'bottom' : 'top']: offset < 0 ? (keyboardHeight - offset) : offset
        } : {
            top: 0,
            bottom: keyboardHeight
        };

        return (this.state.visible || this._animating) ? <Wrapper
            style={[
                styles.defaultStyle,
                position
            ]}
            pointerEvents="box-none"
            accessible={this.props.accessible ? this.props.accessible : true}
            accessibilityLabel={this.props.accessibilityLabel ? this.props.accessibilityLabel : undefined}
            accessibilityHint={this.props.accessibilityHint ? this.props.accessibilityHint : undefined}
            accessibilityRole={this.props.accessibilityRole ? this.props.accessibilityRole : "alert"}
        >
            <Touchable
                onPress={() => {
                  typeof this.props.onPress === 'function' ? this.props.onPress() : null
                  this.props.hideOnPress ? this._hide() : null
                }}
            >
                <Animated.View
                    style={[
                        styles.containerStyle,
                        { marginHorizontal: windowWidth * ((1 - TOAST_MAX_WIDTH) / 2) },
                        props.containerStyle,
                        props.backgroundColor && {backgroundColor: props.backgroundColor},
                        {
                            opacity: this.state.opacity
                        },
                        props.shadow && styles.shadowStyle,
                        props.shadowColor && {shadowColor: props.shadowColor}
                    ]}
                    pointerEvents="none"
                    ref={ele => this._root = ele}
                >
                    <Text style={[
                        styles.textStyle,
                        props.textStyle,
                        props.textColor && {color: props.textColor}
                    ]}>
                        {this.props.children}
                    </Text>
                </Animated.View>
            </Touchable>
        </Wrapper> : null;
    }
}

export default ToastContainer;
export {
    positions,
    durations
}
