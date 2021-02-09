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
                meta_description
                meta_keywords
                meta_title
                description
                products {
                  items {
                    small_image {
                      url
                      label
                    }
                    url_key
                    name
                    meta_description
                  }
                }
              }
          }
      `,
      variables: {
        url_key: 'ggm-it-test'
      }
      });

    return data;
}

export function now(){
  return new Date().toLocaleTimeString();
}
  