
const PublicLayout = ({children}) => {
  return (
    <section className="bg-dark text-white font-urbanist h-screen grid bg-[url(/images/bg-mobile.png)] bg-no-repeat bg-right-bottom md:bg-[url(/images/bg-desktop.png)] transition-all grid-rows-[auto_1fr]">
        <header className="bg-primary-dark flex justify-center p-3 px-4 uppercase items-center">
        <h1 className="font-semibold text-lg">Gift Music</h1>        
      </header>
      <section className="py-14 px-4 overflow-y-auto">
        <main className="w-[min(520px,_100%)] mx-auto bg-primary-dark py-8 px-6 sm:px-14 rounded-3xl">
            {children}
        </main>
      </section>
      {/* Seccion popus */}
      
    </section>
  )
}

export default PublicLayout
