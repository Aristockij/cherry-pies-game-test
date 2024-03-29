export const REGEXP = {
  startWithCapitalizeLetter: /^[A-ZА-Я]/,
  latinOrCyrillic: /^[a-zA-Zа-яА-Я]+$/,
  noSpaceSymbols: /^[^\s]*$/,
  noDigitSymbols: /^[^\d]*$/,
  capitalizeLettersOnlyOnStat: /^[A-ZА-ЯЁ][a-zа-яё-]*$/,
  namesValidation: /^[A-Za-zА-ЯЁа-яё]*$/,
  loginValidation: /^(?=.{3,20}$)(?!^\d+$)[a-zA-Z\d_-]+$/,
  latinLetters: /^[A-Za-z0-9!@#$%^&*()_+\-={};':"\\|,.<>/?~\s]*$/,
  digitsAndLetters: /^(?=.*[^\d]).+$/,
  noSpecialSymbols: /[A-ZА-ЯЁ][a-zа-яё-]*$/,
  noSpecialSymbolsLogin: /^[A-Za-z0-9-_]+$/,
  noSpecialSymbolsEmail: /^[A-ZА-Я][a-zа-я][a-zA-Z0-9-]*$/,
  emailValidation: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  passwordValidation: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
  phoneValidation: /^\+?\d{10,15}$/,
  messageValidation: /^.+$/,
}
