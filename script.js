window.addEventListener("DOMContentLoaded", () => {
    let noteValues = JSON.parse(localStorage.getItem("notes")) || []
    let cards = document.querySelector(".cards");
    noteValues.forEach(note => {
        createNote(note.textVal)
    });

    let addBtn = document.querySelector(".add-btn");

    addBtn.addEventListener("click", () => {
        createNote("");
    })

    cards.addEventListener("click", function(event){
        if(event.target.classList.contains("save")){
            const noteObj = {
                id : noteValues.length + 1,
                textVal : event.target.parentElement.parentElement.previousElementSibling.value
            }
            noteValues.push(noteObj);
            saveData();
        }
        else if(event.target.classList.contains("delete")){
            noteValues = noteValues.filter((item) => item.textVal !== event.target.parentElement.parentElement.previousElementSibling.value)
            saveData()
            event.target.parentElement.parentElement.parentElement.remove();
        }
    })

    function saveData(){
        console.log(noteValues)
        localStorage.setItem("notes", JSON.stringify(noteValues));
    }

    function createNote(text){
        let newNote = document.createElement("div");
        newNote.classList.add("note");
        newNote.innerHTML = `
                <textarea name="" id="" class="text">${text}</textarea>
                <div class="modify-panel">
                    <button>
                        <img src="assets/save.png" alt="" class="save">
                    </button>
                    <button>
                        <img src="assets/delete.png" alt="" class="delete">
                    </button>
                </div>`
        cards.appendChild(newNote);
    }
})