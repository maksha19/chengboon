import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Globe, Award, Target, Users, ExternalLink, ChevronRight, Menu, X } from 'lucide-react';
import { siteContent } from './data/content';
import candidatePhoto from './assets/candidate.png';

const App = () => {
  const [lang, setLang] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const content = siteContent[lang];

  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'cn' : 'en'));
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <div className="w-8 h-8 md:w-10 md:h-10 bg-tm-maroon rounded-full flex items-center justify-center text-white font-bold text-sm">
              LCB
            </div> */}
            <span className="font-bold text-tm-maroon hidden md:inline tracking-tight">
              {lang === 'en' ? 'LIM CHENG BOON' : '林政雯'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 hover:border-tm-gold hover:text-tm-gold transition-colors text-sm font-medium"
            >
              <Globe size={16} />
              {lang === 'en' ? '中文' : 'English'}
            </button>
            <div className="h-6 w-px bg-slate-200" />
            <a href={`tel:${content.contact.phone}`} className="text-tm-maroon hover:text-tm-gold transition-colors">
              <Phone size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-tm-maroon/10 text-tm-maroon text-xs font-bold rounded-full mb-2 tracking-widest uppercase">
                {content.hero.nomination}
              </span>
              <h2 className="text-slate-500 font-medium mb-1">
                {content.hero.district}
              </h2>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
                {content.hero.name}
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 italic border-l-4 border-tm-gold pl-6 py-2 leading-relaxed">
              "{content.hero.slogan}"
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#vision" className="btn-primary flex items-center gap-2">
                {lang === 'en' ? 'My Vision' : '我的愿景'} <ChevronRight size={18} />
              </a>
              <a href="#experience" className="btn-secondary">
                {lang === 'en' ? 'My Journey' : '我的历程'}
              </a>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-tm-gold/10 rounded-2xl -rotate-3" />
              <div className="absolute -inset-4 bg-tm-maroon/5 rounded-2xl rotate-2" />
              <img
                src={candidatePhoto}
                alt={content.hero.name}
                className="relative rounded-2xl shadow-2xl w-full max-w-sm h-auto object-cover aspect-[3/4] border-4 border-white"
              />
              <div className="absolute -bottom-6 -right-6 bg-tm-gold px-6 py-4 rounded-xl shadow-lg text-white">
                <p className="text-xl font-bold">DTM</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-tm-maroon mb-6">{content.vision.title}</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              {content.vision.intro}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.vision.items.map((item, index) => (
              <motion.div
                key={item.id}
                className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-tm-maroon/20 transition-all group"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 bg-tm-maroon rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {index === 0 && <Award size={28} />}
                  {index === 1 && <Users size={28} />}
                  {index === 2 && <Target size={28} />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-tm-maroon text-white text-center shadow-lg">
            <p className="text-xl md:text-2xl font-medium leading-relaxed italic">
              "{content.vision.closing}"
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-tm-maroon mb-4">{content.experience.title}</h2>
              <div className="h-1.5 w-24 bg-tm-gold rounded-full" />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {content.experience.sections.map((section, sidx) => (
              <motion.div
                key={sidx}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: sidx * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-tm-maroon font-bold text-xl mb-6 pb-4 border-b border-slate-50 flex items-center gap-2">
                  <div className="w-2 h-6 bg-tm-gold rounded-full" />
                  {section.title}
                </h3>
                <ul className="space-y-6">
                  {section.items.map((item, iidx) => (
                    <li key={iidx} className="flex gap-4 group">
                      <div className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-tm-gold group-hover:scale-150 transition-transform" />
                      <span className="text-slate-700 leading-relaxed font-medium">
                        {item.includes('⭐') ?
                          <span className="bg-tm-gold/10 text-tm-gold px-2 py-0.5 rounded font-bold">{item}</span>
                          : item
                        }
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="section-padding bg-tm-navy text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">{content.contact.title}</h2>
              <p className="text-white/70 text-lg mb-8 max-w-md">
                {content.contact.message}
              </p>

              <div className="space-y-6">
                <a href={`tel:${content.contact.phone}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-tm-gold transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm opacity-50 uppercase tracking-widest">{lang === 'en' ? 'Phone' : '电话'}</p>
                    <p className="text-xl font-bold">{content.contact.phone}</p>
                  </div>
                </a>

                <a href={`mailto:${content.contact.email}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-tm-gold transition-colors shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm opacity-50 uppercase tracking-widest">{lang === 'en' ? 'Email' : '电邮'}</p>
                    <p className="text-xl font-bold break-all md:break-normal">{content.contact.email}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white/10 p-8 md:p-10 rounded-3xl border border-white/20 backdrop-blur-md self-stretch flex flex-col justify-center text-center shadow-2xl overflow-hidden">
              <h3 className="text-2xl font-bold mb-4">{lang === 'en' ? 'Vote for Change' : '投我一票'}</h3>
              <p className="text-white/60 mb-8">{lang === 'en' ? 'Together, we empower every club to grow, shine, and thrive!' : '共同努力，赋能每个分会成长、发光、茁壮成长！'}</p>
              <a
                href={content.contact.nominationUrl}
                className="w-full bg-tm-gold hover:bg-tm-gold/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 text-lg active:scale-95"
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.contact.nominationLabel} <ExternalLink size={20} />
              </a>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-50">
            <p>© 2026 {lang === 'en' ? 'Lim Cheng Boon' : '林政雯'}. All rights reserved.</p>
            <p>District 80 Toastmasters International CGD Candidate 2026-27</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
