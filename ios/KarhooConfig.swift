//
//  KarhooConfig.swift
//  react-native-karhoo-sdk
//
//  Created by Corneliu on 23/11/2020.
//

import Foundation
import KarhooSDK

struct KarhooConfig: KarhooSDKConfiguration {
    private let env: KarhooEnvironment

    init(env: KarhooEnvironment) {
        self.env = env
    }

    func environment() -> KarhooEnvironment {
        return self.env
    }

    func authenticationMethod() -> AuthenticationMethod {
        return .karhooUser
    }
}
