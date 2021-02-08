import gql from 'graphql-tag';

export function getAllCategories(){
    return ([
    {
      params: {
        category: 'naamstickers',
        magentoId: 1,
      }
    },
    {
      params: {
        category: 'kledingstickers',
        magentoId: 2,
      }
    }
  ])
}

export const ALL_CHARACTERS = gql`
    query allCharacters {
        characters {
            results {
                id
                name
            }
        }
    }
`;
