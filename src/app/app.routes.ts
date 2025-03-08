import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { WishesComponent } from './screens/wishes/wishes.component';
import { UploadPhotoComponent } from './screens/upload-photo/upload-photo.component';
import { MusicSurpriseComponent } from './screens/music-surprise/music-surprise.component';
import { MemoryLaneComponent } from './screens/memory-lane/memory-lane.component';
import { FinalMessageComponent } from './screens/final-message/final-message.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'wishes', component: WishesComponent },
  { path: 'upload-photo', component: UploadPhotoComponent },
  { path: 'music-surprise', component: MusicSurpriseComponent },
  { path: 'memory-lane', component: MemoryLaneComponent },
  { path: 'final-message', component: FinalMessageComponent }
];
