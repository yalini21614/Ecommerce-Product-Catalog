import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, Package, Printer, ArrowRight, Home } from 'lucide-react';
import { api } from '../services/api';
import { Order } from '../types';

export const OrderSuccessPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const orders = api.getOrders();
    const found = orders.find(o => o.id === orderId);
    if (found) {
      setOrder(found);
    }
  }, [orderId]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-8">
      {/* Success Banner */}
      <div className="text-center space-y-4">
        <div className="w-20 h-20 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-500 border-4 border-emerald-100 dark:border-emerald-900 flex items-center justify-center mx-auto animate-in zoom-in-75 duration-300">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100">
          Payment Successful & Order Placed!
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto">
          Thank you for your order. We have received your payment and our fulfillment facility is preparing your items for dispatch.
        </p>
        <div className="inline-block bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-xl text-xs font-mono font-bold text-brand-600 dark:text-brand-400">
          Order ID: {orderId || 'ORD-TEST-9921'}
        </div>
      </div>

      {/* Order Receipt Card */}
      {order && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-xs text-slate-400 font-semibold uppercase">Order Placed</span>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{order.date}</p>
            </div>
            <div>
              <span className="text-xs text-slate-400 font-semibold uppercase">Status</span>
              <span className="block text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-0.5 rounded-full mt-0.5">
                {order.status}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 font-semibold uppercase">Payment</span>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase">{order.paymentMethod.replace('_', ' ')}</p>
            </div>
          </div>

          {/* Items */}
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {order.items.map((item, i) => (
              <div key={i} className="py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img src={item.image} alt={item.title} className="w-12 h-12 rounded-lg object-cover bg-slate-100" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">{item.title}</h4>
                    <p className="text-xs text-slate-400">Qty: {item.quantity} {item.selectedColor ? `• ${item.selectedColor}` : ''}</p>
                  </div>
                </div>
                <span className="font-bold text-sm text-slate-900 dark:text-slate-100">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          {/* Customer & Address Details */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600 dark:text-slate-400">
            <div>
              <h5 className="font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-1">Delivering To</h5>
              <p className="font-semibold text-slate-800 dark:text-slate-200">{order.customer.fullName}</p>
              <p>{order.customer.address}</p>
              <p>{order.customer.city}, {order.customer.state} {order.customer.zipCode}</p>
              <p>{order.customer.country}</p>
            </div>
            <div className="space-y-1.5 text-right sm:text-right">
              <div className="flex justify-between sm:justify-end gap-6">
                <span>Subtotal:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">${order.subtotal.toFixed(2)}</span>
              </div>
              {order.discount > 0 && (
                <div className="flex justify-between sm:justify-end gap-6 text-emerald-600">
                  <span>Discount:</span>
                  <span className="font-semibold">-${order.discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between sm:justify-end gap-6">
                <span>Shipping:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">${order.shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between sm:justify-end gap-6">
                <span>Tax:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">${order.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between sm:justify-end gap-6 text-base font-black text-slate-900 dark:text-slate-100 pt-2 border-t border-slate-100 dark:border-slate-800">
                <span>Total Paid:</span>
                <span className="text-brand-600 dark:text-brand-400">${order.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Action CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <button
          onClick={() => window.print()}
          className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm shadow-sm flex items-center justify-center space-x-2 transition-all"
        >
          <Printer className="w-4 h-4 text-slate-500" />
          <span>Print Receipt / Invoice</span>
        </button>

        <Link
          to="/orders"
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-lg shadow-brand-500/20 flex items-center justify-center space-x-2 transition-all"
        >
          <Package className="w-4 h-4" />
          <span>Track Order Status</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <Link
          to="/"
          className="w-full sm:w-auto px-6 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-semibold flex items-center justify-center space-x-2 transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};
