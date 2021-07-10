// not file name, input contarct name
const helloWorld = artifacts.require("HelloWorld");

module.exports = function (deployer) {
    deployer.deploy(helloWorld, "hello world!"); // string 타입으로
}