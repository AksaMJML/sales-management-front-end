import { Routes } from '@angular/router';
import { Login } from './page/login/login';
import { Dashboard } from './page/dashboard/dashboard';
import { Customer } from './page/dashboard/customer/customer';
import { Item } from './page/dashboard/item/item';
import { Order } from './page/dashboard/order/order';
import { AddCustomer } from './page/dashboard/customer/add-customer/add-customer';
import { ViewAllCustomer } from './page/dashboard/customer/view-all-customer/view-all-customer';
import { AddItem } from './page/dashboard/item/add-item/add-item';
import { ViewAllItem } from './page/dashboard/item/view-all-item/view-all-item';
import { ViewAllOrders } from './page/dashboard/order/view-all-orders/view-all-orders';

export const routes: Routes = [
    {
        path: 'logn',
        component: Login
    },
    {
        path: 'dashboard',
        component : Dashboard,
        children: [
            {
                path : 'cusatomer',
                component : Customer,
                children : [
                    {
                        path : 'add',
                        component : AddCustomer
                    },
                    {
                        path : 'view-all',
                        component : ViewAllCustomer
                    }
                ]
            },
            {
                path : 'item',
                component : Item,
                children : [
                    {
                        path : 'add',
                        component : AddItem
                    },
                    {
                        path : 'view-all',
                        component : ViewAllItem
                    }
                ]
            },
            {
                path : 'orer',
                component : Order,
                children : [
                    {
                        path : 'view-all',
                        component : ViewAllOrders
                    }
                ]
            }
        ]
    }
];
