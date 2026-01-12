import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, Sparkles, Target, Shield, Globe, Award, Zap, Building, Users as UsersIcon, Star } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const taglines = [
  "Driving innovation for a sustainable future for all",
  "Empowering Communities Through Safety, Skills, and Self-Reliance",
  "Valuing, privileging, preserving each other is the way"
];

const features = [
  { icon: Shield, label: "Community Safety", color: "text-blue-500" },
  { icon: Target, label: "Skills Development", color: "text-purple-500" },
  { icon: Globe, label: "Sustainable Impact", color: "text-green-500" },
  { icon: Award, label: "Ubuntu Foundation", color: "text-amber-500" },
];

const programCards = [
  { 
    icon: Target, 
    title: "Skills Development", 
    description: "Building futures through education",
    color: "from-green-500 to-emerald-600",
    position: "top"
  },
  { 
    icon: Building, 
    title: "Community Centres", 
    description: "Sizanani Help & Support",
    color: "from-blue-500 to-cyan-600",
    position: "right"
  },
  { 
    icon: UsersIcon, 
    title: "Ambassadors", 
    description: "Life Changers Program",
    color: "from-purple-500 to-pink-600",
    position: "bottom"
  },
  { 
    icon: Star, 
    title: "Youth Programs", 
    description: "Next Generation Leaders",
    color: "from-amber-500 to-orange-600",
    position: "left"
  },
];

