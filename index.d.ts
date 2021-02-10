/**
 * typescript definition
 * @author wallel
 */
declare module "react-native-root-toast"{
    import * as React from 'react';
    import * as ReactNative from "react-native";
    import {TextStyle,StyleProp,ViewStyle} from "react-native";
    export interface ToastOptions {
        containerStyle?:StyleProp<ViewStyle>
        duration?:number
        visible?: boolean,
        position?: number,
        animation?:boolean,
        shadow?: boolean,
        backgroundColor?: string,
        opacity?: number,
        shadowColor?: string,
        textColor?: string,
        textStyle?: StyleProp<TextStyle>,
        delay?: number,
        keyboardAvoiding?: boolean,
        hideOnPress?: boolean,
        onHide?: Function,
        onHidden?: Function,
        onShow?: Function,
        onShown?: Function,
        onPress?: Function,
        accessible?: boolean,
        accessibilityLabel?: string,
        accessibilityHint?: string,
        accessibilityRole?: string
    }

    export interface ToastProps extends ToastOptions,ReactNative.ViewProperties{
    }

    export interface Durations {
        LONG:number,
        SHORT:number
    }
    export interface Positions {
        TOP:number,
        BOTTOM:number,
        CENTER:number,
    }
    export default class Toast extends React.Component<ToastProps>{
        static show:(message:string,options?:ToastOptions)=>any;
        static hide:(toast:any)=>void;
        static durations:Durations;
        static positions:Positions;
    }

    export class ToastContainer extends React.Component<ToastProps> {}
}
