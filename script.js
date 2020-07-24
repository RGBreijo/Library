

let myLibary = [];

let formAddBtnm = document.querySelector("#addBtnInForm").addEventListener('click', addBookToLibrary);

createBookCards();


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


/**
 *  Makes a book object out of the user informaiton 
 */
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

    myLibary.push(new Book(bookTitle, bookAuthor, pagesRead, read));
    // console.log(myLibary[0].title);
}





function createBookCards()
{

    let similarDiv = ["title-container", "Author-container", "Pages-container"];

    let bookInfoContainer = document.createElement("div");
    bookInfoContainer.classList.add("bookInfoBlock");


    for(classNameIndex = 0; classNameIndex < similarDiv.length; classNameIndex++)
    {
        let bookTitleContainer = document.createElement("div");
        bookTitleContainer.classList.add(similarDiv[classNameIndex]);
        
        for(k = 0; k < 2; k++)
        {
            bookStyleDiv = document.createElement("div");
            bookStyleDivContent = document.createElement("p");
            bookStyleDivContent.textContent = "Hello"; 
            bookStyleDiv.appendChild(bookStyleDivContent);
    
            bookTitleContainer.appendChild(bookStyleDiv);
        }

        bookInfoContainer.appendChild(bookTitleContainer);
    }


        // read-container section 
        readContainer = document.createElement("div");
        readContainer.classList.add("read-container");

        readContainerLabel = document.createElement("p");
        readContainerLabel.textContent = "Read:"; 

        readContainerContentHolder = document.createElement("div");
        readContainerContentHolder.appendChild(readContainerLabel);

        readContainer.appendChild(readContainerContentHolder);


        btn = document.createElement("button");
        btn.textContent = "Yes"; 

        BtnContainerHolder = document.createElement("div");
        BtnContainerHolder.appendChild(btn);

        readContainer.appendChild(BtnContainerHolder);

        bookInfoContainer.appendChild(readContainer);


        // Delete Btn 

        deleteBtnContainer = document.createElement("div");
        deleteBtnContainer.classList.add("delete-container");


        deleteBtn = document.createElement("button");
        deleteBtn.textContent = "delete"; 
        deleteBtnContainer.appendChild(deleteBtn);

        bookInfoContainer.appendChild(deleteBtnContainer);

    console.log(bookInfoContainer);


}





