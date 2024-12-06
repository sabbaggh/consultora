import './App.css';

function App() {
  /*let previousScrollPosition = 0;
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
  };*/
  //window.addEventListener("scroll", isScrollingDown);
  return (
    <div className="flex-1 h-screen bg-gray-950 w-full snap-y snap-mandatory overflow-y-auto z-90 absolute">
      <div className='flex flex-row w-full h-20 bg-gray-950 items-center justify-center fixed z-50 space-x-8'>
        <a href='#inicio' className='text-slate-50 opacity-100 text-xl hover:text-teal-300'>Inicio</a>
        <a href='#conocenos' className='text-slate-50 opacity-100 text-xl hover:text-teal-300'>Conocenos</a>
        <a href='#contactanos' className='text-slate-50 opacity-100 text-xl hover:text-teal-300'>Contactanos</a>
      </div>
      <div className='h-screen flex items-center justify-center w-full snap-start' id='inicio'>
        <img src={require('./images/meeting2.gif')} alt='equipo1' className='w-full h-screen object-cover blur-sm'/>
        <div className='z-20 absolute'>
          <p className='text-white text-6xl'>Mejora tu negocio</p>
          <br/>
          <p className='text-white text-6xl ml-24'>Mejora la productividad</p>
          <br/>
          <p className='text-white text-6xl ml-48'>No te quedes atras</p>
        </div>
        <div className='z-10 bg-gray-950 absolute h-full w-full opacity-30'></div>
      </div>
      <div className='flex flex-row h-screen items-center justify-between w-full bg-gray-950 snap-start space-between' id='conocenos'>
        <div className='text-slate-50 w-full flex-col justify-center m-9 p-8 bg-gray-800 rounded-3xl'>
          <h1 className='text-5xl text-center mb-6'>Sobre NNdomitus</h1>
          <p className='text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris turpis, ullamcorper eget sapien et, elementum semper tortor. Mauris blandit at augue et volutpat. Mauris luctus tortor sit amet erat pellentesque tincidunt. Nulla quis tellus et erat finibus dapibus finibus ac elit. In et facilisis ex. Curabitur ut tincidunt enim. Fusce nec varius felis.
<br/>
Phasellus elit felis, vulputate tempus congue at, pulvinar aliquet urna. Suspendisse gravida sapien vel elit luctus, sed accumsan nisl rhoncus. Aliquam varius dapibus ornare. Nam eget enim cursus, consequat lectus quis, condimentum libero. Suspendisse molestie imperdiet placerat. Nam molestie metus sed dui efficitur, at consectetur dolor consequat. Vivamus erat sem, feugiat sed est volutpat, sollicitudin sollicitudin risus. Morbi sed mi eget mauris rutrum interdum ut vitae risus. Duis ac consectetur justo, id dictum leo.</p>
        </div>
        <img src={require('./images/codigo1.jpg')} alt='codigo1' className='w-3/6 h-full object-cover shadow-teal-300'/>
      </div>
      <div className='flex flex-col h-screen items-center justify-between w-full bg-teal-600 snap-start'>
        <img src={require('./images/escribiendo1.jpg')} alt='codigo1' className='w-full h-3/6 object-cover shadow-teal-300'/>
        <div className='text-slate-50 w-11/12 flex flex-row items-center h-full justify-between'>
            <div className='w-5/12 bg-teal-800 p-8 rounded-3xl'>
              <h1 className='text-4xl text-center mb-6'>Nuestra vision</h1>
              <p className='text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris turpis, ullamcorper eget sapien et, elementum semper tortor. Mauris blandit at augue et volutpat. Mauris luctus tortor sit amet erat pellentesque tincidunt. Nulla quis tellus et erat finibus dapibus finibus ac elit. In et facilisis ex. Curabitur ut tincidunt enim. Fusce nec varius felis.</p>
            </div>
            <div className='w-5/12 bg-teal-800 p-8 rounded-3xl'>
              <h1 className='text-4xl text-center mb-6'>Nuestra Mision</h1>
              <p className='text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris turpis, ullamcorper eget sapien et, elementum semper tortor. Mauris blandit at augue et volutpat. Mauris luctus tortor sit amet erat pellentesque tincidunt. Nulla quis tellus et erat finibus dapibus finibus ac elit. In et facilisis ex. Curabitur ut tincidunt enim. Fusce nec varius felis.</p>
            </div>
        </div>
      </div>
      <div className='flex flex-row h-screen items-center justify-center w-full bg-sky-950 space-x-8 snap-start'>
        <div className='text-slate-50 w-2/5'>
          <h1 className='text-3xl text-center mb-6'>Socios comerciales</h1>
          <div className='flex flex-row w-10/12 h-5/12 items-center justify-center'>
            <img src={require('./images/bosch_logo.png')} alt='codigo1' className='w-3/12 h-3/12 object-cover rounded-3xl shadow-teal-300'/>
          </div>
        </div>
      </div>
      <div className='flex flex-col h-screen items-center justify-center w-full bg-teal-900 space-x-8 snap-start' id='contactanos'>
      <div className='text-slate-50 w-2/5'>
        <h1 className='text-3xl text-center mb-6'>Ponte en contacto con nosostros</h1>
        <p className='text-2xl mb-6'>Contamos con un equipo especializado para procesar tu solicitud y darte una respuesta lo mas pronto posible</p>
        
          <form className='flex flex-col space-y-8 text-black'>
            <input type='text' placeholder='Nombre(s)' className='inputClass text-2xl p-3'></input>
            <input type='text' placeholder='Apellidos' className='inputClass text-2xl p-3'></input>
            <input type='text' placeholder='Correo' className='inputClass text-2xl p-3'></input>
            <textarea placeholder='Mensaje' className='h-64 text-2xl p-3'></textarea>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
