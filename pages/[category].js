import { getAllCategories, getCategoryData, now } from './../gql/categories'
import {default as CategoryComponent} from './../components/Category/Category'

export default function Category({ data, time }){
    return <CategoryComponent data={data} time={time} />
}

/**
 * In this function, we need to return a list of possible values for id.
 */
export async function getStaticPaths() {
    const data = await getAllCategories();

    const paths = [];

    data.categoryList[0].children.forEach(category => {
      paths.push({
        params: {
          category: category.url_path,
        }
      })
    });

    return {
      paths: paths,
      // Info about fallback: https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details
      fallback: false
    }
  }

  /**
 * To fetch necessary data for the blog post with a given id.
 * `getStaticProp`s is given `params`, which contains id (because the file name is [id].js)
 */
export async function getStaticProps({ params }) {
    const data = await getCategoryData(params.category);
    const time = now();
    return {
      props: {
        data: data,
        time: time
      },
      revalidate: 60
    }
}