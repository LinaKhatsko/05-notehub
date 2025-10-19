import type { JSX } from "react";
import css from "./Loader.module.css";

const Loader = (): JSX.Element => {
   
    return (
        <p className={css.text}>Loading movies, please wait...</p>
    );
};

export default Loader;