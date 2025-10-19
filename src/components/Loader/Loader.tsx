import type { JSX } from "react";
import css from "./Loader.module.css";

const Loader = (): JSX.Element => {
   
    return (
        <p className={css.text}>Loading notes, please wait...</p>
    );
};

export default Loader;