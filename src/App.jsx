import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import './global.css';

import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: { 
      avatarUrl: 'https://avatars.githubusercontent.com/u/72235359?v=4',
      name: 'Ualace',
      role: 'Desenvolvedor de software'
    },
    publishedAt: new Date('2022-12-30 19:56:44'),
    content: [
      { type: 'paragraph', content: 'primeiro paragrafo' },
      { type: 'paragraph', content: 'segundo paragrafo' },
      { type: 'link', content: 'example.com' }
    ]
  },
  {
    id: 2,
    author: { 
      avatarUrl: 'https://avatars.githubusercontent.com/u/38273608?v=4',
      name: 'Edeilton',
      role: 'Programador'
    },
    publishedAt: new Date('2022-12-29 06:45:12'),
    content: [
      { type: 'paragraph', content: 'Lorem ipsum.' },
      { type: 'paragraph', content: 'É assim que escreve, né?' },
      { type: 'link', content: 'github.com/edeiltonso' }
    ]
  }
];

export function App() {

  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  )
}