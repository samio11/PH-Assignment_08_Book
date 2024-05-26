import { toast } from 'react-toastify'

export const getBookInfo = () =>
    {
        let container = []
        const storedBooks = localStorage.getItem('read_books')
        if (storedBooks) {
            container = JSON.parse(storedBooks);
        }
        return container;

    }
export const getWishInfo = () =>
    {
        let container = []
        const storedBooks = localStorage.getItem('wish_books')
        if (storedBooks) {
            container = JSON.parse(storedBooks);
        }
        return container;

    }

export const addBook = (book) =>{
    let container1 = getBookInfo()
    const isExist = container1.find(b=> b.bookId === book.bookId)
    if(isExist){
        return toast.error("This Book is already Bookmarked")
    }
    else{
        container1.push(book)
        localStorage.setItem('read_books', JSON.stringify(container1))
        return toast.success("This Book is Bookmarked")
    }

}
export const addWish = (book) =>{
    let container1 = getWishInfo()
    const isExist = container1.find(b=> b.bookId === book.bookId)
    if(isExist){
        return toast.error("This Book is already Bookmarked")
    }
    else{
        container1.push(book)
        localStorage.setItem('wish_books', JSON.stringify(container1))
        return toast.success("This Book is Wished List")
    }

}

export const removeBookBookmarked = (id) =>{
    let container2 = getBookInfo()
    const remaining = container2.filter(b=>b.id !== id)
    localStorage.setItem('read_books', JSON.stringify(remaining))
    toast.success("Deleted Successfully")
}