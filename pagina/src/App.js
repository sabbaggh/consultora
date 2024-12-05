import './App.css';

function App() {
  let previousScrollPosition = 0;
  let cont = 0;
  const isScrollingDown = () => {
    
    let scrollPosition = window.pageYOffset;
    const inicio = document.getElementById('inicio');
    const conocenos = document.getElementById('conocenos');
    const arr = [inicio, conocenos];

    if (scrollPosition > previousScrollPosition) {
      if(cont+1 < arr.length){
        arr[cont+1].scrollIntoView({behavior: 'smooth'})
        cont+=1;
        console.log(cont)
      }
    }
    else if(scrollPosition < previousScrollPosition){
      if(cont-1 >= 0){
        arr[cont-1].scrollIntoView({behavior: 'smooth'})
        cont-=1;
        console.log(cont);
      }
    }

    return;
  };
  //window.addEventListener("scroll", isScrollingDown);
  return (
    <div className="flex-1 h-screen bg-gray-950 w-full snap-y snap-mandatory overflow-y-auto z-90 absolute">
      <div className='flex flex-row w-full h-20 bg-gray-950 items-center justify-center fixed z-50'>
        <a href='#inicio' className='text-slate-50 opacity-100 mr-8 text-xl hover:text-teal-300'>Inicio</a>
        <a href='#conocenos' className='text-slate-50 opacity-100 text-xl hover:text-teal-300'>Conocenos</a>
      </div>
      <div className='h-screen flex items-center justify-center w-full snap-start' id='inicio'>
        <img src={require('./images/equipo1.jpg')} alt='equipo1' className='w-full h-screen object-cover blur-sm'/>
        <p className='text-white text-6xl z-20 absolute'>Mejora tu negocio</p>
        <div className='z-10 bg-gray-950 absolute h-full w-full opacity-70'></div>
      </div>
      <div className='flex flex-row h-screen items-center justify-center w-full bg-gray-950 space-x-8 snap-start' id='conocenos'>
        <div className='text-slate-50 w-2/5'>
          <h1 className='text-3xl text-center'>Sobre Inndomitus</h1>
          <p className='text-2xl'>Inndomitus se encarga de implementar soluciones de IA para las empresas</p>
        </div>
        <img src={require('./images/codigo1.jpg')} alt='codigo1' className='w-2/5 h-3/6 object-cover rounded-3xl shadow-teal-300'/>
      </div>
    </div>
  );
}

export default App;
