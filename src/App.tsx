import { Laptop, Globe, ShoppingCart, BarChart3, Phone, Mail, ExternalLink } from "lucide-react"
import "./App.css"

export default function DigitalGickPoster() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-white to-violet-400 p-4">
      <div className="max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white p-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="block">DIGITAL-GICK</span>
            <span className="text-2xl md:text-3xl font-light mt-2 block">
              Transformez votre entreprise avec le numérique
            </span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="p-8">
          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="flex items-start space-x-4">
              <div className="bg-cyan-100 p-3 rounded-full">
                <ShoppingCart className="h-6 w-6 text-cyan-700" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">E-commerce</h3>
                <p className="text-gray-600">Vendez vos produits en ligne et élargissez votre clientèle</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-cyan-100 p-3 rounded-full">
                <Globe className="h-6 w-6 text-cyan-700" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">Site Vitrine</h3>
                <p className="text-gray-600">Présentez votre entreprise et vos services avec élégance</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-cyan-100 p-3 rounded-full">
                <BarChart3 className="h-6 w-6 text-cyan-700" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">Portfolio</h3>
                <p className="text-gray-600">Mettez en valeur vos réalisations et votre expertise</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-cyan-100 p-3 rounded-full">
                <Laptop className="h-6 w-6 text-cyan-700" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">Blog</h3>
                <p className="text-gray-600">Partagez votre expertise et améliorez votre visibilité</p>
              </div>
            </div>
          </div>

          {/* Why Digital */}
          <div className="bg-gray-50 p-6 rounded-lg mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Pourquoi digitaliser votre entreprise ?</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></div>
                <span>Augmentez votre visibilité et atteignez de nouveaux clients</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></div>
                <span>Restez accessible 24h/24 et 7j/7</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></div>
                <span>Améliorez votre image de marque et votre crédibilité</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></div>
                <span>Développez votre chiffre d'affaires</span>
              </li>
            </ul>
          </div>

          {/* Illustration */}
          <div className="flex justify-center mb-10">
            <div className="relative w-full max-w-lg h-64">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-48 bg-cyan-700 rounded-lg transform rotate-3"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-48 bg-white border-2 border-cyan-600 rounded-lg shadow-lg flex items-center justify-center p-4">
                    <div className="text-center">
                      <Laptop className="h-16 w-16 text-cyan-600 mx-auto mb-2" />
                      <p className="text-lg font-semibold text-gray-800">
                        Votre entreprise mérite d'être visible en ligne
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-cyan-800 text-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Contactez-nous dès maintenant</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 lg:justify-center 2xl:justify-center">
                <Phone className="h-5 w-5" />
                <span className="underline"><a href="https://wa.me/+2250788557370">07-88-55-73-70</a></span>
              </div>
              <div className="flex items-center space-x-3 lg:justify-center 2xl:justify-center">
                <Mail className="h-5 w-5" />
                <span className="underline"><a href="mailto:nguessanaxel21@gmail.com">nguessanaxel21@gmail.com</a></span>
              </div>
              <div className="flex items-center space-x-3 lg:justify-center 2xl:justify-center ">
                <ExternalLink className="h-5 w-5" />
                <a
                  href="https://digitalgick.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  digitalgick.vercel.app
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
