const fs = require("fs");
const chalk = require('chalk')


const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote=notes.find((note)=>note.title==title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse.bold("New note added"))
    } else {
        console.log(chalk.red.inverse.bold("note already exist"))
    }
    saveNotes(notes);
}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON)
}
const loadNotes =  () =>{
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (e) {
        return []
    }

}
//remove notes
const removeNote = (title) => {
    const notes = loadNotes()
    const existNote = notes.filter(function (note) {
        return note.title !== title
    })
    if (notes.length > existNote.length) {
        console.log(chalk.red.inverse.bold("Note removed"))
        saveNotes(existNote);
    } else {
        console.log(chalk.green.inverse.bold("Nothin remove"))
    }
}


const listNotes=()=>{
    const notes=loadNotes()
    console.log(chalk.blue.inverse.bold("Your notes:"))
    notes.forEach((note) => {
        console.log(chalk.green.inverse.bold(note.title))
        
    });
    
}
const readNotes=(title)=>{
    const notes=loadNotes()
    const note=notes.find((note)=>note.title==title)
    if (note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse.body("Note not found"))

    }
}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNotes,
    readNotes:readNotes
}