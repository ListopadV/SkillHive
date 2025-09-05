

export const Section = ({ children, style }: { children: React.ReactNode, style?: React.CSSProperties }) => {

    return (
        <section className="relative my-15 max-md:my-10 w-full h-min-screen" style={style}>
            {children}
        </section>  
    )
}