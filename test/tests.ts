import * as assert from 'assert';
import {describe, it} from 'mocha';
import {detectAddressCrypto, validateAddress} from '../src/index';
import CoinCode from '../src/coin_code';

const correctAddresses = [
  {
    coinCode: CoinCode.BTC,
    address: 'bc1qxjth4cj6j2v04s07au935547qk9tzd635hkt3n',
  },
  {coinCode: CoinCode.BTC, address: '1EPLAsYXSeTKMmn8PFBTBwH1LewHoc8v9a'},
  {
    coinCode: CoinCode.ETH,
    address: '0x5c862679fB3FF6a3a87A30a8222DF61E7eE8d841',
  },
  {coinCode: CoinCode.XTZ, address: 'tz1R5X6pDpoxbMkY4AQJmUhRfEHjYN7dq66E'},
  {
    coinCode: CoinCode.NEAR,
    address: '434c894cacb459ca4eeadefc7e9868c2eb68b33c0ba81f8434f2bb435b4bbb7b',
  },
  {
    coinCode: CoinCode.SOL,
    address: 'Dtv5oivJLuDtzno4UQGrPQQXcZUy7sm1SDodHcykpU2n',
  },
  {
    coinCode: CoinCode.TRX,
    address: 'TYjYrDy7yE9vyJfnF5S3EfPrzfXM3eehri',
  },
  {
    coinCode: CoinCode.XLM,
    address: 'GBPT3GVKY727GYXTO6QAEVET3AW3EUVZZCZOCCO5B5PJXRVS3S4GD2AY',
  },
];

const wrongAddresses = [
  {coinCode: CoinCode.BTC, address: 'TYjYrDy7yE9vyJfnF5S3EfPrzfXM3eehri'},
  {
    coinCode: CoinCode.ETH,
    address: 'Dtv5oivJLuDtzno4UQGrPQQXcZUy7sm1SDodHcykpU2n',
  },
  {
    coinCode: CoinCode.XTZ,
    address: '434c894cacb459ca4eeadefc7e9868c2eb68b33c0ba81f8434f2bb435b4bbb7b',
  },
  {coinCode: CoinCode.NEAR, address: 'tz1R5X6pDpoxbMkY4AQJmUhRfEHjYN7dq66E'},
  {
    coinCode: CoinCode.SOL,
    address: '0x5c862679fB3FF6a3a87A30a8222DF61E7eE8d841',
  },
  {
    coinCode: CoinCode.TRX,
    address: 'bc1qxjth4cj6j2v04s07au935547qk9tzd635hkt3n',
  },
  {
    coinCode: CoinCode.XLM,
    address: '0x5c862679fB3FF6a3a87A30a8222DF61E7eE8d841',
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
];

describe('Validate Address', () => {
  it('Should Validate Address Correctly', () => {
    correctAddresses.forEach(address => {
      assert(validateAddress(address.coinCode, address.address));
    });
  });

  it('Should Validate Address ', () => {
    wrongAddresses.forEach(address => {
      assert.strictEqual(
        validateAddress(address.coinCode, address.address),
        false
      );
    });
  });
});

describe('Detect Address Crypto', () => {
  it('Should Detect Correct Crypto', () => {
    correctAddresses.forEach(address => {
      assert.strictEqual(
        detectAddressCrypto(address.address),
        address.coinCode
      );
    });
  });

  it('Should Not Be Able to Detect Crypto ', () => {
    invalidAddresses.forEach(address => {
      assert.strictEqual(detectAddressCrypto(address), undefined);
    });
  });
});
