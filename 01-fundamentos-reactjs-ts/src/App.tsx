import { Header } from './components/Header/Header';
import { Post } from './components/Post/Post'
import { Sidebar } from './components/Sidebar/Sidebar';
import { PostType } from './components/Post/Post'


import './global.css';

import styles from './App.module.css'

const posts: PostType[] = 
[
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/felipealan05.png',
      name: 'Felipe Alan',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋', },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      {type: 'link', content: 'jane.design/doctorcare', },
      
    ],
    publishedAt: new Date('2025-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/felipealan05.png',
      name: 'Juca Bala',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋', },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      {type: 'link', content: 'jane.design/doctorcare', },
      
    ],
    publishedAt: new Date('2025-04-08 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => 
            {
              return (
              <Post 
                key={post.id}
                post={post}
              />
            )
            })}
        </main>
      </div>
    </div>
  )
}