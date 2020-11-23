//
//  LoginAdapter.swift
//  react-native-karhoo-sdk
//
//  Created by Corneliu on 23/11/2020.
//

import Foundation
import KarhooSDK

class LoginAdapter: NSObject {
    func login(with username: String, password: String, completion: @escaping (Bool, String) -> Void) {
        let userLogin = UserLogin(username: username, password: password)
        let call = Karhoo.getUserService().login(userLogin: userLogin)
        call.execute { result in
            switch result {
            case let .success(result):
                completion(true, "Great! Successfully logged in, \(result.firstName)")
            case let .failure(error):
                completion(false, "Sorry! Log in failed: \(error?.message ?? "uknown mesage")")
            }
        }
    }
}
