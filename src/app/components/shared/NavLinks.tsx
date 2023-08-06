import {FC} from 'react'

const NavLinks: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="leading-[96px] text-center hover:border-b-2 hover:border-black">
            {children}
        </div>
    )
}
export default NavLinks;