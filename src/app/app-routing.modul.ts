import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodoDashboardComponent } from "./shared/component/todo/todo-dashboard/todo-dashboard.component";
import { StdDashComponent } from "./shared/component/student/std-dash/std-dash.component";
import { ProdDashComponent } from "./shared/component/product/prod-dash/prod-dash.component";
import { PassDashComponent } from "./shared/component/passanger/pass-dash/pass-dash.component";

const appRoutes : Routes =[
    {
        path: 'home',
        component : TodoDashboardComponent
    },
    {
        path : 'student',
        component : StdDashComponent
    },
    {
        path : 'product',
        component : ProdDashComponent
    },
    {
        path : 'passanger',
        component : PassDashComponent
    }
]

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : []
})
export class RoutingModule{}