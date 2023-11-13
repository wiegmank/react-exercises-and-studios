export default function BookList() {
   let pageTitle = "This is a Book List";
   let book1 = "https://th.bing.com/th/id/R.12e490ae9c3a33406e46f19e31c9e40f?rik=RE74%2fh1WidzE8g&pid=ImgRaw&r=0";
   let book2 = "https://49thshelf.com/var/ezflow_site/storage/images/books/t/the-little-book-of-stress-relief3/9781770850156_cover/365261086-1-eng-CA/9781770850156_cover_wide_960.jpg";
   let book3 = "https://i.pinimg.com/originals/45/ad/ab/45adab601f841a563e3d4533abde6fa4.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Learn Javascript" />
         <img src={book2} alt="Goodbye Stress" />
         <img src={book3} alt="Hello new career" />
      </div>      
   );
}