import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IgorDetailsComponent } from './pages/igor-details/igor-details.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { ListenNowComponent } from './pages/listen-now/listen-now.component';
import { ProfilepageComponent } from './pages/profilepage/profilepage.component';

const routes: Routes = [
  { path : "", component : ListenNowComponent},
  { path : "listen", component : ListenNowComponent},
  { path : "browse", component : BrowseComponent},
  { path : "album/:id", component : IgorDetailsComponent},
  { path : "permanent-damage-joesef", component : IgorDetailsComponent},
  { path : "simz-no-thank-you", component : IgorDetailsComponent},
  { path : "mr-morale-kendrick", component : IgorDetailsComponent},
  { path : "bubba-kaytranda", component : IgorDetailsComponent},
  { path : "profile", component: ProfilepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [IgorDetailsComponent]
