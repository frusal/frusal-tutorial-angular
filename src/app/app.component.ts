import { Component, OnInit, OnDestroy } from '@angular/core';
import { session, ActualWorkspace, Stage, Owner, Transaction } from '@frusal/library-for-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  entity: ActualWorkspace;

  stage: Stage;
  transaction: Transaction;

  readonly owner = new Owner();

  async ngOnInit() {
    await session.login({ loginId: 'admin@fruit-salad.tech', password: 'Honey-Lime', workspace: 'playground', advanced: { baseURL: 'http://localhost:8080' }});
    this.stage = await session.createStage(this.owner);
    this.transaction = this.stage.beginTransaction();

    this.entity = this.transaction.getSingletonInstance('Actual Workspace');
    this.entity.subscribeToChanges(this.owner, { autoupdate: true });
  }

  ngOnDestroy() {
    this.owner.close();
  }

  submitOnClick() {
    this.transaction.commit();
    this.transaction = this.stage.beginTransaction();
  }

}

