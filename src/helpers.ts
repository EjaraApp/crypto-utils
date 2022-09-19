import base58 = require('bs58');

export function decodeHex(hexStr: string): Uint8Array | null {
  try {
    return Buffer.from(hexStr, 'hex');
  } catch (error) {
    return null;
  }
}

export function decodeb58(b58Str: string): Uint8Array | null {
  try {
    return base58.decode(b58Str);
  } catch (error) {
    return null;
  }
}
