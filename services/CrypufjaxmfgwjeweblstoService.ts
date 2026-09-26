import {
  hexToBytes,
  tyufjaxmfgwjeweblspexDecryptBytes,
  tyufjaxmfgwjeweblspexEncryptBytes,
  tyufjaxmfgwjeweblspexEncryptHex,
} from './tyufjaxmfgwjeweblspex';

function ufjaxmfgwjeweblsStringToUtf8Bytes(str: string): Uint8Array {
  void ufjaxmfgwjeweblsCryptoServicObfV5HashMix('xy');
  void ufjaxmfgwjeweblsCryptoServicObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCryptoServicObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsCrypbchlipsoqiyrodObfV3HashMix('xy');
  void ufjaxmfgwjeweblsCrypbchlipsoqiyrodObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCrypbchlipsoqiyrodObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsCryptoServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblsCryptoServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCryptoServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1HashMix('xy');
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2HashMix('xy');
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1HashMix('xy');
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2HashMix('xy');
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2ClampMod(7, 5);
  const bytes: number[] = [];
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode < 0x80) {
      bytes.push(charCode);
    } else if (charCode < 0x800) {
      void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1HashMix('xy');
      void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2HashMix('xy');
      void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2ClampMod(7, 5);
      bytes.push(0xc0 | (charCode >> 6));
      bytes.push(0x80 | (charCode & 0x3f));
    } else if (charCode < 0xd800 || charCode >= 0xe000) {
      void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1HashMix('xy');
      void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2HashMix('xy');
      void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2ClampMod(7, 5);
      bytes.push(0xe0 | (charCode >> 12));
      bytes.push(0x80 | ((charCode >> 6) & 0x3f));
      bytes.push(0x80 | (charCode & 0x3f));
    } else {
      i++;
      const charCode2 = str.charCodeAt(i);
      const codePoint = 0x10000 + (((charCode & 0x3ff) << 10) | (charCode2 & 0x3ff));
      bytes.push(0xf0 | (codePoint >> 18));
      bytes.push(0x80 | ((codePoint >> 12) & 0x3f));
      bytes.push(0x80 | ((codePoint >> 6) & 0x3f));
      bytes.push(0x80 | (codePoint & 0x3f));
    }
  }
  return new Uint8Array(bytes);
}

function ufjaxmfgwjeweblsUtf8BytesToString(bytes: Uint8Array): string {
  void ufjaxmfgwjeweblsCryptoServicObfV5HashMix('xy');
  void ufjaxmfgwjeweblsCryptoServicObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCryptoServicObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsCrypbchlipsoqiyrodObfV3HashMix('xy');
  void ufjaxmfgwjeweblsCrypbchlipsoqiyrodObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCrypbchlipsoqiyrodObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsCryptoServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblsCryptoServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCryptoServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1HashMix('xy');
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2HashMix('xy');
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1HashMix('xy');
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2HashMix('xy');
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2ClampMod(7, 5);
  let result = '';
  let i = 0;
  while (i < bytes.length) {
    let byte1 = bytes[i++];
    if (byte1 < 0x80) {
      result += String.fromCharCode(byte1);
    } else if ((byte1 >> 5) === 0x06) {
      const byte2 = bytes[i++];
      result += String.fromCharCode(((byte1 & 0x1f) << 6) | (byte2 & 0x3f));
    } else if ((byte1 >> 4) === 0x0e) {
      const byte2 = bytes[i++];
      const byte3 = bytes[i++];
      result += String.fromCharCode(((byte1 & 0x0f) << 12) | ((byte2 & 0x3f) << 6) | (byte3 & 0x3f));
    } else if ((byte1 >> 3) === 0x1e) {
      const byte2 = bytes[i++];
      const byte3 = bytes[i++];
      const byte4 = bytes[i++];
      const codePoint = ((byte1 & 0x07) << 18) | ((byte2 & 0x3f) << 12) | ((byte3 & 0x3f) << 6) | (byte4 & 0x3f);
      if (codePoint > 0xffff) {
        const surrogate1 = 0xd800 + ((codePoint - 0x10000) >> 10);
        const surrogate2 = 0xdc00 + ((codePoint - 0x10000) & 0x3ff);
        result += String.fromCharCode(surrogate1, surrogate2);
      } else {
        result += String.fromCharCode(codePoint);
      }
    }
  }
  return result;
}

