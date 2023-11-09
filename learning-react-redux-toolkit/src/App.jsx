import './App.css'
import CakeView from './features/cake/CakeView'
import IceCreamView from './features/icecream/IceCreamView'
import UserView from './features/user/UserView'


function App() {

  return (
    <>
      <CakeView/>
      <IceCreamView/>
      <UserView/>
    </>
  )
}

// const url = 'https://moviesdatabase.p.rapidapi.com/titles/tt0000045/aka';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '51cf65a79fmsh016e56c1f3b02b0p1b7a83jsn47aeec93562b',
// 		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


export default App
