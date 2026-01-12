import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, Sparkles, Target, Shield, Globe, Award, Zap } from 'lucide-react';
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

export default function HeroSection() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });
  
  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

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

          {/* Logo & Visual Element */}
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
            {/* Glowing Center */}
            <div className="relative w-[600px] h-[600px] mx-auto">
              {/* Outer Rings with Animation */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-green-500/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-10 border border-emerald-400/30 rounded-full"
              />
              
              {/* Main Logo Container */}
              <motion.div
                animate={{ 
                  scale: [1, 1.02, 1],
                  boxShadow: [
                    "0 0 40px rgba(34, 197, 94, 0.2)",
                    "0 0 80px rgba(34, 197, 94, 0.4)",
                    "0 0 40px rgba(34, 197, 94, 0.2)"
                  ]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-20 bg-gradient-to-br from-green-600 via-emerald-500 to-green-700 rounded-full shadow-2xl overflow-hidden"
                style={{ transform: "translateZ(50px)" }}
              >
                {/* Logo with Glow Effect */}
                <div className="absolute inset-0 flex items-center justify-center p-16">
                  <div className="relative w-full h-full">
                    {/* Logo Background Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />
                    
                    {/* Logo Image Container */}
                    <motion.div
                      animate={{ 
                        rotate: [0, 5, 0, -5, 0],
                      }}
                      transition={{ 
                        duration: 10, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="relative w-full h-full"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full" />
                      <img
                        src="/logo.jpeg"
                        alt="Mzansi Prolife Development Institute Logo"
                        className="w-full h-full object-contain p-8 rounded-full"
                      />
                    </motion.div>
                    
                    {/* Glow Effect */}
                    <motion.div
                      animate={{ 
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity 
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-xl"
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="absolute -top-6 left-1/2 -translate-x-1/2"
                >
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full shadow-lg backdrop-blur-sm border border-white/20">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      <span className="font-semibold text-sm">Skills Development</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9, type: "spring" }}
                  className="absolute bottom-10 -left-6"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-full shadow-lg backdrop-blur-sm border border-white/20">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span className="font-semibold text-sm">Community Centres</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                  className="absolute bottom-10 -right-6"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg backdrop-blur-sm border border-white/20">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span className="font-semibold text-sm">Ambassadors Program</span>
                    </div>
                  </div>
                </motion.div>

                {/* Rotating Orbital Elements */}
                {[0, 120, 240].map((angle, index) => (
                  <motion.div
                    key={index}
                    className="absolute top-1/2 left-1/2 w-24 h-24"
                    animate={{ rotate: 360 }}
                    transition={{ 
                      duration: 20 + index * 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{ 
                      transformOrigin: 'center',
                      marginLeft: '-48px',
                      marginTop: '-48px',
                    }}
                  >
                    <div 
                      className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full border border-white/10 backdrop-blur-sm flex items-center justify-center"
                      style={{
                        transform: `rotate(${-angle}deg) translateX(200px) rotate(${angle}deg)`
                      }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="w-8 h-8"
                      >
                        <Sparkles className="w-4 h-4 text-green-300" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
    </section>
  );
}
