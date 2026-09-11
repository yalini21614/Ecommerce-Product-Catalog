import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Package, CheckCircle2, ArrowRight } from 'lucide-react';
import { api } from '../services/api';
import { Order } from '../types';

export const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    setOrders(api.getOrders());
  }, []);

  const getStatusStep = (status: Order['status']) => {
    switch (status) {
      case 'Processing':
        return 1;
      case 'Confirmed':
        return 2;
      case 'Shipped':
        return 3;
      case 'Delivered':
        return 4;
      default:
        return 1;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-slate-100">Order Tracking & History</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Monitor your shipments in real-time and review previous hardware purchases.
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
            <Package className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">No Orders Found</h3>
          <p className="text-sm text-slate-500 max-w-sm mx-auto">
            You haven&apos;t placed any orders yet. Once you complete a purchase, your tracking details will show up right here.
          </p>
          <Link
            to="/catalog"
            className="inline-flex items-center space-x-2 px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl text-sm"
          >
            <span>Start Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map(order => {
            const currentStep = getStatusStep(order.status);
            return (
              <div
                key={order.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <div className="flex items-center space-x-3">
                      <span className="text-base font-extrabold text-slate-900 dark:text-slate-100">{order.id}</span>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800">
                        {order.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">Placed on {order.date} • {order.items.length} items</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-xs text-slate-400">Total Paid</span>
                    <p className="text-lg font-black text-brand-600 dark:text-brand-400">${order.total.toFixed(2)}</p>
                  </div>
                </div>

                {/* Progress Tracking Timeline */}
                <div className="py-2">
                  <div className="relative flex items-center justify-between">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-slate-200 dark:bg-slate-800 w-full z-0" />
                    <div
                      className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-brand-600 transition-all z-0"
                      style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                    />

                    {['Processing', 'Confirmed', 'Shipped', 'Delivered'].map((stepLabel, idx) => {
                      const isCompleted = idx + 1 <= currentStep;
                      return (
                        <div key={stepLabel} className="relative z-10 flex flex-col items-center">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                              isCompleted
                                ? 'bg-brand-600 text-white shadow-md'
                                : 'bg-slate-200 text-slate-500 dark:bg-slate-800'
                            }`}
                          >
                            {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                          </div>
                          <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 mt-1">
                            {stepLabel}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Items */}
                <div className="divide-y divide-slate-100 dark:divide-slate-800 pt-2">
                  {order.items.map((item, i) => (
                    <div key={i} className="py-3 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img src={item.image} alt={item.title} className="w-12 h-12 rounded-xl object-cover bg-slate-100" />
                        <div>
                          <Link to={`/product/${item.productId}`}>
                            <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-brand-600 transition-colors">
                              {item.title}
                            </h4>
                          </Link>
                          <p className="text-xs text-slate-400">Qty: {item.quantity} {item.selectedColor ? `• ${item.selectedColor}` : ''}</p>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
