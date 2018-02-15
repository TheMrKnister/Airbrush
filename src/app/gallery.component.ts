import { Component, NgModule, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private httpClient: HttpClient
    ) {
        this.getJSON().subscribe(data => {
            console.log(data)
        });

    }

    images = []
    slideIndex = 1;

    ngOnInit(): void {
        const type = this.route.snapshot.paramMap.get('type');
        this.getJSON().subscribe(data => {
            this.images = data.masken;
            console.log(type + ": " + this.images)
        });
    }

    public getJSON(): Observable<any> {
        return this.httpClient.get("./assets/imageUrls.json")
    }

    // Open the Modal
    openModal() {
        document.getElementById('myModal').style.display = "block";
    }

    // Close the Modal
    closeModal() {
        document.getElementById('myModal').style.display = "none";
    }

    // showSlides(slideIndex);

    // Next/previous controls
    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    // Thumbnail image controls
    currentSlide(n) {
        this.showSlides(this.slideIndex = n);
    }

    showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");
        if (n > slides.length) { this.slideIndex = 1 }
        if (n < 1) { this.slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[this.slideIndex - 1].style.display = "block";
        dots[this.slideIndex - 1].className += " active";
        captionText.innerHTML = dots[this.slideIndex - 1].alt;
    }
}
