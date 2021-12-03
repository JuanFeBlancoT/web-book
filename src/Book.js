import { getDatabase, ref, push, set } from 'firebase/database';

export class Book {
    constructor(bookX) {
        this.book = bookX;
    }

    render(){
        //Box
        let box = document.createElement("div");
        box.className = "bookBox";

        //Book name
        let bookName = document.createElement("h3");
        bookName.className = "bookName";
        bookName.innerHTML = this.book.name;

        //Book average
        let average = document.createElement("p");
        average.className = "average";
        average.innerHTML = "Average review: "+this.book.average;

        //BUTTONS
        //B1
        let btn1 = document.createElement("button");
        btn1.className = "addBtn";
        btn1.innerHTML = "Agregar 1 estrella";

         //B2
        let btn2 = document.createElement("button");
        btn2.className = "addBtn";
        btn2.innerHTML = "Agregar 2 estrellas";

        //B3
        let btn3 = document.createElement("button");
        btn3.className = "addBtn";
        btn3.innerHTML = "Agregar 3 estrellas";

        //B4
        let btn4 = document.createElement("button");
        btn4.className = "addBtn";
        btn4.innerHTML = "Agregar 4 estrellas";

        //B5
        let btn5 = document.createElement("button");
        btn5.className = "addBtn";
        btn5.innerHTML = "Agregar 5 estrellas";


        btn1.addEventListener("click", (e, ev)=>{
            const db = getDatabase();
            const newScoreRef = push(ref(db, 'books/' + this.book.id + '/scores'));
            set(newScoreRef, score);

            //Calculate average
            this.getAverage(average);
        })

        box.appendChild(bookName);
        box.appendChild(average);
        box.appendChild(btn1);
        box.appendChild(btn2);
        box.appendChild(btn3);
        box.appendChild(btn4);
        box.appendChild(btn5);

        return box;
    }

}

