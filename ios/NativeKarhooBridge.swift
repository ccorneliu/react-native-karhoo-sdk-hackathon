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

    @objc(login:password:errorCallback:successCallback:)
    func login(with username: String, password: String,
               errorCallback: @escaping RCTResponseSenderBlock,
               successCallback: @escaping RCTResponseSenderBlock) -> Void {
        loginAdapter.login(with: username, password: password) { isSuccessful, resultString in
            if isSuccessful {
                successCallback([resultString])
            } else {
                errorCallback([resultString])
            }
        }
    }

    static func moduleName() -> String! {
        return "NativeKarhooBridge"
    }

    static func requiresMainQueueSetup() -> Bool {
        return true
    }
}
