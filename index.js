
import { NativeEventEmitter, NativeModules } from 'react-native';

const { NativeKarhooBridge } = NativeModules;

class Karhoo {
    static setConfiguration(params) { NativeKarhooBridge.setConfiguration(params) }
}

Karhoo.emitter = new NativeEventEmitter(NativeKarhooBridge);

module.exports = Karhoo;