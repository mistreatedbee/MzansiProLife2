import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  HeartHandshake,
  MessageCircle,
  Share2,
  Sprout,
  Users,
} from 'lucide-react';
import { motion } from 'framer-motion';

const impactCards = [
  {
    icon: Users,
    title: 'Community Leadership',
    description: 'Mobilise local households, guide village structures, and lead solution-focused community action.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Briefcase,
    title: 'Entrepreneurship',
    description: 'Support business establishment, income-generating projects, and work creation in local communities.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: GraduationCap,
    title: 'Skills Development',
    description: 'Help connect township and rural communities to practical training, mentorship, and opportunity.',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    icon: Sprout,
    title: 'Farming & Projects',
    description: 'Champion agriculture, wellness, safety, sports, and training-centre initiatives that build resilience.',
    color: 'bg-green-50 text-green-600',
  },
];

export default function SLCAInvitationSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-green-50/60 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HeartHandshake className="w-4 h-4" />
              Public Invitation - SLCA Movement
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Become a Social Life
              <br />
              <span className="text-green-600">Change Ambassador</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl">
              Mzansi Prolife is inviting ordinary South Africans with a heart for transformation to help build community structures, create work, develop skills, and lead practical projects in townships and rural communities.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 mb-8">
              {['Lead locally', 'Build opportunity', 'Leave a legacy'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white border border-green-100 rounded-2xl px-4 py-3 shadow-sm"
                >
                  <p className="text-sm font-semibold text-gray-800">{item}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={createPageUrl('SLCAInvitation')}>
                <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 rounded-full px-8 shadow-lg shadow-green-600/30 group">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to={createPageUrl('Questionnaire', { type: 'ambassador' })}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 border-green-200 text-green-700 hover:bg-green-50">
                  Apply Now
                </Button>
              </Link>
              <a href="https://wa.me/27822322026" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 border-gray-200">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-emerald-100 rounded-[2rem] rotate-2 scale-[1.02]" />
            <div className="relative bg-white rounded-[1.75rem] shadow-2xl overflow-hidden border border-green-100">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/campaigns/slca-community-visual.png"
                  alt="Community members collaborating as Social Life Change Ambassadors"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-gray-950/10 to-transparent" />
                <div className="absolute left-6 right-6 bottom-6">
                  <p className="text-white text-sm font-medium mb-2">Join the movement</p>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    Community transformation starts with people who step forward.
                  </h3>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 p-6">
                {impactCards.map((card) => (
                  <motion.div
                    key={card.title}
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                    className="rounded-2xl bg-gray-50 p-4 hover:bg-white hover:shadow-lg transition-all"
                  >
                    <div className={`w-11 h-11 ${card.color.split(' ')[0]} rounded-xl flex items-center justify-center mb-3`}>
                      <card.icon className={`w-5 h-5 ${card.color.split(' ')[1]}`} />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{card.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{card.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="px-6 pb-6">
                <Link
                  to={createPageUrl('SLCAPoster')}
                  className="flex items-center justify-between rounded-2xl bg-green-50 px-5 py-4 text-green-700 hover:bg-green-100 transition-colors"
                >
                  <span className="font-semibold">View campaign poster</span>
                  <Share2 className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
