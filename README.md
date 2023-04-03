Zero2Hero训练营第二次作业

# 代码说明

**测试**
```shell
npx hardhat test
```

**逻辑合约 Sahara.sol**

本地节点部署

v1版本部署
```shell
npx hardhat run scripts/1.deploy_sahara.ts --network localhost
```
与v1版本交互
```shell
npx hardhat saharav1 --network localhost
```
升级v2
```shell
npx hardhat run scripts/2.deploy_saharaV2.ts --network localhost
```
与v2版本交互
```shell
npx hardhat saharav2 --network localhost
```

升级v3
```shell
npx hardhat run scripts/3.deploy_saharaV3.ts --network localhost
```
与v3版本交互
```shell
npx hardhat saharav3 --network localhost
```

