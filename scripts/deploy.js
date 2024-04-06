const hre = require("hardhat");

async function main() {
  
  const Contract = await hre.ethers.getContractFactory("Hospital");
  const contract = await Contract.deploy("0xd8e82De2f0A1c6B36caf4f6577BEd519178772d2");
  await contract.deployed();

  console.log("Contract Address : ",contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
