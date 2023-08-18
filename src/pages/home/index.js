import styles from "./hp.module.css"

const Home = () => {
    
    return (
    <>
    <h2>Homepage</h2>
        <div className={styles.wrap}>
            <img src="https://picsum.photos/450/450?random=1" alt="random image"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu tincidunt eros, ac hendrerit orci. Integer dictum imperdiet fringilla. Donec vel pulvinar leo. Aliquam sit amet dui hendrerit, ornare tortor ut, aliquet mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean convallis, sem id faucibus egestas, purus tortor aliquam neque, vitae sollicitudin ipsum arcu non nunc. Vivamus sed ornare ex, vel feugiat augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi libero enim, molestie et eleifend sit amet, feugiat quis mi. Vestibulum purus turpis, varius eu elementum non, interdum et tellus.</p>
        </div>
    </>

    )
}

export default Home