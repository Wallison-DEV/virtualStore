import Item from '../Item';
import * as S from './styles';

const ItemsList: React.FC<ItemsListProps> = ({ category }) => {
    // Aqui você deve fazer a lógica para buscar os itens do backend baseados na categoria
    // Por exemplo, fazer uma requisição HTTP para obter os dados correspondentes

    // Exemplo de array de itens para demonstração
    const items: ItemProps[] = [
        {
            name: 'Item 1',
            imageUrl: 'https://via.placeholder.com/150',
            rating: 4.5,
            currentPrice: 199,
            discount: 30,
            lastPrice: 229,
        },
        {
            name: 'Item 2',
            imageUrl: 'https://via.placeholder.com/150',
            rating: 4.2,
            currentPrice: 149,
            discount: 20,
            lastPrice: 169,
        },
    ];

    return (
        <S.StyledItemsList>
            {items.map((item, index) => (
                <div key={index}>
                    <Item
                        name={item.name}
                        imageUrl={item.imageUrl}
                        rating={item.rating}
                        currentPrice={item.currentPrice}
                        discount={item.discount}
                        lastPrice={item.lastPrice}
                    />
                </div>
            ))}
        </S.StyledItemsList>
    );
};

export default ItemsList;
