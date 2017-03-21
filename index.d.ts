/**
 *  node-steam-totp typings : https://github.com/DoctorMcKay/node-steam-totp
 */

declare namespace SteamTotp{
    type TagType = "conf" | "details" | "allow" | "cancel";
}

declare class SteamTotp {
    static getAuthCode(secret: string): string;
    static getAuthCode(secret: string, timeOffset: number): string;
    static getConfirmationKey(identitySecret: string, time: number, tag: SteamTotp.TagType): string;
    static getTimeOffset(callback: (err: Error, offset: number, latency: number) => any);
    static getDeviceID(steamID: string | SteamID): string;
}


declare module "steam-totp" {
    export  = SteamTotp;
}


