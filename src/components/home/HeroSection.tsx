import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, Sparkles, Shield, Globe, Award, Zap } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const taglines = [
  "Driving innovation for a sustainable future for all",
  "Empowering Communities Through Safety, Skills, and Self-Reliance",
  "Valuing, privileging, preserving each other is the way"
];

const features = [
  { icon: Shield, label: "Community Safety", color: "text-blue-500" },
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
  
  const rotateX = useTransform(springY, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-3, 3]);

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
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-green-950/90 to-gray-900" />
        
        {/* Animated Mesh Gradient */}
        <motion.div 
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500 via-emerald-400 to-teal-300 bg-[size:400%_400%]"
        />
        
        {/* Grid Pattern with Animation */}
        <motion.div 
          animate={{ 
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:60px_60px]"
        />
        
        {/* Floating Geometric Shapes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-green-500/10 rounded-full"
            style={{
              width: Math.random() * 200 + 50 + 'px',
              height: Math.random() * 200 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              rotate: 360,
              x: [0, Math.sin(i) * 50, 0],
              y: [0, Math.cos(i) * 50, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
        
        {/* Enhanced Floating Particles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400/40 rounded-full"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 60 - 30, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Rotating Light Orbs */}
      <motion.div 
        animate={{ 
          rotate: 360,
        }}
        transition={{ 
          duration: 40, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-10"
      >
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-2/3 w-80 h-80 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl" />
      </motion.div>
      
      {/* Glowing Spots */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-500/10 to-emerald-500/5 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-green-600/10 to-emerald-400/5 rounded-full blur-3xl"
      />

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

          {/* Enhanced Logo Section */}
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
            {/* Main Logo Container */}
            <div className="relative w-[550px] h-[550px] mx-auto">
              {/* Background Glow Effects */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/10 via-emerald-400/5 to-teal-300/5 blur-xl"
              />
              
              {/* Animated Border Rings */}
              <motion.div
                animate={{ 
                  rotate: -360,
                  borderColor: ['rgba(34, 197, 94, 0.2)', 'rgba(34, 197, 94, 0.4)', 'rgba(34, 197, 94, 0.2)'],
                }}
                transition={{ 
                  duration: 15, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute inset-4 rounded-2xl border-2 border-green-500/20"
              />
              
              <motion.div
                animate={{ 
                  rotate: 360,
                  borderColor: ['rgba(52, 211, 153, 0.1)', 'rgba(52, 211, 153, 0.3)', 'rgba(52, 211, 153, 0.1)'],
                }}
                transition={{ 
                  duration: 12, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute inset-10 rounded-xl border border-emerald-400/20"
              />

              {/* Main Logo Square */}
              <motion.div
                animate={{ 
                  scale: [1, 1.02, 1],
                  boxShadow: [
                    "0 0 80px rgba(34, 197, 94, 0.3)",
                    "0 0 120px rgba(34, 197, 94, 0.5)",
                    "0 0 80px rgba(34, 197, 94, 0.3)"
                  ]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl overflow-hidden"
                style={{ transform: "translateZ(50px)" }}
              >
                {/* Inner Glow Layer */}
                <motion.div
                  animate={{ 
                    opacity: [0.1, 0.2, 0.1],
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-400/5 to-teal-300/5 bg-[size:200%_200%]"
                />
                
                {/* Animated Geometric Pattern */}
                <div className="absolute inset-0 opacity-10">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute border border-white/10"
                      style={{
                        left: `${i * 20}%`,
                        top: `${i * 15}%`,
                        width: `${100 - i * 15}%`,
                        height: `${100 - i * 15}%`,
                        borderRadius: i % 2 === 0 ? '10px' : '20px',
                      }}
                      animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 30 + i * 5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>

                {/* Logo Container */}
                <div className="absolute inset-4 rounded-lg overflow-hidden bg-gradient-to-br from-green-700/30 to-emerald-800/20 backdrop-blur-sm">
                  {/* Enhanced Logo with Multiple Layers */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    {/* Background Pattern */}
                    <motion.div
                      animate={{ 
                        rotate: 180,
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ 
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-[size:30px_30px]"
                    />
                    
                    {/* Main Logo - Much Larger */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.03, 1],
                        rotate: [0, 1, 0, -1, 0],
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="relative w-full h-full rounded-lg overflow-hidden"
                    >
                      <img
                        src="/logo.jpeg"
                        alt="Mzansi Prolife Development Institute Logo"
                        className="w-full h-full object-contain p-2"
                      />
                      
                      {/* Multiple Glow Layers */}
                      <motion.div
                        animate={{ 
                          opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity 
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-lg blur-lg"
                      />
                      
                      <motion.div
                        animate={{ 
                          opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          delay: 0.5
                        }}
                        className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-emerald-300/5 to-teal-200/5 rounded-lg blur-xl"
                      />
                    </motion.div>
                  </div>

                  {/* Floating Particles Inside Logo Area */}
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-green-400/30 rounded-full"
                      style={{
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                      }}
                      animate={{
                        y: [0, -20, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Orbiting Elements (Removed text blocks, kept decorative) */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-gradient-to-r from-green-400/20 to-emerald-400/10 rounded-full border border-white/5"
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: '-8px',
                    marginTop: '-8px',
                  }}
                  animate={{
                    rotate: 360,
                    x: Math.cos(i * (Math.PI / 4)) * 240,
                    y: Math.sin(i * (Math.PI / 4)) * 240,
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 20 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent pointer-events-none" />
      
      {/* Subtle Noise Texture - Fixed */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`
        }}
      />
    </section>
  );
}
