import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'gallery',
    templateUrl: './gallery.component.html',
    styleUrls: [ './gallery.component.css' ]
  })

export class GalleryComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private httpClient : HttpClient
    ) {
        this.getJSON().subscribe(data => {
            console.log(data)
        });     
        
    }

    images = []

    ngOnInit(): void {
        const type = this.route.snapshot.paramMap.get('type');
        this.getJSON().subscribe(data => {
            this.images = data.gallerie.masken;
            console.log(type + ": " + this.images)
        });
    }

    public getJSON(): Observable<any> {
        return this.httpClient.get("./assets/imageUrls.json")
    }
}
