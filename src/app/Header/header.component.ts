import { Component  } from '@angular/core';

import { DataStorageService } from '../shared/datastorage.service';


@Component({
    selector:"app-header",
    templateUrl:"./header.component.html",
    styleUrls: ['./header.component.css']
})

export class HeaderComponent{

    constructor(private dataStorageService : DataStorageService){}

    onSaveData(){
        this.dataStorageService.storeRecipes().subscribe(
            (response : Response) => {
                console.log(response);
            }
        );
    }

    onFetchData(){
        this.dataStorageService.getRecipes();
    }

    
}