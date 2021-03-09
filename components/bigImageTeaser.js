function bigImageTeaser({ displayTitle, image, url, description }) {

    var cssContainer = "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"
    var cssCardCompCont = "text-center relative max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"
    var cssCardCompImg = "inline-block"
    var cssCardCompTitle = "text-white block text-3xl"
    var cssCardCompDescription = "text-white block text-lg"
    var cssCardTextCont = "absolute left-2/4 top-2/4  transform -translate-x-1/2 -translate-y-1/2"
    return (
        <a href="">
            <div className={cssContainer}>
                <div className={cssCardCompCont}>
                    <img className={cssCardCompImg} alt={displayTitle} src={image}/>
                    <div className={cssCardTextCont}>
                        <h2 className={cssCardCompTitle}>{displayTitle}</h2>
                        <p className={cssCardCompDescription}>{description}</p>
                    </div>
                </div>
            </div>
        </a>
    )
  }
  
  export default bigImageTeaser