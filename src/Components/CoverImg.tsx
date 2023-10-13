
export const CoverImg = ({children, imgUrl}) => {
    return (
        <div className={`bg-cover bg-center w-full h-160 transition-all duration-1000`} style={{
            backgroundImage: `url(${imgUrl})`
        }}>
            {children}
        </div>
    )
}