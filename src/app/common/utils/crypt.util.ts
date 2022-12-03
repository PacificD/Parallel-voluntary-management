/*
 * @Author: Pacific_D
 * @Date: 2022-11-30 15:21:05
 * @LastEditTime: 2022-12-03 10:26:46
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\common\utils\crypt.util.ts
 */
import * as CryptoJS from "crypto-js"
import { IV, KEY } from "src/app/secrets"

const SECRET_KEY = CryptoJS.enc.Utf8.parse(KEY),
  SECRET_IV = CryptoJS.enc.Utf8.parse(IV)

function encrypt(data: any): string {
  if (typeof data === "object") {
    try {
      data = JSON.stringify(data)
    } catch (error) {
      console.error("encrypt error:", error)
    }
  }
  const dataHex = CryptoJS.enc.Utf8.parse(data)
  const encrypted = CryptoJS.AES.encrypt(dataHex, SECRET_KEY, {
    iv: SECRET_IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return encrypted.ciphertext.toString()
}

function decrypt(data: string) {
  const encryptedHexStr = CryptoJS.enc.Hex.parse(data)
  const str = CryptoJS.enc.Base64.stringify(encryptedHexStr)
  const decrypt = CryptoJS.AES.decrypt(str, SECRET_KEY, {
    iv: SECRET_IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
  return decryptedStr.toString()
}

export { encrypt, decrypt }
