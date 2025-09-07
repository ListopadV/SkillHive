

export const Container = ({ children, style, className }: { children: React.ReactNode, style?: React.CSSProperties, className?: string }) => {

    return (
        <div className={`w-full px-4 sm:px-14 ${className}`} style={style}>
            {children}
        </div>
    )
}