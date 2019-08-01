import styled from 'styled-components'



export const Nav = styled.nav`
  position: fixed;
  height: 50px;
  width: 99vw;
  background:white;
  border-bottom:1px solid black;
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
  background: #A8C28E;
  width: 120px;
  border-radius: 5px;
  padding: 8px 20px;
  border: none;
  outline: none;
  margin-top: 10px; 
  font-size: 15px;                                                                                                                                                                                                                                                                                            
&:hover{
  cursor: pointer;
  box-shadow: rgba(198, 208, 235, 0.5) 0px 10px 20px;
  background: #7FA15D;
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
  display: flex;
    flex-direction: column;
    justify-content: center;
    /* text-align: center; */
    align-items: center;

  h1{
    font-size: 50px;
    text-align: center;
    padding-top: 10px;
    color: black;
    background: white;

  }
  h2{
    font-size: 30px;
    color: black;
  }
  img{
    position: absolute;
    padding-bottom: 75px;
    width: 30%;
  }

  & div{
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 45%;
  text-align: center;
  height: 130px;
  background:  #fafafa;
  border-radius: 10px;
  margin-top: 230px;
  margin-bottom: 70px;
  margin-left: 19px;
  border: 1px solid #efefef;
  padding-bottom: 20px;

}
             
`


export const SignupContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  /* margin-lefT: 20px; */

div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid #A8C28E;
  border-radius: 5px;
  width: 40vw;                                                                                                                                                                                                                                                                                         
  height: 350px;
  margin-left: 50px;
  padding-left: 20px;
  padding-right: 20px;
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

img{
  width: 20%;
}    

`


export const SignContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  /* margin-lefT: 20px; */

div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid #A8C28E;
  border-radius: 5px;
  width: 40vw;                                                                                                                                                                                                                                                                                         
  margin-left: 50px;
  margin-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
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

img{
  width: 20%;
}    

`
export const ProfileContainer = styled.div`
  width: 98vw;
  height: 100vh;
  display: flex;
 justify-content: space-between;

  

& div:nth-child(1){
  width: 40vw;
  height: 450px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-left: 20px;
  border:1px solid  #efefef; 
  border-radius: 10px;
  font-size: 30px;
  margin-left: 80px;

}

& div:nth-child(2){
  width: 40vw;
  height: 400px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  
  margin-right: 120px;
}
img{
  width: 50%;
  height: 50%;
  border: 8px solid #efefef;
  border-radius: 5px;
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
  padding: 20px 20px 20px 20px;
  border-radius: 5px;
}
#file + #fileLabel{
     font-size: 1.5em;
    font-weight: 700;
    color: black;
    background-color: #A8C28E;
    display: inline-block;
    cursor: pointer;
}

#file:focus + #fileLabel,
#file + #fileLabel:hover{
  background-color: #7FA15D;
  text-decoration: none;
}
`




export const PetsContainer = styled.div`
  width: 98vw;
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
 display: flex;
 flex-wrap: wrap;
 justify-content: space-around;
 color: black;
}

& div{
 width:  30vw;
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
  width: 97vw;
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
  width: 97vw;
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
 display: flex;
 flex-wrap: wrap;
 justify-content: space-around;
 color: black;

& div{
 width:  30vw;
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 align-items: center;
 border-radius: 15px;
  box-shadow: 1px 1px 1px rgba(121, 120, 120, 0.103);
 margin-top: 25px;
 font-size: 10px;
  border: 0.5px solid grey;
  padding-left: 10px;
  background: #fafafa;
  border: none;
  padding-bottom: 20px;
 
}

}
`