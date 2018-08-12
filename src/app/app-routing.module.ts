import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importing all routes of the components here 
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';

// This is where we define all the routes and it
// happens as an ARRAY OF OBJECTS
// path and what display as components
const routes: Routes = [
    {
        path: '',
        component: UsersComponent
    },
    {
        path: 'details/:id',
        component: DetailsComponent
    },
    {
        path: 'posts',
        component: PostsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
