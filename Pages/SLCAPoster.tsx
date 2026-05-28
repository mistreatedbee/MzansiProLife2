import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  Facebook,
  Globe,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  Printer,
  QrCode,
} from 'lucide-react';

const bullets = [
  'Community Development',
  'Leadership Opportunities',
  'Skills Development',
  'Entrepreneurship',
  'Youth Empowerment',
  'Job Creation',
];

function Poster({ compact = false }: { compact?: boolean }) {
  return (
    <article className={`${compact ? 'max-w-sm aspect-[9/16]' : 'max-w-[820px] aspect-[4/5]'} mx-auto bg-white shadow-2xl overflow-hidden relative print:shadow-none`}>
      <div className="absolute inset-0">
        <img
          src="/campaigns/slca-community-visual.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/80 via-green-800/60 to-white" />
      </div>

      <div className={`relative h-full flex flex-col ${compact ? 'p-6' : 'p-10 sm:p-12'}`}>
        <div className="flex items-center justify-between gap-4 text-white">
          <div className="flex items-center gap-3">
            <img src="/logo.jpeg" alt="Mzansi Prolife logo" className={`${compact ? 'w-12 h-12' : 'w-16 h-16'} rounded-2xl object-cover bg-white`} />
            <div>
              <p className={`${compact ? 'text-xs' : 'text-sm'} font-semibold uppercase tracking-wide text-green-100`}>Mzansi Prolife</p>
              <p className={`${compact ? 'text-[10px]' : 'text-xs'} text-white/80`}>Development Institute NPC</p>
            </div>
          </div>
          <div className={`${compact ? 'w-14 h-14' : 'w-20 h-20'} bg-white/95 text-green-700 rounded-2xl flex flex-col items-center justify-center`}>
            <QrCode className={`${compact ? 'w-6 h-6' : 'w-9 h-9'}`} />
            <span className="text-[9px] font-bold">SCAN</span>
          </div>
        </div>

        <div className={`${compact ? 'mt-10' : 'mt-16'} text-white`}>
          <p className={`${compact ? 'text-xs' : 'text-sm'} font-bold uppercase tracking-[0.22em] text-green-200 mb-4`}>
            Public Invitation
          </p>
          <h1 className={`${compact ? 'text-4xl' : 'text-6xl'} font-black leading-none max-w-2xl`}>
            BECOME A SOCIAL LIFE CHANGE AMBASSADOR
          </h1>
          <p className={`${compact ? 'text-base mt-5' : 'text-2xl mt-7'} text-green-50 max-w-2xl leading-snug`}>
            Join the movement that is transforming communities across South Africa.
          </p>
        </div>

        <div className={`${compact ? 'mt-7 grid-cols-1 gap-2' : 'mt-10 grid-cols-2 gap-3'} grid`}>
          {bullets.map((bullet) => (
            <div key={bullet} className="flex items-center gap-3 bg-white/95 rounded-2xl px-4 py-3">
              <span className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">✓</span>
              <span className={`${compact ? 'text-sm' : 'text-base'} font-bold text-gray-900`}>{bullet}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto">
          <div className={`${compact ? 'p-5' : 'p-7'} bg-green-700 text-white rounded-[1.75rem]`}>
            <p className={`${compact ? 'text-2xl' : 'text-4xl'} font-black mb-4`}>Be Part of the Change.</p>
            <p className={`${compact ? 'text-sm' : 'text-lg'} font-semibold mb-5`}>Mzansi Prolife Development Institute NPC</p>
            <div className={`${compact ? 'grid-cols-1 text-xs gap-2' : 'grid sm:grid-cols-3 text-sm gap-3'} grid text-green-50`}>
              <span className="flex items-center gap-2"><Phone className="w-4 h-4" />073 753 3200</span>
              <span className="flex items-center gap-2"><Mail className="w-4 h-4" />admin@mzansiprolife.org</span>
              <span className="flex items-center gap-2"><Globe className="w-4 h-4" />www.mzansiprolife.co.za</span>
            </div>
            <div className="flex gap-3 mt-5 text-green-100">
              <Facebook className="w-5 h-5" />
              <Instagram className="w-5 h-5" />
              <MessageCircle className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function SLCAPoster() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 print:bg-white print:py-0">
      <style>{`
        @media print {
          header, footer, .poster-actions, .mobile-preview { display: none !important; }
          article { max-width: 100% !important; width: 100% !important; height: 100vh !important; aspect-ratio: auto !important; }
          @page { size: A4 portrait; margin: 0; }
        }
      `}</style>
      <div className="poster-actions max-w-7xl mx-auto px-4 mb-8 flex flex-col sm:flex-row gap-4 justify-between">
        <Link to={createPageUrl('SLCAInvitation')}>
          <Button variant="outline" className="rounded-full">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Campaign
          </Button>
        </Link>
        <Button onClick={() => window.print()} className="bg-green-600 hover:bg-green-700 rounded-full">
          <Printer className="mr-2 w-4 h-4" />
          Print Poster
        </Button>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[1fr_420px] gap-10 items-start">
        <div>
          <p className="poster-actions text-sm font-semibold text-green-700 mb-3">Printable version</p>
          <Poster />
        </div>
        <div className="mobile-preview">
          <p className="text-sm font-semibold text-green-700 mb-3">Mobile social version</p>
          <Poster compact />
        </div>
      </div>
    </div>
  );
}
