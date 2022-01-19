const yargs = require('yargs');
console.log(yargs.argv);
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
        console.log("Adding new string",argv.title)
    }
})
yargs.parse();