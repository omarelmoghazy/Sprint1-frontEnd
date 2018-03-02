import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup,Validators} from "@angular/forms";
import { Item } from './item.model';
import { ItemsService } from './items.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-dashboard-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  items: Item[];
  
  
    constructor(public itemsService:ItemsService) { }
  
    ngOnInit() {
      this.showItems();
    }

    addItem(){
      var NAMEin = ((document.getElementById("NAMEin")as HTMLInputElement).value);
      var PRICEin = ((document.getElementById("PRICEin")as HTMLInputElement).value);
      this.itemsService.addItem(NAMEin, PRICEin).subscribe();
      this.showItems();
      this.ngOnInit();
      }

    
    showItems(){
      this.itemsService.showItems().subscribe((res:Response)=>{
      this.items = res.json().data;
      
      });
    }

    deleteItem(ID){
      this.itemsService.deleteItem(ID).subscribe();
      this.showItems();
      this.ngOnInit();
    }

    editItem(item){
      var NAMEin = ((document.getElementById("newName")as HTMLInputElement).value);
      var PRICEin = ((document.getElementById("newPrice")as HTMLInputElement).value);
      this.itemsService.editItem(item, NAMEin, parseInt(PRICEin)).subscribe();
      this.showItems();
      this.ngOnInit();
    }
      
     
    }

    /*deleteItem(item){
      for(let c = 0; c < this.items.length; c++){
        if(this.items[c] == item){
          this.items.splice(c, 1);
        }
      }
    }
  
}


/* var CREATEDATin = ((document.getElementById("CREATEDATin")as HTMLInputElement).value);
      var UPDATEDATin = ((document.getElementById("UPDATEDATin")as HTMLInputElement).value);
      var SELLERNAMEin = ((document.getElementById("SELLERNAMEin")as HTMLInputElement).value);
      var newItem:Item = {
        //id:parseInt(IDin),
        name: NAMEin,
        price: parseInt(PRICEin),
        createdAt: CREATEDATin,
        updatedAt: UPDATEDATin,
        sellerName: SELLERNAMEin
      }
      this.items.push(newItem);*/