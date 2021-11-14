let { networkConfig } = require('../helper-hardhat-config')

module.exports = async ({
    getNamedAccounts,
    deployments,
    getChainId
})=> {

    // This is just a convenience check
    if (network.name === "hardhat") {
      console.warn(
        "You are trying to deploy a contract to the Hardhat Network, which" +
          " gets automatically created and destroyed every time. Use the Hardhat" +
          " option '--network localhost'"
      );
    }

    // ethers is avaialble in the global scope
    const [deployer] = await ethers.getSigners();
    console.log("Deploying the contract with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

    const { deploy, log } = deployments
    //const { deployer } = await getNamedAccounts()
    const chainId = await getChainId()

    const ServiceChain = await ethers.getContractFactory("ServiceChain");
    const deployedContract = await ServiceChain.deploy();
    console.log("Deployed ServiceChain contract address:", deployedContract.address);

    // We also save the contract's artifacts and address in the frontend directory
    saveFrontendFiles(deployedContract);
  }
  
  function saveFrontendFiles(deployedContract) {
    const fs = require("fs");
    const contractsDir = "/home/fidelche/satellite-broadband-supply-chain-ui/src/contracts";
  
    if (!fs.existsSync(contractsDir)) {
      fs.mkdirSync(contractsDir);
    }
  
    fs.writeFileSync(
      contractsDir + "/contract-address.json",
      JSON.stringify({ ServiceChain: deployedContract.address }, undefined, 2)
    );
  
    const SupplyChainArtifact = artifacts.readArtifactSync("ServiceChain");
  
    fs.writeFileSync(
      contractsDir + "/ServiceChain.json",
      JSON.stringify(SupplyChainArtifact, null, 2)
    );
  }