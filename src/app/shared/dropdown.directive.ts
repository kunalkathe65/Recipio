import { Directive, HostListener, HostBinding } from '@angular/core';


@Directive({
    selector: '[appDropdown]'
})

export class DropDownDirective{

    @HostBinding('class.dropdown') isOpen = false;
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }

}
