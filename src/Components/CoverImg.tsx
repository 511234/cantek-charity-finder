
export const CoverImg = ({children, imgUrl}) => {
    return (
        <div className={`bg-cover bg-center h-screen transition-all duration-1000`} style={{
            backgroundImage: `url(${imgUrl})`
        }}>
            {children}
        </div>
    )
}