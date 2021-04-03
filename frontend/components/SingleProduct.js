import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { func } from 'prop-types';
import Head from 'next/head';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';

const PRODUCT_STYLES = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: top;
  gap: 2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      id
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    <DisplayError error={error} />;
  }
  const { Product } = data;
  return (
    <PRODUCT_STYLES>
      {/* using next.js when you use Head, it injects what ever you put into the header of the website
        in this case it updates the header on the tab
      */}
      <Head>
        <title>Sick Fits | {Product.name}</title>
      </Head>
      <img
        src={Product.photo.image.publicUrlTransformed}
        alt={Product.photo.altText}
      />
      <div className="details">
        <h2>{Product.name}</h2>
        <p>{Product.description}</p>
      </div>
    </PRODUCT_STYLES>
  );
}
