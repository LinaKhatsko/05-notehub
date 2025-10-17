

const NoteList = () => {
    return (
        <ul className={css.list}>
            {/* Набір елементів списку нотаток */}
             {notes.map((note) => (
        <li key={note.id} className={css.listItem}>
    <h2 className={css.title}>{note.title}</h2>
    <p className={css.content}>{note.content}</p>
    <div className={css.footer}>
      <span className={css.tag}>{note.tag}</span>
      <button className={css.button}>Delete</button>
    </div>
                 </li>
                ))}
        </ul>
    );
};

export default NoteList;