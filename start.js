const name = process.cwd().split('\\').pop();
console.log(name);
const data = require('../../servers.json').servers[name];
console.log(data);
const {JavaCaller} = require('java-caller');
//Start the server
const java = new JavaCaller({
    jar: 'server.jar',
    minimumJavaVersion: data.javaversion,
    maximumJavaVersion: data.javaversion,
});
async function run(){
const { status, stdout, stderr } = await java.run(["-Xms" + data.minRAM, "-Xmx" + data.maxRAM]);
console.log(stdout);
console.log(stderr);
console.log(status);
}
run();
