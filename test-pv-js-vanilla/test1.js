// cookie

// document.cookie = `name=Trieu;expires=${new Date('2022-06-23 10:00:00').toUTCString()}`
// console.log(document.cookie);

// local storage
// localStorage.setItem('name','trieu')

// console.log(localStorage.getItem('name'));

// localStorage.removeItem('name')
// localStorage.clear();

// session storage
// sessionStorage.setItem('job','it')

const array = ["a", "b", "c"];
console.log({ ...array });

// async with not await not work
// const getApiTest = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {}
// };

// getApiTest();