export default function HeroSection() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });
  
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getPositionStyles = (position: string) => {
    switch(position) {
      case 'top':
        return { top: '-20px', left: '50%', transform: 'translateX(-50%)' };
      case 'right':
        return { top: '50%', right: '-20px', transform: 'translateY(-50%)' };
      case 'bottom':
        return { bottom: '-20px', left: '50%', transform: 'translateX(-50%)' };
      case 'left':
        return { top: '50%', left: '-20px', transform: 'translateY(-50%)' };
      default:
        return {};
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-green-950 to-gray-900"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-700/10 via-transparent to-transparent" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400/30 rounded-full"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
            }}
            animate={{
              y: [null, `-${Math.random() * 50 + 20}px`],
              x: [null, `${Math.random() * 30 - 15}px`],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated Light Beams */}
      <motion.div 
        animate={{ 
          rotate: 360,
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-green-500/5 to-transparent"
      />
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-500/10 to-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-green-600/10 to-emerald-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 text-green-200 px-5 py-2.5 rounded-full text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-white">Non-Profit Cooperation • Reg: 2025/205554/08</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-green-100 to-emerald-200 bg-clip-text text-transparent">
                Mzansi Prolife
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Development Institute
              </span>
            </motion.h1>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10"
                  >
                    <div className={`p-2 rounded-lg ${feature.color.replace('text', 'bg')}/20`}>
                      <Icon className={`w-5 h-5 ${feature.color}`} />
                    </div>
                    <span className="text-sm font-medium text-white/90">{feature.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Animated Tagline */}
            <div className="h-20 mb-10">
              <motion.div
                key={currentTagline}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-xl italic text-white/70 p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/0 backdrop-blur-sm border-l-4 border-green-500"
              >
                "{taglines[currentTagline]}"
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link to={createPageUrl('Questionnaire')}>
                <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-full px-10 h-14 text-lg shadow-2xl shadow-green-600/30">
                  <span className="relative z-10 flex items-center">
                    Start Questionnaire
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </Link>
              <Link to={createPageUrl('Questionnaire')}>
                <Button size="lg" className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full px-10 h-14 text-lg border border-white/20 shadow-lg">
                  <span className="flex items-center">
                    Get Involved
                    <Zap className="ml-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </span>
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-8"
            >
              <div className="group relative p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-green-500/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6 text-green-400" />
                    </div>
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-green-500/30"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">6+</p>
                    <p className="text-sm text-white/60">Core Projects</p>
                  </div>
                </div>
              </div>
              <div className="group relative p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-amber-500/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Heart className="w-6 h-6 text-amber-400" />
                    </div>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">Ubuntu</p>
                    <p className="text-sm text-white/60">Our Foundation</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Logo & Visual Element - Square Design */}
          <motion.div
            ref={logoRef}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative hidden lg:block perspective-1000"
            initial={{ opacity: 0, rotateY: 20 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Main Container */}
            <div className="relative w-[500px] h-[500px] mx-auto">
              {/* Animated Border */}
              <motion.div
                animate={{ 
                  rotate: 360,
                }}
                transition={{ 
                  duration: 30, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute inset-0 rounded-3xl border border-green-500/20"
              />

              {/* Glowing Background Square */}
              <motion.div
                animate={{ 
                  scale: [1, 1.02, 1],
                  boxShadow: [
                    "0 0 60px rgba(34, 197, 94, 0.2)",
                    "0 0 100px rgba(34, 197, 94, 0.3)",
                    "0 0 60px rgba(34, 197, 94, 0.2)"
                  ]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl overflow-hidden"
              >
                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-emerald-900/5" />
                
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

                {/* Logo Container */}
                <div className="absolute inset-12 rounded-xl overflow-hidden bg-gradient-to-br from-green-600/20 to-emerald-600/10 backdrop-blur-sm">
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    {/* Logo with Enhanced Effects */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 1, 0, -1, 0],
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="relative w-full h-full rounded-lg overflow-hidden border border-white/10 bg-gradient-to-br from-green-700/30 to-emerald-800/20"
                    >
                      <img
                        src="/logo.jpeg"
                        alt="Mzansi Prolife Development Institute Logo"
                        className="w-full h-full object-contain p-6"
                      />
                      
                      {/* Logo Glow Effect */}
                      <motion.div
                        animate={{ 
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity 
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg blur-xl"
                      />
                    </motion.div>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-green-500/50 rounded-tl-lg" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-green-500/50 rounded-tr-lg" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-green-500/50 rounded-bl-lg" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-green-500/50 rounded-br-lg" />
                </div>

                {/* Floating Particles Inside */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-green-400/20 rounded-full"
                    initial={{
                      x: Math.random() * 300 + 100,
                      y: Math.random() * 300 + 100,
                    }}
                    animate={{
                      x: [null, Math.random() * 300 + 100],
                      y: [null, Math.random() * 300 + 100],
                    }}
                    transition={{
                      duration: Math.random() * 4 + 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "linear",
                    }}
                  />
                ))}
              </motion.div>

              {/* Program Cards Around Square */}
              {programCards.map((program, index) => {
                const Icon = program.icon;
                const position = getPositionStyles(program.position);
                
                return (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      delay: 0.8 + index * 0.1, 
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      y: program.position === 'top' ? -5 : program.position === 'bottom' ? 5 : 0,
                      x: program.position === 'left' ? -5 : program.position === 'right' ? 5 : 0,
                    }}
                    className="absolute z-20"
                    style={position}
                  >
                    <div className={`bg-gradient-to-r ${program.color} text-white px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/20 min-w-[180px]`}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-white/20 rounded-lg">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-sm">{program.title}</span>
                      </div>
                      <p className="text-xs opacity-80">{program.description}</p>
                    </div>
                  </motion.div>
                );
              })}

              {/* Animated Connector Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {programCards.map((program, index) => {
                  const getLineCoords = () => {
                    const centerX = 250;
                    const centerY = 250;
                    const offset = 180;
                    
                    switch(program.position) {
                      case 'top':
                        return { x1: centerX, y1: centerY - 80, x2: centerX, y2: centerY - offset };
                      case 'right':
                        return { x1: centerX + 80, y1: centerY, x2: centerX + offset, y2: centerY };
                      case 'bottom':
                        return { x1: centerX, y1: centerY + 80, x2: centerX, y2: centerY + offset };
                      case 'left':
                        return { x1: centerX - 80, y1: centerY, x2: centerX - offset, y2: centerY };
                      default:
                        return { x1: 0, y1: 0, x2: 0, y2: 0 };
                    }
                  };
                  
                  const coords = getLineCoords();
                  
                  return (
                    <motion.line
                      key={index}
                      x1={coords.x1}
                      y1={coords.y1}
                      x2={coords.x2}
                      y2={coords.y2}
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                    />
                  );
                })}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#34d399" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
    </section>
  );
}
