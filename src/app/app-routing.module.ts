import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SecondComponent } from './components/second/second.component';
import { FirstComponent } from './components/first/first.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/first', pathMatch: 'full' },
    {path: 'first', component: FirstComponent },
    {path: 'second', component: SecondComponent },
    {path: '**', redirectTo: '/first' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
