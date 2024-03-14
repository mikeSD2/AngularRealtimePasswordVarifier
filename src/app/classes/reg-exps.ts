//регулярки вынесены в отдельный класс
export class RegExps {
    static isPasswordWeak: RegExp = new RegExp('(?=.*[a-zA-Z0-9])(?=.*[!-\/:-@[-`{-~0-9])(?=.*[!-\/:-@[-`{-~a-zA-Z])');
    static isPasswordMid: RegExp = new RegExp('(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!-\/:-@[-`{-~])');
}
