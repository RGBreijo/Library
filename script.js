

let myLibary = [];

let formAddBtnm = document.querySelector("#addBtnInForm").addEventListener('click', addBookToLibrary);




/**
 *  Constructor to create a Book object. 
 * 
 * @param {*} title  Book title 
 * @param {*} author Author of book 
 * @param {*} pages  Number of pages in book 
 * @param {*} read   If the user has read the book 
 */
function Book(title, author, pages, read)
{
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.read = read; 
}


function addBookToLibrary()
{

    // Grab book information 
    let bookTitle = document.querySelector("#title").value;
    let bookAuthor = document.querySelector("#author").value;
    let pagesRead = document.querySelector("#pages").value;
    let read; 


    if (readTrue.checked)
    {
        read = "Yes"; 

    }else if (readFalse.checked)
    {
        read = "No"; 
    }

    // Create a new card and populate it 

}