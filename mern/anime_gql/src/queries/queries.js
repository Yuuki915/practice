import { gql } from "@apollo/client";

const getAnimeQuery = gql`
  {
    animes {
      name
      id
    }
  }
`;

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const addAnimeMutation = gql`
  mutation {
    addAnime(name: "", genre: "", authorId: "") {
      name
      id
    }
  }
`;

export { getAnimeQuery, getAuthorsQuery, addAnimeMutation };
