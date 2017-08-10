import { Component } from "@angular/core";


@Component({
    selector: 'app-entry',
    templateUrl: './entry.component.html',
    styleUrls: ['/entry.component.css']
})
export class EntryComponent{
    title: string = 'My First Photo Album';
    photo: string = 'http://placehold.it/800x500?text=Angular Basics'
    description: string = 'A description of my first photo'
    comments: any[] = [
        {name: " Jeff", comment: " Hey my first comment!"},
        {name: " Jeffrey", comment: " Hey my Second comment!"},
        {name: " Jeffrey Bella", comment: " Hey my Third comment!"}
    ]

}