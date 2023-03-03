import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlePageComponent } from 'src/pages/article/article.component';
import { ComponentPageComponent } from 'src/pages/component/component.component';
import { LoginPageComponent } from 'src/pages/loginscreen/loginscreen.component';
import { MedicHistoryPageComponent } from 'src/pages/medic-history/medichistory.component';
import { OnBoardingPageComponent } from 'src/pages/onboarding/onboarding.component';
import { SetPassPageComponent } from 'src/pages/onboarding/setpass.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
