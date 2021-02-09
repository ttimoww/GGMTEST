import styles from './Category.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function CategoryProduct({ data }){
    return(
        <Link href={data.url_key}>
            <div className={styles.CategoryProduct}>
                <Image
                    src={data.small_image.url}
                    alt={data.small_image.label}
                    width={500}
                    height={500}
                />
                <p>{data.name}</p>
            </div>
        </Link>
    )
}