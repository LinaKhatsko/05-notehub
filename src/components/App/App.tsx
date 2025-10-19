import { useState } from 'react'
import SearchBox from '../SearchBox/SearchBox'
import Pagination from '../Pagination/Pagination'
import Modal from '../Modal/Modal'
import Loader from '../Loader/Loader'
import Error from '../Error/Error'
import NoteList from '../NoteList/NoteList'
import type { Note } from "../../types/note";

import css from "./App.module.css";
import NoteList from '../NoteList/NoteList';

function App() {
  // const queryData = useQuery({
//   queryKey: ["articles", topic, currentPage],
//   queryFn: () => fetchArticles(topic, currentPage),
//   enabled: topic !== "",
//   placeholderData: keepPreviousData,
// });

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox />
        <Pagination currentPage={1} totalPage={12} onPageChange={() = {}} />
        <button className={css.button}>Add Note</button>
      </header>
      <Modal />
      <NoteList />


</div>
  )
}

export default App
