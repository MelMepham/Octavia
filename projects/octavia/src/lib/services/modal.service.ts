import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private _modals: any[] = [];

  add(modal: any) {
    // add modal to array of active modals
    this._modals.push(modal);
  }

  remove(id: string) {
    // remove modal from array of active modals
    this._modals = this._modals.filter(x => x.id !== id);
  }

  public open (id: string) {
    console.log(id)

    let modal = this._modals.filter(x => x.id === id)[0];
    modal.open();
  }

  public close (id: string) {
    let modal: any = this._modals.filter(x => x.id === id)[0];
    modal.close();

    console.log(id)

  }
}