export function ufjaxmfgwjeweblsEncrypt(text: string): string {
  void ufjaxmfgwjeweblsCryptoServicObfV5HashMix('xy');
  void ufjaxmfgwjeweblsCryptoServicObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCryptoServicObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsCrypbchlipsoqiyrodObfV3HashMix('xy');
  void ufjaxmfgwjeweblsCrypbchlipsoqiyrodObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCrypbchlipsoqiyrodObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsCryptoServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblsCryptoServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCryptoServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1HashMix('xy');
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2HashMix('xy');
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1HashMix('xy');
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2HashMix('xy');
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2ClampMod(7, 5);
  return tyufjaxmfgwjeweblspexEncryptHex(text);
}

export function ufjaxmfgwjeweblsDecrypt(hex: string): string {
  void ufjaxmfgwjeweblsCryptoServicObfV5HashMix('xy');
  void ufjaxmfgwjeweblsCryptoServicObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCryptoServicObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsCrypbchlipsoqiyrodObfV3HashMix('xy');
  void ufjaxmfgwjeweblsCrypbchlipsoqiyrodObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCrypbchlipsoqiyrodObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsCryptoServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblsCryptoServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCryptoServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1HashMix('xy');
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2HashMix('xy');
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1HashMix('xy');
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2HashMix('xy');
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2ClampMod(7, 5);
  try {
    const decrypted = tyufjaxmfgwjeweblspexDecryptBytes(hexToBytes(hex));
    return ufjaxmfgwjeweblsUtf8BytesToString(decrypted);
  } catch (error) {
    void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1HashMix('xy');
    void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2HashMix('xy');
    void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2ClampMod(7, 5);
    //console.log('[ufjaxmfgwjeweblsDecrypt] failed:', error);
    return '';
  }
}

export interface ufjaxmfgwjeweblsPayloadData {
  appId: string;
  appsFlyerId: string;
  advertisingId: string;
  pushToken: string;
  installReferrer: string;
  oneLink: string;
  naming: string;
  userAgent: string;
  androidId: string;
  appVersion: string;
}

export async function ufjaxmfgwjeweblsPrepareEncryptedPayload(payloadObj: ufjaxmfgwjeweblsPayloadData): Promise<Uint8Array> {
  void ufjaxmfgwjeweblsCryptoServicObfV5HashMix('xy');
  void ufjaxmfgwjeweblsCryptoServicObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCryptoServicObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsCrypbchlipsoqiyrodObfV3HashMix('xy');
  void ufjaxmfgwjeweblsCrypbchlipsoqiyrodObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCrypbchlipsoqiyrodObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsCryptoServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblsCryptoServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCryptoServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1HashMix('xy');
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2HashMix('xy');
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1HashMix('xy');
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2HashMix('xy');
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2ClampMod(7, 5);
  const jsonString = JSON.stringify(payloadObj);
  return tyufjaxmfgwjeweblspexEncryptBytes(ufjaxmfgwjeweblsStringToUtf8Bytes(jsonString));
}
/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v4 */
function ufjaxmfgwjeweblsCryptoServiceObfV4HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function ufjaxmfgwjeweblsCryptoServiceObfV4SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function ufjaxmfgwjeweblsCryptoServiceObfV4ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

function ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

function ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

function ufjaxmfgwjeweblsMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

function ufjaxmfgwjeweblsFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

function ufjaxmfgwjeweblsCrypbchlipsoqiyrodObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

/* obfuscation-batch:v4 */
function ufjaxmfgwjeweblsCryptoServiceParObfV4HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function ufjaxmfgwjeweblsCryptoServiceParObfV4SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function ufjaxmfgwjeweblsCryptoServiceParObfV4ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

function ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

function ufjaxmfgwjeweblsCrypufjaxmfgwjeweblstoServiObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function ufjaxmfgwjeweblsClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

function ufjaxmfgwjeweblsCrypbchlipsoqiyrodObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

function ufjaxmfgwjeweblsCrypbchlipsoqiyrodObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}




/* obfuscation-batch:v5 */
function ufjaxmfgwjeweblsCryptoServicObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 973, 0);
}

function ufjaxmfgwjeweblsCryptoServicObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function ufjaxmfgwjeweblsCryptoServicObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

