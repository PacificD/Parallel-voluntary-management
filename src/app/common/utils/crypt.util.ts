/*
 * @Author: Pacific_D
 * @Date: 2022-11-27 17:51:24
 * @LastEditTime: 2022-11-27 17:52:26
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\common\utils\crypt.util.ts
 */
// import CryptoJS from "crypto-js"

// const SECRET_KEY = CryptoJS.enc.Utf8.parse(process.env. ?? ""),
//   SECRET_IV = CryptoJS.enc.Utf8.parse(process.env. ?? "")

// function encrypt(data: any): string {
//   if (typeof data === "object") {
//     try {
//       data = JSON.stringify(data)
//     } catch (error) {
//       console.error("encrypt error:", error)
//     }
//   }
//   const dataHex = CryptoJS.enc.Utf8.parse(data)
//   const encrypted = CryptoJS.AES.encrypt(dataHex, SECRET_KEY, {
//     iv: SECRET_IV,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7
//   })
//   return encrypted.ciphertext.toString()
// }

// function decrypt(data: string) {
//   const encryptedHexStr = CryptoJS.enc.Hex.parse(data)
//   const str = CryptoJS.enc.Base64.stringify(encryptedHexStr)
//   const decrypt = CryptoJS.AES.decrypt(str, SECRET_KEY, {
//     iv: SECRET_IV,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7
//   })
//   const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
//   return decryptedStr.toString()
// }

// export { encrypt, decrypt }
