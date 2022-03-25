const { expect } = require("chai");
const { ethers } = require("hardhat");
let deployer;
describe("Token", function () {

  it("Should setup the token correctly", async function() {

    const accounts = await ethers.getSigners();
    deployer = accounts[0];

    const TokenSupply = ethers.utils.parseUnits("100000000")
    const TokenName = "Xava";
    const TokenSymbol = "Xava";
    const TokenDecimals = 18;

    const XavaTokenFactory = await ethers.getContractFactory("XavaToken");
    XavaToken = await XavaTokenFactory.deploy(TokenName,TokenSymbol,TokenSupply,TokenDecimals);

    // When
    let decimals = await XavaToken.decimals();
    let totalSupply = await XavaToken.totalSupply();
    let deployerBalance = await XavaToken.balanceOf(deployer.address);

    // Then
    expect(decimals).to.equal(18);
    expect(totalSupply).to.equal(ethers.utils.parseUnits("100000000"));
    expect(totalSupply).to.equal(deployerBalance);
  });

}
);


