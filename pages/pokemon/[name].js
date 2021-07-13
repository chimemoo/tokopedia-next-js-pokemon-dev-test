import client from '../../graphql/client';
import { GET_POKEMON } from '../../graphql/query';

export default function Pokemon() {
  return <div></div>;
}

export async function getServerSideProps(context) {
  const {
    query: { name },
  } = context;

  const { pokemon } = await client.query({
    query: GET_POKEMON,
    variables: {
      name,
    },
  });

  return {
    props: {
      pokemon,
    },
  };
}
