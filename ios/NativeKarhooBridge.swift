//
//  KarhooBridgeModule.swift
//  react-native-karhoo-sdk
//
//  Created by Corneliu on 23/11/2020.
//

import Foundation
import React

@objc(NativeKarhooBridge)
class NativeKarhooBridge: NSObject {

    private let setupAdapter = SetupAdapter()
    private let loginAdapter = LoginAdapter()

    @objc(setConfiguration:)
    func setConfiguration(dictionary: NSDictionary) -> Void {
        setupAdapter.setup(with: dictionary)
    }

    @objc(login:password:callback:)
    func login(with username: String, password: String, callback: @escaping RCTResponseSenderBlock) -> Void {
        loginAdapter.login(with: username, password: password) { resultString in
            callback([NSNull(), resultString])
        }
    }

    static func moduleName() -> String! {
        return "NativeKarhooBridge"
    }

    static func requiresMainQueueSetup() -> Bool {
        return false
    }
}
