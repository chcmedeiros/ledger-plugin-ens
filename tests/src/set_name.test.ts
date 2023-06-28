import { processTest, populateTransaction } from "./test.fixture";

const contractName = "ReverseRegistrar"; // <= Name of the smart contract

const testLabel = "reverse_registrar_set_name"; // <= Name of the test
const testDirSuffix = "reverse_registrar_set_name"; // <= directory to compare device snapshots to
const testNetwork = "ethereum";
const signedPlugin = false;

const contractAddr = "0x084b1c3c81545d370f3634392de611caabff8148"; // <= Address of the smart contract
const chainID = 1;

// From : https://etherscan.io/tx/0x905e106763556d0cb16d1fc11ab13d75cf5b1227e0480098b909bba50c4271b8
const inputData = "0xc47f0027000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000076c75632e65746800000000000000000000000000000000000000000000000000";
// Create serializedTx and remove the "0x" prefix
const value = "3.1";
const serializedTx = populateTransaction(contractAddr, inputData, chainID, value);
const devices = [
   {
     name: "nanos",
     label: "Nano S",
     steps: 4, // <= Define the number of steps for this test case and this device
   },
  {
    name: "nanox",
    label: "Nano X",
    steps: 4, // <= Define the number of steps for this test case and this device
  },
  {
     name: "nanosp",
     label: "Nano S+",
     steps: 4 // <= Define the number of steps for this test case and this device
   },
];

devices.forEach((device) =>
  processTest(device, contractName, testLabel, testDirSuffix, "", signedPlugin, serializedTx, testNetwork)
);
