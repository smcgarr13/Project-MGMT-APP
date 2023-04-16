import Header from './components/Header';
import { ApolloProvider, ApolloClient, InMemoryCache }
from '@apollo/client';
import Client from './components/Clients';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
    <ApolloProvider client={client}>
    <Header />
    <div className="container">
      <h1>Hello World!!</h1>
    </div>
    </ApolloProvider>
    </>
  );
}

export default App;
