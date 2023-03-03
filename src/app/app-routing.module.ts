import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlePageComponent } from 'src/pages/article/article.component';
import { ComponentPageComponent } from 'src/pages/component/component.component';
import { DashboardPageComponent } from 'src/pages/dashboard/dashboard.component';
import { LoginPageComponent } from 'src/pages/loginscreen/loginscreen.component';
import { MedicDetailPageComponent } from 'src/pages/medic-history/medicdetail.component';
import { MedicHistoryPageComponent } from 'src/pages/medic-history/medichistory.component';
import { OnBoardingPageComponent } from 'src/pages/onboarding/onboarding.component';
import { SetPassPageComponent } from 'src/pages/onboarding/setpass.component';
import { EditProfilePageComponent } from 'src/pages/profile/editprofile.component';
import { ProfilePageComponent } from 'src/pages/profile/profile.component';
import { StartupPageComponent } from 'src/pages/startup/startup.component';

const routes: Routes = [
  { path: '', component: ComponentPageComponent },
  { path: 'startup', component: StartupPageComponent },
  { path: 'onboarding', component: OnBoardingPageComponent },
  { path: 'setpass', component: SetPassPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'medhis', component: MedicHistoryPageComponent },
  { path: 'article', component: ArticlePageComponent },
  { path: 'editprofile', component: EditProfilePageComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'detail', component: MedicDetailPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
