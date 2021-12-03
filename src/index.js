import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getFirebaseConfig } from './firebase-config';
import {Book} from './Book';

//Firebase
const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

//attributes
const books = document.getElementById("books_section");

function getBooks(){
    //Get database
    const db = getDatabase();
    const booksRef = ref(db, 'books');

    onValue(booksRef, (snapshot) => {
        //get the specific object content
        const data = snapshot.val();
        console.log(data)
        createBookBoxes(data);
    });
}

function createBookBoxes(data){
    //Verify is not empty
    if(data){
        books.innerHTML = "";
        Object.keys(data).forEach((k, i) => {
            const bookBox = new Book(data[k]);
            books.appendChild(bookBox.render());
        });
    }
}

getBooks();