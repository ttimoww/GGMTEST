import React from 'react';
import { withApollo } from './../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import { ALL_CATEGORIES } from './../gql/categories';

const Home = () => {
    const { loading, error, data } = useQuery(ALL_CATEGORIES);
    if (error) return <h1>Error</h1>;
    if (loading) return <h1>Loading...</h1>;
    if(data) console.log(data);
    return (
        <>
            <h1>
                Homepage
            </h1>
            
        </>
    );
};

export default withApollo()(Home);