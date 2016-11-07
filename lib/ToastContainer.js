import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Animated,
    Dimensions,
    TouchableWithoutFeedback,
    Easing
} from 'react-native';
const TOAST_MAX_WIDTH = 0.9;
const TOAST_ANIMATION_DURATION = 200;
const DIMENSION = Dimensions.get('window');
const WINDOW_WIDTH = DIMENSION.width;
const positions = {
  TOP: 75,
  BOTTOM: -75,
  CENTER: 0
};

const durations = {
  LONG: 3500,
  SHORT: 2000
};

const styles = StyleSheet.create({
  defaultStyle: {
    position: 'absolute',
    width: WINDOW_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerStyle: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0,0,0,0.9)',
    borderRadius: 100,
    marginHorizontal: 10,
  },
  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4
    },
    shadowOpacity: 0.8,
    shadowRadius: 100,
    elevation: 10
  },
  textStyle: {
    fontSize: 15,
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
    position: PropTypes.number,
    animation: PropTypes.bool,
    shadow: PropTypes.bool,
    backgroundColor: PropTypes.string,
    shadowColor: PropTypes.string,
    textColor: PropTypes.string,
    delay: PropTypes.number,
    hideOnPress: PropTypes.bool,
    onHide: PropTypes.func,
    onHidden: PropTypes.func,
    onShow: PropTypes.func,
    onShown: PropTypes.func
  };

  static defaultProps = {
    visible: false,
    duration: durations.SHORT,
    animation: true,
    shadow: false,
    position: positions.BOTTOM,
    delay: 0,
    hideOnPress: true
  };

  constructor(props) {
    super(...arguments);
    this.state = {
      visible: this.props.visible,
      opacity: new Animated.Value(0)
    };
  }

  componentDidMount() {
    if (this.state.visible) {
      this._showTimeout = setTimeout(() => this._show(), this.props.delay);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible !== this.props.visible) {
      if (nextProps.visible) {
        clearTimeout(this._showTimeout);
        clearTimeout(this._hideTimeout);
        this._showTimeout = setTimeout(() => this._show(), this.props.delay);
      } else {
        this._hide();
      }

      this.setState({
        visible: nextProps.visible
      });
    }
  }

  componentWillUnmount() {
    this._hide();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.visible !== nextState.visible;
  }

  _animating = false;
  _root = null;
  _hideTimeout = null;
  _showTimeout = null;

  _show() {
    clearTimeout(this._showTimeout);
    if (!this._animating) {
      clearTimeout(this._hideTimeout);
      this._animating = true;
      this._root.setNativeProps({
        pointerEvents: 'auto'
      });
      this.props.onShow && this.props.onShow(this.props.siblingManager);
      Animated.timing(this.state.opacity, {
        toValue: 0.8,
        duration: this.props.animation ? TOAST_ANIMATION_DURATION : 0,
        easing: Easing.out(Easing.ease)
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
  }

  _hide() {
    clearTimeout(this._showTimeout);
    clearTimeout(this._hideTimeout);
    if (!this._animating) {
      this._root.setNativeProps({
        pointerEvents: 'none'
      });
      this.props.onHide && this.props.onHide(this.props.siblingManager);
      Animated.timing(this.state.opacity, {
        toValue: 0,
        duration: this.props.animation ? TOAST_ANIMATION_DURATION : 0,
        easing: Easing.in(Easing.ease)
      }).start(({finished}) => {
        if (finished) {
          this._animating = false;
          this.props.onHidden && this.props.onHidden(this.props.siblingManager);
        }
      });
    }
  }

  render() {
    let {props} =  this;
    let offset = props.position;
    let position = offset ? {
      [offset < 0 ? 'bottom' : 'top']: Math.abs(offset)
    } : {
      top: 0,
      bottom: 0
    };
    return (this.state.visible || this._animating)
      ? <View
        style={[styles.defaultStyle, position]}
        pointerEvents="box-none">
          <TouchableWithoutFeedback
            onPress={this.props.hideOnPress ? this._hide : null}>
              <Animated.View
                style={[
                  styles.containerStyle,
                  props.backgroundColor && {backgroundColor: props.backgroundColor},
                  {
                    opacity: this.state.opacity
                  },
                  props.shadow && styles.shadowStyle,
                  props.shadowColor && {shadowColor: props.shadowColor}
                ]}
                pointerEvents="none"
                ref={ele => this._root = ele}>
                <Text style={[styles.textStyle, props.textColor && {color: props.textColor}]}>
                  {this.props.children}
                </Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
    : null;
  }
}

export default ToastContainer;
export {
    positions,
    durations
}
