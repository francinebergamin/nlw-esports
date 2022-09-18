// REACT = JSX: JavaScript + XML (HTML)
import { useState, useEffect } from 'react';
import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.svg';
import {MagnifyingGlassPlus} from 'phosphor-react';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

interface Game{
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
    .then(response => response.json())  
    .then(data => { setGames(data)
    })
  }, [])

  return (
    <div className="max-w-[1344px] my-20 mx-auto flex flex-col items-center">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.
      </h1>

      <div className="mt-16 grid grid-cols-6 gap-6">
        {games.map(game => { 
          return (
            <GameBanner bannerUrl={game.bannerUrl} title={game.title} adsCount={game._count.ads}></GameBanner>
          )
        })}
      </div>

      <CreateAdBanner></CreateAdBanner>

    </div>
  )
}

export default App
