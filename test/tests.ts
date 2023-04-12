import * as assert from 'assert';
import {describe, it} from 'mocha';
import {detectAddressCryptos, validateAddress} from '../src/index';
import CoinCode from '../src/types/coin_code';

const correctAddresses = [
  {
    coinCodes: [CoinCode.BTC],
    address: 'bc1qxjth4cj6j2v04s07au935547qk9tzd635hkt3n',
  },
  {coinCodes: [CoinCode.BTC], address: '1EPLAsYXSeTKMmn8PFBTBwH1LewHoc8v9a'},
  {
    coinCodes: [CoinCode.ETH, CoinCode.BSC],
    address: '0x5c862679fB3FF6a3a87A30a8222DF61E7eE8d841',
  },
  {coinCodes: [CoinCode.XTZ], address: 'tz1R5X6pDpoxbMkY4AQJmUhRfEHjYN7dq66E'},
  {
    coinCodes: [CoinCode.NEAR],
    address: '434c894cacb459ca4eeadefc7e9868c2eb68b33c0ba81f8434f2bb435b4bbb7b',
  },
  {
    coinCodes: [CoinCode.SOL],
    address: 'Dtv5oivJLuDtzno4UQGrPQQXcZUy7sm1SDodHcykpU2n',
  },
  {
    coinCodes: [CoinCode.TRX],
    address: 'TYjYrDy7yE9vyJfnF5S3EfPrzfXM3eehri',
  },
  {
    coinCodes: [CoinCode.XLM],
    address: 'GBPT3GVKY727GYXTO6QAEVET3AW3EUVZZCZOCCO5B5PJXRVS3S4GD2AY',
  },
  {
    coinCodes: [CoinCode.BNB],
    address: 'bnb1r6c0ef2quy870xr8sp9nhagrf07f62sjw9na9j',
  },
  {
    coinCodes: [CoinCode.BSC, CoinCode.ETH],
    address: '0x2200eE3efc9f6812E3793D2314371Ebb3AD4Df1D',
  },
  {
    coinCodes: [CoinCode.DOGE],
    address: 'D9pvhnWknRza2HTXhY5WT29D4kvYzTZQAF',
  },
];

const detectAddresses = [
  ...correctAddresses,
  {
    coinCodes: [CoinCode.SOL],
    address: '5pGTheAGNuToDtDJRosi9RoBnh22RBpaGNpnm11uT4TH',
  },
];

const wrongAddresses = [
  {coinCodes: [CoinCode.BTC], address: 'TYjYrDy7yE9vyJfnF5S3EfPrzfXM3eehri'},
  {
    coinCodes: [CoinCode.ETH],
    address: 'Dtv5oivJLuDtzno4UQGrPQQXcZUy7sm1SDodHcykpU2n',
  },
  {
    coinCodes: [CoinCode.XTZ],
    address: '434c894cacb459ca4eeadefc7e9868c2eb68b33c0ba81f8434f2bb435b4bbb7b',
  },
  {coinCodes: [CoinCode.NEAR], address: 'tz1R5X6pDpoxbMkY4AQJmUhRfEHjYN7dq66E'},
  {
    coinCodes: [CoinCode.SOL],
    address: '0x5c862679fB3FF6a3a87A30a8222DF61E7eE8d841',
  },
  {
    coinCodes: [CoinCode.TRX],
    address: 'bc1qxjth4cj6j2v04s07au935547qk9tzd635hkt3n',
  },
  {
    coinCodes: [CoinCode.XLM],
    address: '0x5c862679fB3FF6a3a87A30a8222DF61E7eE8d841',
  },
  {
    coinCodes: [CoinCode.BNB],
    address: 'GBPT3GVKY727GYXTO6QAEVET3AW3EUVZZCZOCCO5B5PJXRVS3S4GD2AY',
  },
  {
    coinCodes: [CoinCode.BSC],
    address: 'bnb1r6c0ef2quy870xr8sp9nhagrf07f62sjw9na9j',
  },
  {
    coinCodes: [CoinCode.DOGE],
    address: '0x2200eE3efc9f6812E3793D2314371Ebb3AD4Df1D',
  },
];

const invalidAddresses = [
  'TYjYrDy7yE9vyJfnF5S3EfPrzfXM3eehr',
  'Dtv5oivJLuDtzno4UQGrPQQXcZUy7sm1SDodHcykpU',
  '434c894cacb459ca4eeadefc7e9868c2eb68b33c0ba81f8434f2bb435b4bbb7',
  'tz1R5X6pDpoxbMkY4AQJmUhRfEHjYN7dq66',
  '0x5c862679fB3FF6a3a87A30a8222DF61E7eE8d84',
  'bc1qxjth4cj6j2v04s07au935547qk9tzd635hkt3',
  '1EPLAsYXSeTKMmn8PFBTBwH1LewHoc8v9',
  'GBPT3GVKY727GYXTO9nhagrf07f62sjw9na9',
  'D9pvhnWknRza2HTXhY5WT29D4kvYzTZwe3',
];

describe('Validate Address', () => {
  it('Should Validate Address Correctly', () => {
    correctAddresses.forEach(address => {
      return assert(validateAddress(address.coinCodes[0], address.address));
    });
  });

  it('Should Validate Address ', () => {
    wrongAddresses.forEach(address => {
      assert.strictEqual(
        validateAddress(address.coinCodes[0], address.address),
        false
      );
    });
  });
});

describe('Detect Address Crypto', () => {
  it('Should Detect Correct Crypto', () => {
    detectAddresses.forEach(address => {
      const coins = detectAddressCryptos(address.address);
      assert(coins.length > 0);
      coins.forEach(d => {
        assert(address.coinCodes.includes(d));
      });
    });
  });

  it('Should Not Be Able to Detect Crypto ', () => {
    invalidAddresses.forEach(address => {
      assert.deepStrictEqual(detectAddressCryptos(address), []);
    });
  });
});
