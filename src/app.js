import React from 'react';
import '../src/components/header.css'
import Settings from './components/context/Settings';
import ToDo from './components/todo/todo.js';
export default function App () {
 
    return ( 
      <Settings>
      <ToDo />
      </Settings>
    );
  }

