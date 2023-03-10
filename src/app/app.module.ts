import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnComponent } from 'src/components/btn/btn.component';
import { AlertComponent } from 'src/components/alert/alert.component';
import { AvatarComponent} from 'src/components/avatar/avatar.component'
import { CardComponent } from 'src/components/card/card.component';
import { StatComponent } from 'src/components/stat/stat.component';
import { TableComponent } from 'src/components/table/table.component';
import { TooltipComponent } from 'src/components/tooltip/tooltip.component';
import { CheckboxComponent } from 'src/components/inputs/checkbox/checkbox.component';
import { DrawerComponent } from 'src/components/drawer/drawer.component';
import { ToastComponent } from 'src/components/toast/toast.component';
import { BreadcrumbsComponent } from 'src/components/breadcrumbs/breadcrumbs.component';
import { BottomnavigationComponent } from 'src/components/bottomnavigation/bottomnavigation.component';
import { MenuComponent } from 'src/components/menu/menu.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { PaginationComponent } from 'src/components/pagination/pagination.component';
import { InputTextComponent } from 'src/components/inputs/input-text/input-text.component';
import { FileComponent } from 'src/components/inputs/file/file.component';
import { RadioComponent } from 'src/components/inputs/radio/radio.component';
import { SelectComponent } from 'src/components/inputs/select/select.component';
import { TextareaComponent } from 'src/components/inputs/text-area/textarea.component';
import { ToggleComponent } from 'src/components/inputs/toggle/toggle.component';
import { ComponentPageComponent } from 'src/pages/component/component.component';
import { StartupPageComponent } from 'src/pages/startup/startup.component';
import { OnBoardingPageComponent } from 'src/pages/onboarding/onboarding.component';
import { LoginPageComponent } from 'src/pages/loginscreen/loginscreen.component';
import { ProfilePageComponent } from 'src/pages/profile/profile.component';
import { MedicHistoryPageComponent } from 'src/pages/medic-history/medichistory.component';
import { LongCardComponent } from 'src/components/longcard/longcard.component';
import { ArticlePageComponent } from 'src/pages/article/article.component';
import { AuthService } from 'src/services/auth-service';
import { EditProfilePageComponent } from 'src/pages/profile/editprofile.component';
import { DashboardPageComponent } from 'src/pages/dashboard/dashboard.component';
import { MedicDetailPageComponent } from 'src/pages/medic-history/medicdetail.component';
import { LogoutPageComponent } from 'src/pages/logout/logout.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ArticleDetailPageComponent } from 'src/pages/article-detail/article-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    BtnComponent,
    AlertComponent,
    AvatarComponent,
    CardComponent,
    StatComponent,
    TableComponent,
    TooltipComponent,
    CheckboxComponent,
    DrawerComponent,
    ToastComponent,
    BreadcrumbsComponent,
    BottomnavigationComponent,
    MenuComponent,
    NavbarComponent,
    PaginationComponent,
    InputTextComponent,
    FileComponent,
    RadioComponent,
    SelectComponent,
    TextareaComponent,
    ToggleComponent,
    LongCardComponent,
    ComponentPageComponent,
    StartupPageComponent,
    OnBoardingPageComponent,
    LoginPageComponent,
    ProfilePageComponent,
    MedicHistoryPageComponent,
    ArticlePageComponent,
    EditProfilePageComponent,
    DashboardPageComponent,
    MedicDetailPageComponent,
    LogoutPageComponent,
    ArticleDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
