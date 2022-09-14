// REACT = JSX: JavaScript + XML (HTML)

import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.svg';

function App() {
  return (
    <div className="max-w-[1344px] my-20 mx-auto flex flex-col items-center">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.
      </h1>

      <div className="mt-16 grid grid-cols-6 gap-6">
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className='text-white font-bold block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-2.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className='text-white font-bold block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>          
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-3.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className='text-white font-bold block'>CS:GO</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>          
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-4.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className='text-white font-bold block'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>          
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-5.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className='text-white font-bold block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>          
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-6.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className='text-white font-bold block'>World of Warcraft</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>          
        </a>
        

      </div>
    </div>
  )
}

export default App
