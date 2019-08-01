import styled from 'styled-components'



export const Nav = styled.nav`
  position: fixed;
  height: 50px;
  width: 100vw;
  background:white;
  top: 0;
  left: 0;
  
  div:nth-child(2){
    display: flex;
    width: 90px;
    margin-left: 1rem;
   
}
 div:nth-child(3){
    flex: 1;
 }
  
  nav {
    display: flex;
    height: 100%;
    align-items: center;
  }
  img {
      width: 35px;
  }
  ul{
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li{
      padding: 0 0.5rem;
  }
  a{
    color: black;
    text-decoration:none;
  }
  a:hover  {
    color: green;
    text-decoration: none;
  }
`
export const Btn = styled.button`
  width: 120px;
  border-radius: 5px;
  padding: 8px 20px;
  border: none;
  outline: none;
  margin-top: 10px;                                                                                                                                                                                                                                                                                             
&:hover{
  cursor: pointer;
  box-shadow: rgba(198, 208, 235, 0.5) 0px 10px 20px;
  background: olive;
}

`



export const CustomInput = styled.input`
width:  calc(100% - 10px);
  height: 35px;
  border-radius: 5px;
  border: 0.5px solid black;
  padding-left: 10px;
  background: #fafafa;
  border: none;
  outline-color: grey;  

`

export const LandingContainerOne = styled.div`
  width: 100vw;
  height: 500px;
  background: url('https://previews.123rf.com/images/cnuisin/cnuisin1808/cnuisin180800025/107345739-dog-seamless-pattern-vector-toy-puppy-dog-paw-wallpaper-background-isolated-doodle-cartoon.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  

  h1{
    font-size: 30px;
    text-align: center;
    padding-top: 10px;
    color: black;
    background: white;

  }
  h2{
    font-size: 20px;
    color: black;
  }
  img{
    position: absolute;
    padding-top: 80px;
    width: 100%;
  }

  & div{
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  text-align: center;
  height: 130px;
  background:  #fafafa;
  border-radius: 10px;
  margin-top: 230px;
  margin-bottom: 0;
  margin-left: 19px;
  border: 1px solid #efefef;

}
             
`


export const SignupContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* margin-lefT: 20px; */

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-around;
  border: 1px solid green;
  width: 100vw;                                                                                                                                                                                                                                                                                         
  height: 300px;
}
/* div:nth-child(1){
  background: white;
  border-radius: 10px;
  width: 50%;
  height: 60%;
  box-shadow: 1px 1px 1px rgba(121, 120, 120, 0.103);

}
& div:hover{
 
  text-decoration: none;
  color: rgb(75, 74, 74);
 */
}
           

`
export const MapContainer = styled.div`
  width: 100vw;
  height: 100vh;
`


export const ProfileContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
 justify-content: space-between;

& div:nth-child(1){
  width: 50vw;
  height: 500px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-left: 10px;
}

& div:nth-child(2){
  width: 50vw;
  height: 400px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  justify-content: space-around;
  align-items: center;
}
img{
  width: 150px;
  height: 150px;
 
}
button{
  margin-top:20px;
}
#file{
  width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}
#fileLabel{
  padding: 5px 5px 5px 5px;
  border-radius: 5px;
}
#file + #fileLabel{
  font-size: 1 rem;
    font-weight: 700;
    color: black;
    background-color: #efefef;
    display: inline-block;
    cursor: pointer;
}

#file:focus + #fileLabel,
#file + #fileLabel:hover{
  background-color: gray;
  text-decoration: none;
}
`




export const PetsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
 justify-content: space-around;
  margin-top: 80px;

 h1{
   text-align: center;
 }
 & #list-container{
 margin-bottom: 180px;  
 width: 100vw;
 height: auto;
  border: 1px solid black;
 display: flex;
 flex-wrap: wrap;
 justify-content: space-around;
 color: black;
}

& div{
 width:  80vw;
 height:  200px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 border-radius: 15px;
  box-shadow: 1px 1px 1px rgba(121, 120, 120, 0.103);
 margin-top: 25px;
 font-size: 30px;
  border: 0.5px solid grey;
  padding-left: 10px;
  background: #fafafa;
  border: none;
 
}
& div:hover{
  height: 220px;
  box-shadow: 10px 10px 10px 0px rgba(0,0,0,0.5);
  text-decoration: none;
  color: rgb(75, 74, 74);
  cursor: pointer;

}

img{
  width: 20px;
  height: 20px;  
}

#title-cont{
  display: flex;
  background: black;
  width: 100vw;
}
`





export const PetDetailContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
 justify-content: flex-start;
 align-items: center;
  margin-top: 80px;


 div:nth-child(2){
  width: 80%;
  text-align: start;
}

  input:nth-child(10), input:nth-child(12){
  padding-bottom: 80px;
}
 
img{
  margin-top: 20px;
  width: 200px;
}
`

export const PetDetContainer = styled.div`
 width: 100vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
 justify-content: flex-start;
 align-items: center;
margin-top: 80px;
  
  div{
  width: 80%;
  text-align: start;

  
}

`



export const PostContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
 justify-content: space-around;
  margin-top: 80px;

 h1{
   text-align: center;
 }
 & #list-container{
 margin-bottom: 180px;  
 width: 100vw;
 height: auto;
  border: 1px solid black;
 display: flex;
 flex-wrap: wrap;
 justify-content: space-around;
 color: black;

& div{
 width:  80vw;
 height:  200px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 border-radius: 15px;
  box-shadow: 1px 1px 1px rgba(121, 120, 120, 0.103);
 margin-top: 25px;
 font-size: 10px;
  border: 0.5px solid grey;
  padding-left: 10px;
  background: #fafafa;
  border: none;
 
}

& div:hover{
  height: 220px;
  box-shadow: 10px 10px 10px 0px rgba(0,0,0,0.5);
  text-decoration: none;
  color: rgb(75, 74, 74);
  cursor: pointer;

}
}
`