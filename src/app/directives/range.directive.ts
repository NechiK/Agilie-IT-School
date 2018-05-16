import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appRange]'
})
export class RangeDirective {

  _range: number[];

  @Input()
  set appRange( value ) {
    this.container.clear();
    this._range = this.generateRange(value[0], value[1]);

    this._range.forEach(num => {
      this.container.createEmbeddedView(this.template, {
        $implicit: num
      });
    });
  }

  constructor( private container: ViewContainerRef, private template: TemplateRef<any> ) {}

  private generateRange( from, to ) {
    const range = [];
    for (let i = from; i <= to; i++) {
      range.push(i);
    }
    return range;
  }

}
