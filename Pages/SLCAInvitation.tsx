import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Briefcase,
  Building2,
  Check,
  Dumbbell,
  Factory,
  GraduationCap,
  HeartHandshake,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sprout,
  Users,
} from 'lucide-react';
import { motion } from 'framer-motion';

const initiatives = [
  {
    icon: HeartHandshake,
    title: 'Community Healing',
    description: 'Problem-solving engagements, reconciliation forums, and village men and women imbizo projects.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Users,
    title: 'Family Development',
    description: 'Family-building, mentorship, boyhood, girlhood, manhood, womanhood, parenting, and leadership growth.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Briefcase,
    title: 'Business Creation',
    description: 'Entrepreneurship, business establishment, investment readiness, and practical income-generating projects.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Building2,
    title: 'Help & Training Centres',
    description: 'Village help centres and gathering places for support, planning, training, and community coordination.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: GraduationCap,
    title: 'Skills Development',
    description: 'Township and rural training pathways that turn practical skill into employment and self-reliance.',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    icon: Sprout,
    title: 'Agriculture',
    description: 'Farming and agricultural establishment projects built around local production and food resilience.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Factory,
    title: 'Factories & Warehousing',
    description: 'Local industrialisation projects that support production, logistics, job creation, and community enterprise.',
    color: 'bg-gray-100 text-gray-700',
  },
  {
    icon: Dumbbell,
    title: 'Sports Development',
    description: 'Sports facilities and management projects that engage youth and strengthen community wellbeing.',
    color: 'bg-orange-50 text-orange-600',
  },
];

const benefits = [
  'Be recognised as a local change agent and community leader.',
  'Help establish practical structures for every village and neighbourhood.',
  'Participate in projects that fight poverty, hunger, unemployment, and social breakdown.',
  'Build leadership, entrepreneurship, planning, mentorship, and implementation experience.',
];

export default function SLCAInvitation() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-gray-900 via-green-900 to-green-700 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-35">
          <img
            src="/campaigns/slca-community-visual.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-green-950/80 to-green-900/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Public Invitation - 01 June 2026
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Become a Social Life Change Ambassador
            </h1>
            <p className="text-xl text-green-50 leading-relaxed mb-8">
              Join a community-driven movement that develops leaders, builds village structures, creates work, supports enterprise, and brings practical hope to township and rural communities across South Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={createPageUrl('Questionnaire', { type: 'ambassador' })}>
                <Button size="lg" className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-50 rounded-full px-8 group">
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="https://wa.me/27822322026" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 border-white text-white hover:bg-white/10">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Join on WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-28"
            >
              <p className="text-green-600 font-semibold mb-4">WHY THIS MATTERS</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                A practical answer to poverty, unemployment, and broken community systems.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                The SLCA initiative invites committed citizens to become part of the solution: forming community structures, coordinating projects, building local companies, and turning shared responsibility into visible progress.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5">
              {initiatives.map((initiative, index) => (
                <motion.div
                  key={initiative.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className={`w-12 h-12 ${initiative.color.split(' ')[0]} rounded-2xl flex items-center justify-center mb-5`}>
                    <initiative.icon className={`w-6 h-6 ${initiative.color.split(' ')[1]}`} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-3">{initiative.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{initiative.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12">
                <p className="text-green-600 font-semibold mb-4">HOW TO PARTICIPATE</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-5">
                  Step forward, apply, and help organise real community action.
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  You can join as an ambassador, participate in outreach, support the movement with a donation, or help share the invitation across WhatsApp and social platforms.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to={createPageUrl('Questionnaire', { type: 'ambassador' })}>
                    <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 rounded-full px-7">
                      Become an Ambassador
                    </Button>
                  </Link>
                  <Link to={createPageUrl('Donate')}>
                    <Button variant="outline" className="w-full sm:w-auto rounded-full px-7 border-green-200 text-green-700 hover:bg-green-50">
                      Support the Movement
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-green-800 p-8 sm:p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">Connect with us</h3>
                <div className="space-y-4">
                  <a href="https://wa.me/27822322026" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white/10 rounded-2xl p-4 hover:bg-white/15 transition-colors">
                    <MessageCircle className="w-6 h-6" />
                    <div>
                      <p className="text-sm text-green-100">WhatsApp</p>
                      <p className="font-semibold">082 232 2026</p>
                    </div>
                  </a>
                  <a href="mailto:mzansiprolifedevelopmentinstitute@gmail.com" className="flex items-center gap-4 bg-white/10 rounded-2xl p-4 hover:bg-white/15 transition-colors">
                    <Mail className="w-6 h-6" />
                    <div>
                      <p className="text-sm text-green-100">Email</p>
                      <p className="font-semibold break-all">mzansiprolifedevelopmentinstitute@gmail.com</p>
                    </div>
                  </a>
                </div>
                <p className="text-green-100 text-sm mt-8">
                  Share the invitation with friends, family, WhatsApp groups, and community leaders who want to help build a better South Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
