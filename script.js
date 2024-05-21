// 页面加载时，从localStorage加载笔记
document.addEventListener('DOMContentLoaded', function() {
    const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    savedNotes.forEach(note => {
        const noteElement = createNoteElement(note.title, note.content);
        document.getElementById('notesList').appendChild(noteElement);
    });
});

document.getElementById('noteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('noteTitle').value;
    const content = document.getElementById('noteContent').value;

    if (title || content) {
        const noteElement = createNoteElement(title, content);
        document.getElementById('notesList').appendChild(noteElement);

        // 保存到localStorage
        const note = { title, content };
        let notes = JSON.parse(localStorage.getItem('notes') || '[]');
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));

        // 清空输入框
        document.getElementById('noteTitle').value = '';
        document.getElementById('noteContent').value = '';
    }
});

// ... createNoteElement 函数保持不变 ...
function createNoteElement(title, content) {

    const noteDiv = document.createElement('div');

    noteDiv.classList.add('note');


    const header = document.createElement('h3');

    header.textContent = title;

    noteDiv.appendChild(header);


    const para = document.createElement('p');

    para.textContent = content;

    noteDiv.appendChild(para);


    // 这里可以添加编辑和删除按钮的逻辑

    // 例如:

    // const editButton = document.createElement('button');

    // editButton.textContent = '编辑';

    // noteDiv.appendChild(editButton);

    // 

    // const deleteButton = document.createElement('button');

    // deleteButton.textContent = '删除';

    // noteDiv.appendChild(deleteButton);


    return noteDiv;

}
