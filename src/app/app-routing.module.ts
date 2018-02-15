import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery.component';

const routes: Routes = [
    { path: 'gallery/:type', component: GalleryComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' },
  ];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}