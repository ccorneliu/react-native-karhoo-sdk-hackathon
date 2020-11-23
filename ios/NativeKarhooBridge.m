//
//  KarhooBridgeModule.m
//  react-native-karhoo-sdk
//
//  Created by Corneliu on 23/11/2020.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(NativeKarhooBridge, NSObject)

RCT_EXTERN_METHOD(setConfiguration:(NSDictionary *)configuration)
RCT_EXTERN_METHOD(login:(NSString *)username password:(NSString *)password errorCallback:(RCTResponseSenderBlock)callback successCallback:(RCTResponseSenderBlock)callback)

@end
