// javascript for create.html
const form=document.querySelector('form');
const createBook=async(e)=>{
    e.preventDefault();
     let genre= form.genere.value.split(',');
//     const newBook={
//         isbn: form.isbn.value,
//         title: form.title.value,
//         author: form.author.value,
//         pages: form.pages.value,
//         price: form.price.value,
//         rating: form.rating.value,
//         votes: form.votes.value,
//         description: form.description.value,
//         tags: genre,
//         series: form.series.value,
//         seriesIndex: form.seriesIndex.value,
//         releaseDate: form.date.value,
//         cover: form.cover.value

//     }
//     console.log(newBook);
//     await fetch(' http://localhost:3000/books',{
//         method: 'POST',
//         body: JSON.stringify(newBook),
//         headers: {'Content-Type':'application/json'}
//     });
//     window.location.replace('/index.html')
    axios.post('http://localhost:3000/books',{
        isbn: form.isbn.value,
        title: form.title.value,
        author: form.author.value,
        pages: form.pages.value,
        price: form.price.value,
        rating: form.rating.value,
        votes: form.votes.value,
        description: form.description.value,
        tags: genre,
        series: form.series.value,
        seriesIndex: form.seriesIndex.value,
        releaseDate: form.date.value,
        cover: form.cover.value
    }).then(response=>{
        console.log(response.data);
    }).catch(err=>{
        console.log(err,err.response);
    })
    window.location.replace('/index.html');
 }
 form.addEventListener('submit',createBook);
