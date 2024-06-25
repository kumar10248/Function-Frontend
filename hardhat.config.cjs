require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks:{
    holesky:{
      url:"https://eth-holesky.g.alchemy.com/v2/XklwdG3ysLy2KChTq-OsiTqO0NYEyvDv",
      accounts:["9a70f2ab0fdf8cf1060b1e01d838d62917ac9fc9921a610668943bbe33cbb745"]
    }
  }
};
