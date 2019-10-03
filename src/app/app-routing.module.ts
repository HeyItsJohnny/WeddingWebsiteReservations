import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'home/:id', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'rsvp', loadChildren: './pages/rsvp/rsvp.module#RsvpPageModule' },
  { path: 'rsvp/:id', loadChildren: './pages/rsvp/rsvp.module#RsvpPageModule' },
  { path: 'rsvp-diet-restrictions/:id', loadChildren: './pages/rsvp-diet-restrictions/rsvp-diet-restrictions.module#RsvpDietRestrictionsPageModule' },
  { path: 'rsvp-diet-restrictions', loadChildren: './pages/rsvp-diet-restrictions/rsvp-diet-restrictions.module#RsvpDietRestrictionsPageModule' },
  { path: 'rsvp-guests', loadChildren: './pages/rsvp-guests/rsvp-guests.module#RsvpGuestsPageModule' },
  { path: 'rsvp-guests/:id', loadChildren: './pages/rsvp-guests/rsvp-guests.module#RsvpGuestsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
