const Layout = ({children}) => {
    return (
        <div className="flex flex-col w-full min-h-screen">
            {children}
        </div>
    )
}

export default Layout