document.getElementById('formNote').addEventListener('submit', saveNote)

function saveNote() {
    let description = document.getElementById('description').value

    const note = {
        description
    };

    if (localStorage.getItem('notes') === null) {
        let notes = [];
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
    } else {
        let notes = JSON.parse(localStorage.getItem('notes'));
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes))
    }

    getNotes();
  
}

function getNotes() {
    let notes = JSON.parse(localStorage.getItem('notes'));
    let notesView = document.getElementById('notes');

    notesView.innerHTML = '';

    for (let i = 0; i < notes.length; i++) {
        let description = notes[i].description;
        notesView.innerHTML += `<div class = "card">
        <p> ${description}</p>
        <button type="submit" onclick ="deleteNotes('${description}')" >Eliminar</button>
        </div>`
    }
}

function deleteNotes(description) {
    let notes = JSON.parse(localStorage.getItem('notes'));
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].description === description) {
            notes.splice(i, 1);
        }
    }
    localStorage.setItem('notes', JSON.stringify(notes));
    getNotes();
}

getNotes();
 

/* localStorage.setItem('tasks', JSON.stringify(task)); //Lo trasforma de tipo objeto a string
  localStorage.getItem('tasks', JSON.parse(task)); //Lo devuelve a tipo objeto*/