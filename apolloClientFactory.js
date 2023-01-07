/* eslint-disable import/no-unresolved */
import { InMemoryCache, ApolloClient } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { RetryLink } from '@apollo/client/link/retry';

const retrylink = new RetryLink();
function apolloClientFactory(token) {
    const httpLink = createUploadLink({
        uri: process.env.NEXT_PUBLIC_BASE_URL,
        headers: {
            Authorization: token ? `JWT ${token}` : '',
        },
    });
    const errorLink = onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
            // console.warn('graphQLErrors:', graphQLErrors);
            // eslint-disable-next-line no-console
            console.warn('graphQLErrors:');
        }
        if (networkError) {
            // console.warn('networkError:', networkError);
            // eslint-disable-next-line no-console
            console.warn('networkError:');
        }
    });

    const link = ApolloLink.from([errorLink, retrylink, httpLink]);
    return new ApolloClient({
        link,
        cache: new InMemoryCache(),
    });
}
export default apolloClientFactory;
