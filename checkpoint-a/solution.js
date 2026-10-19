import { findAllOrders, findOrderById } from "./orders-db.js";

export async function loadOrders() {
  return await findAllOrders();
}

export function myOrders(orders) {
  return orders.filter(
    order => order.city === "Giza" && order.status === "pending"
  );
}

export function summarize(orders) {
  if (orders.length === 0) {
    return 0;
  }

  return Math.max(...orders.map(order => order.price));
}

export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student}: ${order.item} x${order.quantity}`;
  } catch {
    return `Missing order: ${id}`;
  }
}

export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map(order => ({
      student: order.student,
      item: order.item,
    }))
  );
}