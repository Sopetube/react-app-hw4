import style from "./gallery.module.css"

const Gallery = () => {
    return (
    <>
    <h2>Gallery</h2>
    <div className={style.images}>
    <img src="https://picsum.photos/250/250?random=1" alt="random image"/>
    <img src="https://picsum.photos/250/250?random=2" alt="random image"/>
    <img src="https://picsum.photos/250/250?random=3" alt="random image"/>
    <img src="https://picsum.photos/250/250?random=4" alt="random image"/>
    <img src="https://picsum.photos/250/250?random=5" alt="random image"/>
    <img src="https://picsum.photos/250/250?random=6" alt="random image"/>
    <img src="https://picsum.photos/250/250?random=7" alt="random image"/>
    <img src="https://picsum.photos/250/250?random=8" alt="random image"/>
    <img src="https://picsum.photos/250/250?random=9" alt="random image"/>
    </div>
    </>
    )
}

export default Gallery