const book = document.getElementById('book');
const fontSize = document.querySelectorAll ('.font-size');
console.log (fontSize);

fontSize.forEach(function (item) {
    item.onclick = () =>{
    const activeFontSize = document.querySelector('.font-size_active');
    activeFontSize.classList.toggle("font-size_active");
    item.classList.toggle("font-size_active");
    
    if (item.classList.contains('font-size_small')){
        book.classList.remove('book_fs-big');
        book.classList.add('book_fs-small');
    } else if ( item.classList.contains('font-size_big')) {
        book.classList.remove('book_fs-small');
        book.classList.add('book_fs-big');
    } else if (item.classList.contains('font-size_small') == false && item.classList.contains('font-size_big') == false ) {
        book.classList.remove('book_fs-small');
        book.classList.remove('book_fs-big');
    }
    return false;
};
})