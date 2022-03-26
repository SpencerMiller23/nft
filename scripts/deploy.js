const hre = require("hardhat");

// Beach: https://ipfs.io/ipfs/QmT4wCzX57pCusNwS2wSYA12F9AUSvEieRfUsLoEPAkZ7k?filename=beach.jpg
// Valley: https://ipfs.io/ipfs/QmW92AkvERx8LFKvomtHxEWdGjCS4EyuDoK72HYZSPPisv?filename=valley.jpg

async function main() {
  const signer = hre.ethers.getSigner();

  const Collectible = await hre.ethers.getContractFactory("Collectible");
  
  const collectible = await Collectible.deploy();
  await collectible.deployed();

  await collectible.createCollectible("https://ipfs.io/ipfs/QmeWEax2NKqKy7TnBACPNw2bCYrt1TW2nCc9ujPERcmBcr?filename=mountain.jpg")

  console.log("Collectible deployed to:", collectible.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
