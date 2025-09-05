

export const Container = ({ children, style, className }: { children: React.ReactNode, style?: React.CSSProperties, className?: string }) => {

    return (
        <div className={`px-4 sm:px-14 ${className}`} style={style}>
            {children}
        </div>
    )
}