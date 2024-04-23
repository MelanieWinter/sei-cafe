import { useState, useEffect } from 'react';
import './OrderHistoryPage.css';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import Logo from '../../components/Logo/Logo';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function OrderHistoryPage({ user, setUser }) {
  const [orders, setOrders] = useState([])

  // useEffect(function() {
  //   async function getOrders() {
  //     const orders = await ordersAPI.getOrders()
  //     setOrders(orders)
  //   }
  //   getOrders()
  // }, [])

  useEffect(() => {
    async function getOrders() {
      try {
        const orders = await ordersAPI.getOrders();
        setOrders(orders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    }
    getOrders();
  }, []);

  console.log('BODY.ORDERS', orders);

  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <a className="button btn-sm" href="/orders/new">NEW ORDER</a>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      {/* <OrderDetail order={order}/> */}
    </main>
  );
}