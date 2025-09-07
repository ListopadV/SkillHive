

export const Section = ({ children, style, className }: { children: React.ReactNode, style?: React.CSSProperties, className?: string }) => {

    return (
        <section className={`bg-base-dark relative w-full h-min-screen ${className}`} style={style}>
            {children}
        </section>  
    )
}