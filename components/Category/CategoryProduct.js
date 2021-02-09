import styles from './Category.module.css'

export default function CategoryProduct({ data }){
    console.log(data);

    return(
        <div className={styles.CategoryProduct}>
            <img src={data.small_image.url} alt={data.small_image.label} />
        </div>
    )
}