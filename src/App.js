// import { Component } from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import './App.css';
import SearchBox from './components/search-box/search-box.component';

const App = ()=>{
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  ;
  const [title, setTitle] = useState('');

  console.log("rendered");

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users)
    )
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(
      (monster)=>{
        return monster.name.toLowerCase().includes(searchField)
      }
    );

    setFilteredMonsters(newFilteredMonsters); 
  }, [searchField, monsters ]);

  const onSearchChange = event=>{
        const searchFieldString = event.target.value.toLowerCase();

        setSearchField(searchFieldString);
        
    }

    const onTitleChange = event=>{
      const title = event.target.value.toLowerCase();

      setTitle(title);
      
  }

  return (
      <div className="App">
        <h1 className='app-title'>{title}</h1>
        <SearchBox 
        className='monsters-search-box'
        onChangeHandler={onSearchChange} 
        placeholder='Search Monsters'
        />
        <br />
        <SearchBox 
        className='title-search-box'
        onChangeHandler={onTitleChange} 
        placeholder='set title'
        />
          <CardList monsters={filteredMonsters}/>
      </div>
    );
}

// class App extends Component{
//   constructor(){
//     super();

//     this.state ={
//       monsters:[],
//       searchField: ''
//     }
//   }

//   componentDidMount(){
//     fetch('http://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => this.setState(
//       ()=>{
//         return {monsters: users}
//       }
//     ))
//   }

//   onSearchChange = event=>{
//     const searchField = event.target.value.toLowerCase();

//     this.setState(()=>{
//       return {searchField}
//     })
//   }

//   render(){
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;

//     const filteredMonsters = monsters.filter(
//       (monster)=>{
//         return monster.name.toLowerCase().includes(searchField)
//       }
//     );

//     return (
//       <div className="App">
//       <h1 className='app-title'>Monsters Rolodex</h1>
//       <SearchBox 
//       className='monsters-search-box'
//       onChangeHandler={onSearchChange} 
//       placeholder='Search Monsters'
//       />
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
  
// }

export default App;
