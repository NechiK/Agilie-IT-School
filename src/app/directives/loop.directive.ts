import {Directive, Input, OnChanges, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appLoop]'
})
export class LoopDirective implements OnChanges {

  @Input() appLoopOf: Array<any>;

  constructor(private container: ViewContainerRef,
              private template: TemplateRef<any>) { }

  ngOnChanges() {
    this.appLoopOf.forEach(loopItem => {
      this.container.createEmbeddedView(this.template, {$implicit: loopItem});
    });
  }

}
