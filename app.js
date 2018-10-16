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

//Show Alert
UI.prototype.showAlert=function(message, className){
    //Create div
    const div=document.createElement('div');
    //Add Classes
    div.className=`alert ${className}`;
    //Add text
    div.appendChild(document.createTextNode(message));
    //Get Parent
    const container=document.querySelector('.container');
    //Get Form
    const form=document.querySelector('#book-form');
    //Inser Alert
    container.insertBefore(div, form);
    //Time out After 3 second
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);

}

//Clear Field
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

    //Validate
    if(title === '' || author==='' || isbn === ''){
        //alert('Failed');
        //Error alert
        ui.showAlert('Please Fill in all field', 'error');
    }else{
        //Add book to the List
        ui.addBookToList(book);
    
        //Show Success
        ui.showAlert('Book Added!', 'success');
                
        //Clear field
        ui.clearFields();
    }

    e.preventDefault();
});