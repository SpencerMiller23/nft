//SPDX-License-Identifier: MIT
pragma solidity 0.6.6;

import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Collectible is ERC721 {
    
    constructor() public ERC721("Mountain", "MNT") {}

    function createCollectible() public returns (uint256) {
        
    }

}
