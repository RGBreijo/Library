

window.addEventListener("load", displayLocalStoageBookArray);
let myLibary = [];

let formAddBtnm = document.querySelector("#addBtnInForm").addEventListener('click', addBookToLibrary);
let userInputBoxExitBtn = document.querySelector("#input-box-exit-btn").addEventListener('click', exitInputBox);
let addBookBtn = document.querySelector("#addBookBtn").addEventListener('click', showInputBox);


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

    if(bookTitle === "" || bookAuthor === "" || pagesRead === "" || read === undefined)
    {
        // do nothing 
    }else
    {
        myLibary.push(new Book(bookTitle, bookAuthor, pagesRead, read)); 
        createBookCards(bookTitle, bookAuthor, pagesRead, read);
        console.log(myLibary);
        saveData();
    }
}


function clearInputBox()
{
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = ""; 
    document.querySelector("#readTrue").checked = null; 
    document.querySelector("#readFalse").checked = null; 
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

    for(let classNameIndex = 0; classNameIndex < similarDiv.length; classNameIndex++)
    {
        let bookTitleContainer = document.createElement("div");
        bookTitleContainer.classList.add(similarDiv[classNameIndex]);
        
        for(let k = 0; k < 2; k++)
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
        deleteBtn.classList.add("deleteBtn");
        deleteBtnContainer.appendChild(deleteBtn);

        bookInfoContainer.appendChild(deleteBtnContainer);

        let bookInfoBlocksContainer = document.querySelector(".bookInfoBlocksContainer");
        bookInfoBlocksContainer.appendChild(bookInfoContainer);

        // Each time it is created need to add it to the btn 
       let delBox =  Array.from(document.querySelectorAll(".deleteBtn"));
       for(let i = 0; i < delBox.length; i++)
       {
            delBox[i].addEventListener('click', deleteBookBox);
       }

    
}


function exitInputBox()
{
    let inputBoxContainer = document.querySelector(".userInputBoxcontainer");
    inputBoxContainer.style.visibility = "hidden";
}

function showInputBox()
{
    clearInputBox();
    let inputBoxContainer = document.querySelector(".userInputBoxcontainer");
    inputBoxContainer.style.visibility = "visible";
}

function deleteBookBox(e)
{
    e = e || window.event;  
    e = e.target || e.srcElement;

    let boxToDelete = e.parentElement.parentElement;
    let bookTitle = e.parentElement.parentElement.firstElementChild.lastElementChild.firstElementChild.textContent;

    boxToDelete.style.display = "none";
    removeItemFromArray(bookTitle);
}




function saveData()
{
    localStorage.setItem("myLibary", JSON.stringify(myLibary));
}

function displayLocalStoageBookArray()
{

    myLibary = JSON.parse(localStorage.getItem("myLibary"));


    if(myLibary != null)
    {

        for(let i = 0; i < myLibary.length; i++)
        {
            let title = myLibary[i].title;
            let author = myLibary[i].author;
            let pages = myLibary[i].pages;
            let read = myLibary[i].read;

            createBookCards(title, author, pages, read); 
        }
    }
}


function removeItemFromArray(title)
{
    
    let amountOfBooks = myLibary.length;
    let bookTracker = 0; 
    let foundBook = false; 

    while(!foundBook && bookTracker < amountOfBooks)
    {
        if(myLibary[bookTracker].title === title)
        {
            myLibary.splice(bookTracker, 1);
            foundBook = true; 
            saveData();
        }else
        {
            bookTracker++;
        }
          
    }
}



