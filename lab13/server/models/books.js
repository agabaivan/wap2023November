let books = [
    {id: 1, title: 'Harry Potter', ISBN: '0747550999', publishedDate: '07/26/1997', author: 'J.K.Rowling'},
    {id: 2, title: 'Peter Pan',  ISBN: '9780060563073', publishedDate:'12/27/1904', author: 'J.M.Barrie'},
    {id: 3, title: 'Aladdin',  ISBN: '1781866333', publishedDate:'03/20/2014', author: 'Hanna Diyab'}
];
let counter = 0;

module.exports = class Book {

    constructor(id, title, ISBN, publishedDate,author){
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    static getAllBooks(){
        return books;
    }

    static getBookById(id){
        return books.find(p => p.id == id);
    }

    save(){
        this.id = counter++;
        books.push(this);
    }

    updateById(id){
        const index = books.findIndex(p => p.id == id);
        if(index > -1){
            this.id = id;
            books[index] = this;
        }else{
            throw new Error(`Book with ID: ${id} cannot find in DB`);
        }
    }

    static deleteById(id){
        const index = books.findIndex(p => p.id == id);
        if(index > -1){
            books.splice(index, 1);
        } else {
            throw new Error(`Book with ID: ${id} cannot find in DB`);
        } 
    }

}