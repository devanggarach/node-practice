// const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');
// const { chalk } = require("chalk");
// import chalk from 'chalk';
// const validator = require('validator');
// const getNotes = require('./notes');
// const greenMsg = chalk.green('Success!');
// console.log('green message',greenMsg);
// console.log(process.argv);

yargs.command({
    command: 'ls',
    describe: 'List your notes',
    handler: () =>{
        notes.listNotes();
    }
})
yargs.command({
    command: 'read',
    describe: 'Read your notes',
    handler: (argv) =>{
        // console.log("read",argv.title);
        notes.readNote(argv.title);
    }
})



// console.log(yargs.argv);
yargs.command({
    command: 'add',
    describe: 'Adding',
    builder: {
        title: {
            describe: 'Add Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body) ;
    }
}
)

// remove command
yargs.command({
    command: "remove",
    describe: "remove",
    builder: {
        title:{
            describe: 'Remove by title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
})
yargs.parse();


// const msg = getNotes();
// console.log(msg);
// console.log(validator.isEmail('devang@gmail.com'));
// const fs = require('fs');
// // fs.writeFileSync('notes.txt','Hello Devang!');
// fs.appendFileSync('notes.txt','Hello Devang, Learning node.js!')