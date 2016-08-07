


// // *** Node.js lesson using file streams ***
// var fs = require('fs');

// var readmeStream = fs.createReadStream('./README.md', {encoding:'UTF-8'});

// var readme2 = fs.createWriteStream('./Readme2.md',{encoding:'UTF-8'});

// readmeStream.on('data', function(chunk) {

//     readme2.write(chunk, function(err){
//         if(err) {
//             throw err;
//         }
//     });
// });

// readmeStream.on('end', function(err){
//     if(err){
//         throw err;
//     }

//     readme2.end();
//     console.log('Finished writing ./Readme2.md.');
//     process.exit();
// });

// // *** Node.js lesson using file system ***
// var fs = require('fs');
// var path = require('path');

// fs.readdir('./', function(err, files){
//     if(err){
//         throw err;
//     }
//     console.log(files);
// });

// console.log('Reading files from current directory...');

// var fileStats = fs.statSync('./README.md');
// if( fileStats.isFile()){
//     fs.readFile('./README.md','UTF-8',function(err, data){
//         if(err){
//             console.log(err);
//         }
//         console.log(data);
//     });
// }

// fs.readdir('./junk', function(err, files){
//     files.forEach(function(file) {
//         fs.unlink(path.join('./junk', file));
//     });

//     fs.rmdir('./junk', function(err){
//         if(err){
//             throw err;
//         }
//     });
// });

// console.log('Removing files from ./junk');

// // *** Node.js lesson using exec and spawn ***
// var exec = require('child_process').exec;
// var spawn = require('child_process').spawn;

// exec('open http://www.becu.org');
// exed("ls", function(err, stdout){
//     console.log(stdout);
// });

// var childProcess = spawn('node', ["app.js"]);

// childProcess.on('data',function (data) {
//     console.log(`Output from Child Process: ${data}.`);
// });

// childProcess.on('close',function() {
//     process.exit();
// });

// // *** Node.js lesson using Events  ***
// var emitter = require('events').EventEmitter;
// var util = require('util');
// var readline = require('readline');

// var person = function (first, last, age) {
//   this.name = `${first} ${last}`;
//   this.age = age;
// };

// util.inherits(person, emitter);
// // module.exports = person;

// var elon = new person('Elon','Musk', 48);

// elon.on('yell', function (insult) {
//    console.log(`\n\nI am ${this.age} year old ${this.name} and you are a Fucking ${insult}!!\n\n`); 
// });

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// }); 

// rl.setPrompt('Name of a good insult (\'nope\' to quit): ');
// rl.prompt();

// rl.on('line', function(insult){
//     if(insult === 'nope'){
//         rl.close();
//     } else {
//         elon.emit('yell',insult);

//         rl.setPrompt('Do you have another insult (\'nope\' to quit): ');
//         rl.prompt();
//     }

// });

// *** Node.js lesson using connect ***
// var express = require('express');

// var app = express();

// app.get('/bikes', function(req, res){
//     res.send('<h1> All Bikes </h1>');
//     console.log(req.baseUrl);
// });

// app.get('/bikes/:type', function(req, res){
//     res.send('<h1>' + req.params.type + '</h1>');
//     console.log(req.baseUrl);
// });

// app.get('/*', function (req, res) {
//     res.send('If all esle fails, send this page!!');
//     console.log(req.baseUrl);
// });

// app.listen('8080');

// *** Node.js basics ***
// var fileNaem = __filename; // example of global variable 
// console.log(process.argv); //Argv is an array of values passed into the module when launched.

// *** example of a template string ***
// var first = 'Alex';
// var last = 'Smith';
// console.log(`This is much cleaner than using pluses. Thanks to ${first} ${last} for showing me this!!`);

// *** Timers ***
// var waitInterval = 10;
// var waitTime = 3000;
// var currentTime = 0;

// function waitTimePercentage(p) {
//     process.stdout.clearLine();
//     process.stdout.cursorTo(0);
//     process.stdout.write(`Just a little more time, you are ${p}% of the way there!`);
// };

// setInterval(function(){
//     currentTime += waitInterval;
//     var percentage = Math.floor((currentTime/waitTime) * 100); 
//     waitTimePercentage(percentage);
// }, waitInterval);

// setTimeout(function() {
//     waitTimePercentage(100);
//     console.log(`\n\nCongratulations your wait is over!!`);
//     process.exit();
// }, waitTime);

// *** Node.js lesson on handling arguments ***
// var argv = require('minimist')(process.argv.slice(2));

// for (var i = 0; i < argv.times; i++) {
//     console.log(argv._[0] + ' on the loop number ' + (i + 1));
// }

// *** Node.js lesson on using jquery ** Not Functional ** Fails in JQuery ***
// var argv = require('minimist')(process.argv.slice(2)),
//        $ = require('jquery'),
//       fs = require('fs');

// var file = argv._[0];

// var html = fs.readFileSync(file, 'UTF-8');

// $(html).find('p').each(function(index)
//                         {
//                             var context = $(this).html();
//                             console.log('Paragraph '+ (index + 1) + ': ' + content);
// });



// var bike = {
//     wheelSize : '27.5',
//     frame : {
//         material : 'Carbon',
//         size : 'Medium'
//     },
//     type : 'Mountain',
//     brand : 'Santa Cruz',
//     model : 'Nomad',
//     comments : 'Best mountain bike made!'
// }

// console.log(bike.frame.material);

// var os = require('os');

// var message = 'This version of Node.JS is ' + process.version + ' and is running on ' + os.type() + ' operating system.';

// console.log(message);