import styles from './Category.module.css'

export default function Category({ data }){

    data = data.categoryList[0];

    return(
        <div className="Category">
            <h1>{data.name}</h1>
        </div>
    )
}