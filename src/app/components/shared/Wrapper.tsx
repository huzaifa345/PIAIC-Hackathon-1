import { FC } from "react";

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="max-w-screen-xl mx-auto px-5 sm:px-12 md:px-24">
            {children}
        </div>
    )
}

export default Wrapper;