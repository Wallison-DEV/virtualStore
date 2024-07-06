// src/app/Pages/Orders.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Order {
    id: number;
    order_number: string;
    total_amount: number;
    status: string;
}

const Orders: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get<Order[]>('/api/orders');
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="admin-orders">
            <h2>Orders</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>{order.order_number}</li>
                ))}
            </ul>
        </div>
    );
};

export default Orders;
