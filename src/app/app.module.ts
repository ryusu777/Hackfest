import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { SetPassPageComponent } from 'src/pages/onboarding/setpass.component';
import { LoginPageComponent } from 'src/pages/loginscreen/loginscreen.component';
import { ProfilePageComponent } from 'src/pages/profile/profile.component';
import { EditProfilePageComponent } from 'src/pages/profile/editprofile.component';
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
    ComponentPageComponent,
    StartupPageComponent,
    OnBoardingPageComponent,
    SetPassPageComponent,
    LoginPageComponent,
    ProfilePageComponent,
    EditProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
