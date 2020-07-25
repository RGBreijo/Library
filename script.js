

let myLibary = [];

let formAddBtnm = document.querySelector("#addBtnInForm").addEventListener('click', addBookToLibrary);

// createBookCards("Harry Potter", "Rollowing", 243, "Yes"); // add the read status

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

    myLibary.push(new Book(bookTitle, bookAuthor, pagesRead, read)); // do a check for if .value is empty then do nothing 
    displayBooksInArray();
}


function displayBooksInArray()
{
    for(i = 0; i < myLibary.length; i++)
    {
        let title = myLibary[i].title;
        let author = myLibary[i].author;
        let pages = myLibary[i].pages;
        let read = myLibary[i].read;

        createBookCards(title, author, pages, read);
    }
}







/**
 * Creates a bookCard on the webpage 
 * 
 * @param {*} titleContent The book title 
 * @param {*} authorContent The name of the author 
 * @param {*} numberOfPages The number of pages 
 * @param {*} readStatus If the book as been read 
 */

function createBookCards(titleContent, authorContent, numberOfPages, readStatus)
{

    let similarDiv = ["title-container", "Author-container", "Pages-container"];
    let similarDivLabel = ["Title: ", "Author: ", "Pages: "];
    let book = [titleContent, authorContent, numberOfPages, readStatus];

    let similarDivTracker = 0; 

    let bookInfoContainer = document.createElement("div");
    bookInfoContainer.classList.add("bookInfoBlock");

    for(classNameIndex = 0; classNameIndex < similarDiv.length; classNameIndex++)
    {
        let bookTitleContainer = document.createElement("div");
        bookTitleContainer.classList.add(similarDiv[classNameIndex]);
        
        for(k = 0; k < 2; k++)
        {
            let content;
            if (k == 0) // title, author, pages
            {
                    content = similarDivLabel[similarDivTracker];
            }else
            {
                content = book[similarDivTracker];
                similarDivTracker++;
            }

            bookStyleDiv = document.createElement("div");
            bookStyleDivContent = document.createElement("p");
            bookStyleDivContent.textContent = content; 
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
        btn.textContent = book[book.length - 1]; 

        BtnContainerHolder = document.createElement("div");
        BtnContainerHolder.appendChild(btn);

        readContainer.appendChild(BtnContainerHolder);

        bookInfoContainer.appendChild(readContainer);


        // Delete Btn 
        deleteBtnContainer = document.createElement("div");
        deleteBtnContainer.classList.add("delete-container");

        deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete"; 
        deleteBtnContainer.appendChild(deleteBtn);

        bookInfoContainer.appendChild(deleteBtnContainer);

        let bookInfoBlocksContainer = document.querySelector(".bookInfoBlocksContainer");
        bookInfoBlocksContainer.appendChild(bookInfoContainer);
}










