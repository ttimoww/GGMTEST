import styles from './Category.module.css'
import Link from 'next/link'

export default function CategoryProduct({ data }){
    return(
        <Link href={data.url_key}>
            <div className={styles.CategoryProduct}>
                <img src={data.small_image.url} alt={data.small_image.label} />
            </div>
        </Link>
    )
}