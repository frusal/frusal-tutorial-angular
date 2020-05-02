/* GENERATED FILE - DO NOT EDIT */

import { Entity, Property, PrimitiveValue, ReferenceValue, InversedSet } from '@frusal/library-for-browser';

declare module './my-module' {

    /** Created and maintained by deploy-my-schema.js */
    interface NamedEntity extends Entity {
        /** The entity name. (e.g., Product Name, Order Number, etc) */
        name: string;
        readonly name_val: PrimitiveValue<string>;
    }
    namespace NamedEntity {
        /** ClassSpec ID for 'Named Entity' (b9l32). */
        const id: string;
        const name_prop: Property;
    }

    /** Created and maintained by deploy-my-schema.js */
    interface Product extends Entity {
        /** The entity name. (e.g., Product Name, Order Number, etc) */
        name: string;
        readonly name_val: PrimitiveValue<string>;
        /** The price per unit. */
        price: number;
        readonly price_val: PrimitiveValue<number>;
    }
    namespace Product {
        /** ClassSpec ID for 'Product' (b9l33). */
        const id: string;
        const name_prop: Property;
        const price_prop: Property;
    }

    /** Created and maintained by deploy-my-schema.js */
    interface Order extends Entity {
        /** The entity name. (e.g., Product Name, Order Number, etc) */
        name: string;
        readonly name_val: PrimitiveValue<string>;
        /** Collection of order lines, which links the products and quantities to this order. */
        orderLines: InversedSet<OrderLine>;
        /** Delivery address for the order. */
        deliveryAddress: string;
        readonly deliveryAddress_val: PrimitiveValue<string>;
    }
    namespace Order {
        /** ClassSpec ID for 'Order' (b9l34). */
        const id: string;
        const name_prop: Property;
        const orderLines_prop: Property;
        const deliveryAddress_prop: Property;
    }

    /** Created and maintained by deploy-my-schema.js */
    interface OrderLine extends Entity {
        /** The entity name. (e.g., Product Name, Order Number, etc) */
        name: string;
        readonly name_val: PrimitiveValue<string>;
        /** Order this line belongs to. */
        order: Order;
        readonly order_ref: ReferenceValue<Order>;
        /** Product this line orders with quantity. */
        product: Product;
        readonly product_ref: ReferenceValue<Product>;
        /** Quantity of product to be delivered. */
        quantity: number;
        readonly quantity_val: PrimitiveValue<number>;
    }
    namespace OrderLine {
        /** ClassSpec ID for 'Order Line' (b9l35). */
        const id: string;
        const name_prop: Property;
        const order_prop: Property;
        const product_prop: Property;
        const quantity_prop: Property;
    }
}
