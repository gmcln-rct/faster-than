if (typeof globalThis.crypto === 'undefined') {
  try {
    const { webcrypto } = require('crypto');
    globalThis.crypto = webcrypto;
  } catch (e) {
    const { randomFillSync } = require('crypto');
    globalThis.crypto = {
      getRandomValues: (arr) => randomFillSync(arr),
    };
  }
}
