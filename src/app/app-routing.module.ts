import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailPageComponent } from 'src/pages/article-detail/article-detail.component';
import { ArticlePageComponent } from 'src/pages/article/article.component';
import { DashboardPageComponent } from 'src/pages/dashboard/dashboard.component';
import { LoginPageComponent } from 'src/pages/loginscreen/loginscreen.component';
import { LogoutPageComponent } from 'src/pages/logout/logout.component';
import { MedicDetailPageComponent } from 'src/pages/medic-history/medicdetail.component';
import { MedicHistoryPageComponent } from 'src/pages/medic-history/medichistory.component';
import { OnBoardingPageComponent } from 'src/pages/onboarding/onboarding.component';
import { EditProfilePageComponent } from 'src/pages/profile/editprofile.component';
import { ProfilePageComponent } from 'src/pages/profile/profile.component';
import { StartupPageComponent } from 'src/pages/startup/startup.component';

const routes: Routes = [
  { path: '', component: StartupPageComponent },
  { path: 'onboarding', component: OnBoardingPageComponent, data: { state: 'onboarding' } },
  { path: 'login', component: LoginPageComponent, data: { state: 'login' }  },
  { path: 'logout', component: LogoutPageComponent, },
  { path: 'profile', component: ProfilePageComponent, data: { state: 'profile' }  },
  { path: 'medhis', component: MedicHistoryPageComponent, data: { state: 'medhis' }  },
  { path: 'article', component: ArticlePageComponent, data: { state: 'article' }  },
  { path: 'article-detail', component: ArticleDetailPageComponent, data: { state: 'article-detail' }  },
  { path: 'editprofile', component: EditProfilePageComponent, data: { state: 'editprofile' }  },
  { path: 'dashboard', component: DashboardPageComponent, data: { state: 'dashboard' }  },
  { path: 'detail', component: MedicDetailPageComponent, data: { state: 'detail' }  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
