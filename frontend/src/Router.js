import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {LandingPage, Login,Signup, Profile, EditProfile} from './components'
import {PetCreate, PetDetail, PetList} from './components/pets'
import {PostCreate, PostEdit, PostList, AllPosts} from './components/posts'

const Router  = () => (
        <BrowserRouter>
        <Switch>
             <Route exact path='/' component= {LandingPage}/>
             <Route exact path='/login' component= {Login}/>
             <Route exact path='/signup' component= {Signup}/>
             <Route exact path='/profile' component= {Profile}/>
             <Route exacth path= '/edit' component = {EditProfile}/>
             <Route exact path='/pets' component= {PetList}/>
             <Route exact path='/add-pet' component= {PetCreate}/>
             <Route exact path='/pet-detail/:id' component= {PetDetail}/>
             <Route exact path='/posts' component= {PostList}/>
             <Route exact path='/posts/:id' component= {PostEdit}/>
             <Route exact path='/add-post' component= {PostCreate}/>
             <Route exact path='/all-posts' component= {AllPosts}/>

        </Switch>        
        </BrowserRouter>
)

export default Router