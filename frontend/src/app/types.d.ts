declare type ButtonProps = {
    variant: 'light' | 'blue' | 'orange'
    children: React.ReactNode | string
    type?: 'button' | 'submit' | 'reset' | 'link'
    className?: string
    onClick?: () => void
    maxwidth?: string
    href?: string
}

declare interface Card {
    id: number;
    owner_name: string;
    cpf_owner: string;
    name_in_card: string;
    card_number: string;
    expires_month: string;
    expires_year: string;
    cvv: string;
    user_id: number;
}

declare interface Address {
    id: number;
    address: string;
    country: string;
    state: string;
    zip: string;
    city: string;
    receiver_name: string;
    receiver_cpf: string;
    user_id: number;
}

declare interface Client {
    id: number;
    username: string;
    email: string;
    date_of_birth: string | null;
    cards: Card[];
    address: Address[];
    orders: any[]; 
}

declare interface ItemProps {
    name: string;
    imageUrl: string;
    rating: number;
    currentPrice: number;
    discount: number;
    lastPrice: number;
}

declare interface ItemsListProps {
    category: string;
}