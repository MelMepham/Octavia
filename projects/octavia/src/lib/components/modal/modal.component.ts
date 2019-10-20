import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'Oct-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  public isOpen = false;
  private _element: any;
  @Input() id: string;

  public constructor(
      private _modalService: ModalService,
      private _el: ElementRef
  ) {
    this._element = _el.nativeElement;
  }

  public ngOnInit (): void {
    let modal = this;
    console.log(modal);

    if(!this.id) {
      console.log("element has to have an id");
      return;
    }

    document.body.append(this._element);

    this._modalService.add(this);
  }

  public ngOnDestroy (): void {
    this._modalService.remove(this.id);
    this._element.remove();
  }

  public open (): void {
    this.isOpen = true;
  }
  public close (): void {
    this.isOpen = false;
  }


}
