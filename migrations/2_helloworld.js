// not file name, input contarct name
const helloWorld = artifacts.require("HelloWorld");

module.exports = function (deployer) {
    deployer.deploy(helloWorld, "hello world!"); // string νμμΌλ‘
}