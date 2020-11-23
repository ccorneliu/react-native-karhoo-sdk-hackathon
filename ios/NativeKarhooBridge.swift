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

    @objc(setConfiguration:)
    func setConfiguration(dictionary: NSDictionary) -> Void {
        setupAdapter.setup(with: dictionary)
    }

    static func moduleName() -> String! {
        return "NativeKarhooBridge"
    }

    static func requiresMainQueueSetup() -> Bool {
        return false
    }
}
