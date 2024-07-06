import BusinessNav from '@/app/Components/BusinessNav';
import * as S from '@/app/Styles/business';
import { useState } from 'react';

interface Order {
    id: number;
    name: string;
    status: string;
    buyer: string;
    products: {
        id: number;
        name: string;
        quantity: number;
    }[];
    payment_method: string;
    order_address: string;
}

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    description: string;
    current_price: number;
    discount: number;
    last_price: number;
}

const Dashboard = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [products, setProducts] = useState<Product[]>([
        {
            id: 1,
            name: 'Produto Ilustrativo',
            category: 'Eletrônicos',
            price: 299.99,
            description: 'Um ótimo produto eletrônico.',
            current_price: 249.99,
            discount: 50,
            last_price: 299.99
        }
    ]);

    return (
        <S.DashboardContainer>
            <BusinessNav />
            <S.MainContent>
                <h2>Bem-vindo ao Painel Administrativo</h2>
                <S.Section>
                    <S.ItemContainer>
                        <S.ItemHeader>
                            <h3>Total de Vendas</h3>
                        </S.ItemHeader>
                        <S.ItemBody>
                            <p>R$ 2000,00</p>
                        </S.ItemBody>
                    </S.ItemContainer>
                    <S.ItemContainer>
                        <S.ItemHeader>
                            <h3>Total de Pedidos</h3>
                        </S.ItemHeader>
                        <S.ItemBody>
                            <p>43</p>
                        </S.ItemBody>
                    </S.ItemContainer>
                    <S.ItemContainer>
                        <S.ItemHeader>
                            <h3>Vendas da Semana</h3>
                        </S.ItemHeader>
                        <S.ItemBody>
                            <p>R$ 340,00</p>
                        </S.ItemBody>
                    </S.ItemContainer>
                    <S.ItemContainer>
                        <S.ItemHeader>
                            <h3>Pedidos da Semana</h3>
                        </S.ItemHeader>
                        <S.ItemBody>
                            <p>8</p>
                        </S.ItemBody>
                    </S.ItemContainer>
                    <S.ItemContainer>
                        <S.ItemHeader>
                            <h3>Seus Produtos</h3>
                        </S.ItemHeader>
                        <S.ItemBody>
                            <p>48</p>
                        </S.ItemBody>
                    </S.ItemContainer>
                    <S.ItemContainer>
                        <S.ItemHeader>
                            <h3>Produto mais vendido</h3>
                        </S.ItemHeader>
                        <S.ItemBody>
                            <S.BestSeller>
                                <h2>{products[0].name}</h2>
                                <img src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6416/6416171_sd.jpg' alt={products[0].name} />
                            </S.BestSeller>
                        </S.ItemBody>
                    </S.ItemContainer>
                </S.Section>
            </S.MainContent>
        </S.DashboardContainer>
    );
};

export default Dashboard;
