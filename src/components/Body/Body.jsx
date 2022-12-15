import React from "react";
import s from "./Body.module.css"

export default function Body({children}) {
    return(
        <div className={s.content}>
          <div>{children}</div>
      </div>
    )
}