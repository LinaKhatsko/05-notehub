import { useState } from 'react'

import css from "./App.module.css";

function App() {
  const queryData = useQuery({
  queryKey: ["articles", topic, currentPage],
  queryFn: () => fetchArticles(topic, currentPage),
  enabled: topic !== "",
  placeholderData: keepPreviousData,
});

  return (
    <div className={css.app}>
      <header className={css.toolbar}>

      </header>
      


</div>
  )
}

export default App
