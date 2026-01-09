import Logo from "../public/assets/logo.jpg"
import Andre from "../public/assets/andre.png"

function App() {

  return (
    <div className="relative min-h-dvh w-full bg-black p-2 px-2 text-white ">
      <section className="">
        <header className="flex gap-2 items-center">
          <img src={Logo} className="h-14 w-auto object-contain xl:h-30" />
          <div className="flex flex-col justify-center -space-y-1">
            <span className="font-montserrat font-bold text-2xl tracking-wide">
              Andrart
            </span>
            <span className="font-montserrat font-light text-[9px] tracking-widest uppercase text-gray-300">
              Agência de Marketing
            </span>
          </div>

          <div className="ml-auto">
            <button className="text-xs bg-linear-to-r from-[#c73433] to-[#f3a73a] to-[#f3a73a] rounded-lg h-full p-2 cursor-pointer hover:scale-110 m-5 xl:p-3 xl:text-lg">ENTRE EM CONTATO</button>
          </div>
        </header>

        <main className="py-5 flex m-6">
          <div className="flex flex-col font-montserrat justify-center mb-auto xl:text-7xl xl:mb-auto lg:text-5xl md:text-4xl md:mb-auto lg:mb-auto xl:m-6">
            <span className="tracking-widest">
              Agência <span className="text-[#e37035]">criativa</span>
            </span>
            <span className="tracking-widest">
              e estratégica.
            </span>

            <span className="tracking-widest text-xs xl:text-3xl lg:text-2xl md:text-base">
              Para quem quer ser <br className="xl:hidden lg:hidden md:hidden"/>lembrado e ser visto.
            </span>
          </div>

        
          <div className="animate-fade-in ml-auto">
            <div className="animate-right">
              <div className="relative bg-linear-to-r from-[#c73433] to-[#e37035] to-[#f3a73a] rounded-2xl ">
                <img src={Andre} className="relative h-50 w-auto xl:h-128 lg:h-100 md:h-90"/>
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black h-full w-full"></div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  )
}

export default App

/* <div className="flex flex-col font-montserrat">
            <span className="text-3xl">Andrart</span>
            <span className="text-xs">Agência de marketing</span>
          </div> */
