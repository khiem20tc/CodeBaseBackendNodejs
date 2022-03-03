require('dotenv').config();

const RedisConfig = {
  port: process.env.REDIS_port,
  host: process.env.REDIS_host,
  db: 1,
  options: {},
  string_numbers: true
};

const TX_JOB_TASK = "TX_JOB_TASK";

const TIME_ZONE = "Asia/Ho_Chi_Minh";

const BlockchainJobType = {
  CREATE_TRANSACTION: "CREATE_TRANSACTION",
  CREATE_TRANSACTION_ENCODE_ABI: "CREATE_TRANSACTION_ENCODE_ABI",
  COMPUTE_NONCE: "COMPUTE_NONCE",
  SEND_RAW_TRANSACTION: "SEND_RAW_TRANSACTION",
};

const BC_PORT = {
  TEST: 48700,
  MAIN: 88888,
};

const PORT_NETWORK_BLOCKCHAIN = 88888;
const URL_BC_NETWORK = process.env.URL_BC_NETWORK;
const WS_BC_NETWORK = process.env.WS_BC_NETWORK;

const WALLET_PATH = {
  standard: "m/44'/60'/0'/0/0",
};

const APPEARANCE = 1;

const DISAPPEARANCE = 0;

export default {
  APPEARANCE,
  DISAPPEARANCE,
  RedisConfig,
  TX_JOB_TASK,
  BlockchainJobType,
  TIME_ZONE,
  PORT_NETWORK_BLOCKCHAIN,
  URL_BC_NETWORK,
  BC_PORT,
  WALLET_PATH,
  WS_BC_NETWORK
};
