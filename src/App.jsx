import InfitieCarousel from "./components/InfiniteCarousel"

function App() {

  return (
    <div className="relative min-h-dvh w-full bg-black p-2 px-2 text-white ">
      <section className="">
        <header className="flex gap-2 items-center justify-center lg:items-start space-y-1 mx-auto lg:mx-0">
          <div className="flex">
            <img src="assets/logo.jpg" className="h-14 w-auto object-contain xl:h-30" />
            <div className="flex flex-col justify-center -space-y-1">
              <span className="font-montserrat font-bold text-2xl tracking-wide">
                Andrart
              </span>
              <span className="font-montserrat font-light text-[9px] tracking-widest uppercase text-gray-300">
                Agência de Marketing
              </span>
            </div>
          </div>

          <div className="ml-auto hidden lg:flex">
            <button className="text-xs bg-linear-to-r from-[#c73433] to-[#f3a73a] rounded-lg h-full p-2 cursor-pointer hover:scale-110 m-5 xl:p-3 xl:text-lg">ENTRE EM CONTATO</button>
          </div>
        </header>

        <main className="py-5 flex m-6 lg:flex-row items-center bg-gra">
          <div className="flex flex-col lg:w-full font-montserrat justify-center sm:text-3xl mb-auto xl:text-6xl xl:mb-auto lg:text-5xl md:text-4xl md:mb-auto lg:mb-auto xl:m-6 animate-fade-in">
            <span className="tracking-widest animate-right">
              Agência <span className="text-[#e37035]">criativa </span> <br />e estratégica
            </span>
            
            <span className="tracking-widest text-xs sm:text-base xl:text-3xl lg:text-2xl md:text-base animate-right">
              Para quem quer ser <br className="xl:hidden lg:hidden md:hidden" />visto e lembrado.
            </span>

            <div className="hidden lg:block w-full md:max-w-4xl lg:max-w-xl xl:max-w-3xl 2xl:max-w-4xl mt-20">
              <InfitieCarousel />
            </div>

            <div className="block lg:hidden mr-4"> 
              <button className="text-xs sm:text-base md:text-xl bg-linear-to-r from-[#c73433] to-[#f3a73a] rounded-lg p-2 text-white whitespace-nowrap my-10 animate-right">
                ENTRE EM CONTATO
              </button>
            </div>

          </div>

            
              <div className="animate-fade-in ml-auto lg:w-full flex justify-end lg:ml-0">

                <div className="animate-right">
                  <div className="relative bg-linear-to-r from-[#c73433] via-[#e37035] to-[#f3a73a] rounded-2xl">
                    <img src="assets/andre.png" className="relative h-50 w-auto xl:h-127 lg:h-100 md:h-90 sm:h-70 object-cover" />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black h-full w-full"></div>
                  </div>

                </div>
              </div>
            
        </main>

        <div className="lg:hidden">
          <InfitieCarousel />
        </div>
      </section>
    </div>
  )
}

export default App

/* <div className="flex flex-col font-montserrat">
            <span className="text-3xl">Andrart</span>
            <span className="text-xs">Agência de marketing</span>
          </div> */
