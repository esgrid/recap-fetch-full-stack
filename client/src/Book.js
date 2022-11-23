export default function Book ({title, author}){
    return(
        <section className='book'>
            <h2>{title}</h2>
            <h3>by {author}</h3>
        </section>
    )
}