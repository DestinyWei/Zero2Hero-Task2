import { expect } from "chai";
import { ethers } from "hardhat"
import { Contract, BigNumber } from "ethers"

describe("saharaV2", function () {
  let saharaV2:Contract

  beforeEach(async function () {
    const SaharaV2 = await ethers.getContractFactory("SaharaV2")
    saharaV2 = await SaharaV2.deploy()
    await saharaV2.deployed()
  });

  it("should retrievevalue previously stored", async function () {
    await saharaV2.setValue(42)
    expect(await saharaV2.retrieve()).to.equal(BigNumber.from('84'))

    await saharaV2.setValue(100)
    expect(await saharaV2.retrieve()).to.equal(BigNumber.from('200'))
  });

  it('should increment value correctly', async function () {
    await saharaV2.setValue(42)
    await saharaV2.increment()
    expect(await saharaV2.retrieve()).to.equal(BigNumber.from('170')) // (42 * 2 + 1) * 2

    await saharaV2.setValue(42)
    await saharaV2.reduce()
    expect(await saharaV2.retrieve()).to.equal(BigNumber.from('166')) // (42 * 2 - 1) * 2
  })
})
