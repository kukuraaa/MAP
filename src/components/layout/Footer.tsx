import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <span className="text-lg font-bold text-white">Media Adhi Persada</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Solusi media luar ruang dan produksi periklanan terpercaya untuk meningkatkan visibilitas brand Anda.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition">Beranda</Link></li>
              <li><Link to="/billboard/1" className="hover:text-white transition">Titik Reklame</Link></li>
              <li><Link to="/project/1" className="hover:text-white transition">Portofolio</Link></li>
              <li><Link to="/articles" className="hover:text-white transition">Artikel & Berita</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Layanan</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Billboard & Baliho</li>
              <li>Neon Box & Letter Timbul</li>
              <li>Branding Mobil & Toko</li>
              <li>Perizinan Reklame</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Kontak</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-1" />
                <span>Sukabumi & Jabodetabek, Indonesia</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <span>info@mediaadhipersada.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} CV. Media Adhi Persada. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
