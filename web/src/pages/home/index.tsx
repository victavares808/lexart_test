import { ProductsList } from '../../components/ProductsList';
import { SearchBar } from '../../components/SearchBar';
import { HomeContainer } from './style';

export function Home() {
  return (
    <HomeContainer>
      <SearchBar />
      <ProductsList />
    </HomeContainer>
  );
}
