import { task } from "hardhat/config";
import { readAddressList } from "../scripts/helper";

task("saharav1", "exchagne with sahara v1").setAction(async (_, hre) => {

  // 和v1版本交互，调用的是proxy合约
  const addressList = readAddressList();
  const proxyAddress = addressList['proxy'];
  // 链接合约
  const sahara = await hre.ethers.getContractAt("Sahara", proxyAddress);

  // 查看当前的value值
  console.log("当前值: ", await sahara.retrieve());

  // 设置一个新的value值
  console.log("设置值为95: ", await sahara.setValue(95));

  // 查看当前的value值  在执行时输出仍为原来的数值即42,但下次执行时则会显示setValue后的值,推测为网络延迟
  console.log("当前值: ", await sahara.retrieve());
});

task("saharav2", "exchagne with sahara v2").setAction(async (_, hre) => {

  // 和v2版本交互，调用的是proxy合约
  const addressList = readAddressList();
  const proxyAddress = addressList['proxy'];
  // 链接合约
  const saharaV2 = await hre.ethers.getContractAt("SaharaV2", proxyAddress);

  // v2中新增了2个函数  increment / reduce
  // 查看当前的value值
  console.log("当前值: ", await saharaV2.retrieve());

  // 调用reduce对value-1
  console.log("执行减1操作: ", await saharaV2.reduce());
  console.log("当前值: ", await saharaV2.retrieve());

  // 调用reduce对value-1
  console.log("执行减1操作: ", await saharaV2.reduce());
  console.log("当前值: ", await saharaV2.retrieve());

  // 调用increment对value+1
  console.log("执行加1操作: ", await saharaV2.increment());
  console.log("当前值: ", await saharaV2.retrieve());

  // 调用setValue对value进行乘2
  await saharaV2.setValue(45);
  console.log("执行setValue函数并输入45即执行45 * 2: ", await saharaV2.retrieve());
});

task("saharav3", "exchagne with sahara v3").setAction(async (_, hre) => {

  // 和v3版本交互，调用的是proxy合约
  const addressList = readAddressList();
  const proxyAddress = addressList['proxy'];
  // 链接合约
  const saharaV3 = await hre.ethers.getContractAt("SaharaV3", proxyAddress);

  // v3 中新增了1个name变量  setName()可以修改name的值
  // 查看当前的value值
  console.log("当前值: ", await saharaV3.retrieve());

  // 查看当前name值
  console.log("当前name值: ", await saharaV3.name());

  console.log("调用setName函数...")

  // 设置name的值
  let boxname="my Sahara V3";
  await saharaV3.setName(boxname);

  console.log("当前name值: ", await saharaV3.name());
});

task("saharav4", "exchagne with sahara v3").setAction(async (_, hre) => {

  // 和v4版本交互，调用的是proxy合约
  const addressList = readAddressList();
  const proxyAddress = addressList['proxy'];
  // 链接合约
  const saharaV4 = await hre.ethers.getContractAt("SaharaV4", proxyAddress);

  // 查看当前name值
  console.log("当前name值: ", await saharaV4.getName());

  console.log("调用setName函数...")

  // 设置name的值
  let boxname="my Sahara V3";
  await saharaV4.setName(boxname);

  console.log("当前name值: ", await saharaV4.getName());
});
