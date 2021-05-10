import { Directive, Output, EventEmitter, Input, SimpleChange} from '@angular/core';

@Directive({
  selector: '[appRunDummyFunc]'
})
export class AppRunDummyFuncDirective {

  @Output() appRunDummyFunc: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.appRunDummyFunc.emit('dummy');
 }

}
