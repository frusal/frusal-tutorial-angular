import { Component, OnInit, OnDestroy } from '@angular/core';
import { session, ActualWorkspace, Stage, Owner, Transaction, QPType } from '@frusal/library-for-browser';
import { Product } from 'src/model/my-module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  products: Product[];

  stage: Stage;
  transaction: Transaction;

  readonly owner = new Owner();

  async ngOnInit() {
    await session.login({
      loginId: 'unit.test@fruit-salad.tech',
      password: `Here I've broken it`,
      workspace: 'ws_001_unit_test',
      advanced: { baseURL: 'http://localhost:8080' }
    });

    this.stage = await session.createStage(this.owner);

    Product.classSpec(this.stage).subscribeToCreatedAndDeleted(this.owner, { autoupdate: true, initialize: true, callback: evt => this.refresh() });
  }

  async refresh() {
      // Query all instances of Product
      this.products = await this.stage.query({ q: Product.id, type: QPType.BY_CLASS_ID }).promiseArray() as Product[];
      // Subscribe to each property change with live autoupdates.
      this.products.forEach(product => product.subscribeToChanges(this.owner, { autoupdate: true}));
  }

  ngOnDestroy() {
    this.owner.close();
  }

  removeProductOnClick(product: Product) {
    product.delete();
    this.products = this.products.filter(pr => pr !== product);
  }

  addProductOnClick() {
    const newProduct = this.transaction.createEntity(Product);
    newProduct.name = 'New Product';
    this.products.push(newProduct);
  }

  editOnClick() {
    this.transaction = this.stage.beginTransaction();
  }

  applyOnClick() {
    this.transaction.commit();
    this.transaction = null;
  }

  cancelOnClick() {
    this.transaction.rollback();
    this.transaction = null;
    this.refresh();
  }

}

