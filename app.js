//Book Constructor
function Book(title, author, isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;    
}

//UI Constructor
function UI(){

    //Add Book to List
    UI.prototype.addBookToList=function(book){
        //console.log(book);
        const list=document.getElementById('book-list');

        //Create tr Element
        const row=document.createElement('tr');
        console.log(row);

        //Insert Cols
        row.innerHTML=`
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>` ;
        console.log(row);   
        
        list.appendChild(row);
       
    }
}

UI.prototype.clearFields = function(){
    document.getElementById('title').value ='';
    document.getElementById('author').value ='';
    document.getElementById('isbn').value ='';
}

//Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    //console.log('Test');
    const title=document.getElementById('title').value,
            author=document.getElementById('author').value,
            isbn=document.getElementById('isbn').value;
        
    //console.log(title+" "+author+" "+isbn);

    //Instantiate book
    const book=new Book(title, author, isbn);
    //console.log(book);

    //Instantiate UI
    const ui=new UI();
    //console.log(ui);

    //Add book to List
    ui.addBookToList(book);

    //Clear field
    ui.clearFields();

    e.preventDefault();
});