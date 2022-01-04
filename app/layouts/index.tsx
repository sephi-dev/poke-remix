import {FunctionComponent} from "react";

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <section className="bg-slate-900 fixed inset-5 text-white p-5">
      {children}
   </section>
  )
}