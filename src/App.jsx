import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import './global.css';

import styles from './App.module.css';

export function App() {

  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Edeilton Oliveira" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, modi labore incidunt maxime praesentium totam, mollitia atque fugit ratione ut numquam laborum adipisci porro voluptate obcaecati quos dolor! Itaque, sit!"
          />
          <Post 
            author="Hosana Barcelos" 
            content="Texto de teste"
          />
        </main>
      </div>
    </>
  )
}