
import { NativeEventEmitter, NativeModules } from 'react-native';

const { NativeKarhooBridge } = NativeModules;

class Karhoo {
    static setConfiguration(params) { NativeKarhooBridge.setConfiguration(params) }
    static login(username, password, errorCallback, successCallback) { NativeKarhooBridge.login(username, password, errorCallback, successCallback) }
}

Karhoo.emitter = new NativeEventEmitter(NativeKarhooBridge);

module.exports = Karhoo;