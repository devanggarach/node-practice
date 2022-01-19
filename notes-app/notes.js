const fs = require('fs');
const { title } = require('process');
const getNotes = () => {
    return "Hello, Good Morning!";
}

const readNote = (title) => {
    const notes = loadNotes();
    // console.log("notes",notes)
    const note = notes.find((e)=> e.title == title)
    // console.log("note",note)
    
    if(note){
        console.log("title",note.title,"body",note.body);
    }
    else{
        console.log("no data found")
    }

}
const listNotes = () => {
    const notes = loadNotes()
    // console.log(notes);
    notes.forEach(e => {
        console.log("title: ",e.title,"body: ",e.body)
    });
}

const removeNote = (title) => {
    console.log("remove notes")
    const notes = loadNotes();
    keepNotes = notes.filter((e)=>{
        return e.title !== title;
    })
    if(notes.length>keepNotes.length){
        console.log("Note removed");
        saveNotes(keepNotes);
    }else{
        // saveNotes(keepNotes);
        console.log("No data found")
    }
}

const addNote = (title,body) => {
    console.log("addnotes")
    const notes = loadNotes()
    // console.log(notes,typeof(notes))

    // duplicateData = notes.filter((e)=>{
    //     return e.title == title;
    // })
    duplicateData = notes.find((e)=> e.title === title)
    // if(duplicateData.length === 0)
    debugger
    if(!duplicateData){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log("add note",notes);
    }
    else{
        console.log("duplicate title")
    }
}

const saveNotes = (notes) => {
    console.log("save notes",notes)
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);

}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return []
        // console.log("error");
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};