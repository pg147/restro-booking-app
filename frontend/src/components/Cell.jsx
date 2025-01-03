import clsx from "clsx";

export default function Cell ({className, onClick, children}) {
    return(
        <div onClick={onClick} className={clsx("p-2 w-full mx-auto rounded-xl text-center cursor-pointer font-medium lg:hover:bg-tile", className)}>{children}</div>
    )
}
