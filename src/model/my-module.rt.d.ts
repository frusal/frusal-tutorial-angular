/* GENERATED FILE - DO NOT EDIT */

import { Entity, Property, PrimitiveValue, ReferenceValue, InversedSet } from '@frusal/library-for-browser';

declare module './my-module' {

    /** Created and maintained by deploy-my-schema.js */
    interface NamedEntity extends Entity {
        /** The entity name. (e.g., Product Name, Order Number, etc) */
        name: string;
    }
    // NamedEntity instance metadata
    interface NamedEntity extends Entity {
        readonly name_val: PrimitiveValue<string>;
    }
    // NamedEntity class metadata
    namespace NamedEntity {
        /** Named Entity class spec ID (b9l32). */
        const id: string;
        const name_prop: Property;
    }

    /** Created and maintained by deploy-my-schema.js */
    interface Product extends NamedEntity {
        /** The entity name. (e.g., Product Name, Order Number, etc) */
        name: string;
        /** The price per unit. */
        price: number;
    }
    // Product instance metadata
    interface Product extends NamedEntity {
        readonly name_val: PrimitiveValue<string>;
        readonly price_val: PrimitiveValue<number>;
    }
    // Product class metadata
    namespace Product {
        /** Product class spec ID (b9l33). */
        const id: string;
        const name_prop: Property;
        const price_prop: Property;
    }

    /** Created and maintained by deploy-my-schema.js */
    interface Order extends NamedEntity {
        /** The entity name. (e.g., Product Name, Order Number, etc) */
        name: string;
        /** Collection of order lines, which links the products and quantities to this order. */
        orderLines: InversedSet<OrderLine>;
        /** Delivery address for the order. */
        deliveryAddress: string;
    }
    // Order instance metadata
    interface Order extends NamedEntity {
        readonly name_val: PrimitiveValue<string>;
        readonly deliveryAddress_val: PrimitiveValue<string>;
    }
    // Order class metadata
    namespace Order {
        /** Order class spec ID (b9l34). */
        const id: string;
        const name_prop: Property;
        const orderLines_prop: Property;
        const deliveryAddress_prop: Property;
    }

    /** Created and maintained by deploy-my-schema.js */
    interface OrderLine extends NamedEntity {
        /** The entity name. (e.g., Product Name, Order Number, etc) */
        name: string;
        /** Order this line belongs to. */
        order: Order;
        /** Product this line orders with quantity. */
        product: Product;
        /** Quantity of product to be delivered. */
        quantity: number;
    }
    // OrderLine instance metadata
    interface OrderLine extends NamedEntity {
        readonly name_val: PrimitiveValue<string>;
        readonly order_ref: ReferenceValue<Order>;
        readonly product_ref: ReferenceValue<Product>;
        readonly quantity_val: PrimitiveValue<number>;
    }
    // OrderLine class metadata
    namespace OrderLine {
        /** Order Line class spec ID (b9l35). */
        const id: string;
        const name_prop: Property;
        const order_prop: Property;
        const product_prop: Property;
        const quantity_prop: Property;
    }
}
