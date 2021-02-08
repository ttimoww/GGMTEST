import { getAllCategories } from './../lib/categories.js'

export default function Category(){
    return(
        <div className="Category">
            <span>category</span>
        </div>
    )
}

/**
 * In this function, we need to return a list of possible values for id.
 */
export async function getStaticPaths() {
    const paths = getAllCategories()
    return {
      paths,
      // Info about fallback: https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details
      fallback: false
    }
  }

  /**
 * To fetch necessary data for the blog post with a given id.
 * `getStaticProp`s is given `params`, which contains id (because the file name is [id].js)
 */
export async function getStaticProps({ params }) {
    //const postData = await getPostData(params.id)
    return {
      props: {
        //postData
      }
    }
  }