class MediaItem{
    constructor(title , author , publicationDate, id){
        this.title = title;
        this.author= author;
        this.publicationDate = publicationDate;
        this.id = id;
    }
    getDetail(){
        console.log(`title of ${this.name} is ${this.title} `);
        console.log(`author of ${this.name} is ${this.author} `);
        console.log(`publicationDate of ${this.name} is ${this.publicationDate} `);
        console.log(`id of ${this.name} is ${this.id} `);
    }

    set title (newTitle){
        if(typeof(newTitle) ==="string" && newTitle.length > 0){
            this._title = newTitle ;
        }
        else {
            console.log(`title must contain at least on character`);
            }
    }
    get title(){
        return this._title;
        
    }

    set author(newAuthor){
        if(typeof(newAuthor) === "string" && newAuthor.length > 0){
           this._author = newAuthor;   
        }
        else {
            console.log(`Author must contain at least on character`);
         }
    }

    get author(){
        return this._author;
    }

    set publicationDate(newPublicationDate){
        if(typeof(newPublicationDate) === "string" && newPublicationDate.length > 0){
           this._publicationDate = newPublicationDate;   
        }
        else {
            console.log(`PublicationDate must contain at least on character`);
         }
    }

    get publicationDate(){
        return this._publicationDate;
    }

    set id(newId){
        if(typeof(newId) === "number"){
           this._id =newId;
        }
        else {
            console.log(`id must contain at least one number`);
         }
    }

    get id(){
        return this._id;
    }

}


class Book extends MediaItem{
    name = "book"
    constructor(title , author , publicationDate , id , genre , ISBN){
        super(title , author , publicationDate, id);
        this.genre = genre;
        this.ISBN = ISBN;
    }
    getBookDetall(){
        super.getDetail();
        console.log(`Genre of ${this.name} is ${this.genre}`);
        console.log(`ISBN of ${this.name} is ${this.ISBN}`);
    }
}

class Magazine extends MediaItem{
    name = "Magazine"
    constructor(title , author , publicationDate , id , issueNumber , editor){
        super(title , author , publicationDate, id);
        this.issueNumber = issueNumber;
        this.editor = editor;
    }
    getMagazineDetail(){
        super.getDetail();
        console.log(`issueNumber of ${this.name} is ${this.issueNumber}`);
        console.log(`editor of ${this.name} is ${this.editor}`);
    }

} 

class DVD extends MediaItem{
    name = "DVD"
    constructor(title , author , publicationDate , id , edition){
        super(title , author , publicationDate, id);
        this.edition =  edition;
    }
    getDVDDetail(){
        super.getDetail();
        console.log(`edition of ${this.name} is ${this.edition}`);
    }

}
// const book = new Book("physics" , "noman","14-02-2022",4 ,"fiction","978-0-7432-7356-5");
// book.getBookDetall();
const magazine1 = new Magazine("express" , "ahmad","01-01-2025", 1 ,"January 2025,isue#1","Noman");
// magazine1.getMagazineDetail();
// magazine1.author = "noman";
// console.log(magazine1.author);
magazine1.publicationDate = "01-02-2022";
console.log(magazine1.publicationDate);
console.log(magazine1.id);




const dvd1 = new DVD("The Dark Knight" , "christopher Nolan","july-11-1996",2 ,"wb-12345" , "special Dition");
// dvd1.getDVDDetail();
// dvd1.title = "dvd33f"
// console.log(dvd1.title);
// console.log(dvd1.author);
console.log(dvd1.id);





