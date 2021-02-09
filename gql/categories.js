import { gql } from '@apollo/client';
import client from './../lib/apolloClient'

export async function getAllCategories(){
    const { data } = await client.query({
        query: gql`
          query AllCategories {
            categoryList {
                children {
                  id
                  name
                  url_path
                }
              }
            }
        `
      });

    return data;
}

export async function getCategoryData(slug){
    const { data } = await client.query({
        query: gql`
          query GetCategory($url_key: String!){
              categoryList(filters: {url_key: {eq: $url_key}}) {
                name
                products {
                  items {
                    id
                    small_image {
                      url
                      label
                    }
                    url_key
                    name
                  }
                }
              }
          }
      `,
      variables: {
        url_key: slug
      }
      });

    return data;
}

  