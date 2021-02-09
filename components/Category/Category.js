import styles from './Category.module.css'
import CategoryProduct from './CategoryProduct'
import Head from 'next/head'

export default function Category({ data }){

    data = data.categoryList[0];

    return(
        <>
            <Head>
                <title>{data.meta_title}</title>
            </Head>
            <div className="Category">
                <h1>{data.name}</h1>
                <p>{data.description}</p>
            </div>
            <div className={styles.productGrid}>
                {data.products.items.map((product, i) => (
                    <CategoryProduct data={product} key={i} />
                ))}
            </div>
        </>
    )
}