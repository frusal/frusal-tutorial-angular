/// <reference types="./my-module.rt" />

/* GENERATED STUB, remove this comment and take over development of this code. */

import { session, Entity } from '@frusal/library-for-browser';

export class NamedEntity extends Entity {
    // nothing yet
}
session.factory.registerUserClass(NamedEntity);

export class Product extends NamedEntity {
    // nothing yet
}
session.factory.registerUserClass(Product);

export class Order extends NamedEntity {
    // nothing yet
}
session.factory.registerUserClass(Order);

export class OrderLine extends NamedEntity {
    // nothing yet
}
session.factory.registerUserClass(OrderLine);
