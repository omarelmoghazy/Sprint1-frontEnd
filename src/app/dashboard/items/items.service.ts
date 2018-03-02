import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Item } from "./item.model";
import { Headers } from "@angular/http";
import { UserService } from '../../user.service';



@Injectable()
export class ItemsService{

    constructor(private http:Http, private userService:UserService){

    }

    addItem(itemName,itemPrice){
        var item:Item = {
            _id: '',
            name: itemName,
            price: itemPrice,
            createdAt : null,
            updatedAt: null,
            sellerName: ''
        }
        const reqheaders = new Headers({'x-auth':this.userService.user.token})
        return this.http.post('http://localhost:3000/api/product/createProduct', item, {headers:reqheaders});
    }

    showItems(){
        const reqheaders = new Headers({'x-auth':this.userService.user.token})
        return this.http.get('http://localhost:3000/api/product/getProducts',{headers:reqheaders});
    }

    deleteItem(ID){
        const reqheaders = new Headers({'x-auth':this.userService.user.token})
        return this.http.delete('http://localhost:3000/api/product/deleteProduct/'+ ID + '',{headers:reqheaders});
    }

    editItem(oldItem, newName, newPrice){
        var item:Item = {
            _id: oldItem._id,
            name: newName,
            price: newPrice,
            createdAt : oldItem.createdAt,
            updatedAt: null,
            sellerName: oldItem.sellerName
        }
        const reqheaders = new Headers({'x-auth':this.userService.user.token})
        return this.http.patch('http://localhost:3000/api/product/updateProduct/'+ oldItem._id , item, {headers:reqheaders});
    }
}