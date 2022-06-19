const name = process.cwd().split('/').pop();
const data = require('../../servers.json')[name];
const {JavaCaller} = require('java-caller');
//Start the server
const java = new JavaCaller({
    jar: 'server.jar',
});
async function run(){
const { status, stdout, stderr } = await java.run(["-Xms" + data.minRAM, "-Xmx" + data.maxRAM]);
console.log(stdout);
console.log(stderr);
console.log(status);
}
run();
