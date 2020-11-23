//
//  SetupAdapter.swift
//  KarhooBridgeLibrary
//
//  Created by Corneliu on 23/11/2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation
import KarhooSDK

class SetupAdapter: NSObject {
    func setup(with dictionary: NSDictionary) {
        let rawEnv = dictionary.value(forKey: "environment") as? String
        var env: KarhooEnvironment
        switch rawEnv {
        case "sandbox":
            env = KarhooEnvironment.sandbox
        case "production":
            env = KarhooEnvironment.production
        default:
            env = KarhooEnvironment.sandbox
        }
        let karhooConfig = KarhooConfig(env: env)
        Karhoo.set(configuration: karhooConfig)
    }
}
