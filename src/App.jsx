import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Globe, Award, Target, Users, ExternalLink, ChevronRight, Menu, X, Quote, PenLine, Loader2 } from 'lucide-react';
import { siteContent } from './data/content';
import candidatePhoto from './assets/candidate.png';

// Achievement Photos
import ach1 from './assets/achivements/photo_1.jpeg';
import ach2 from './assets/achivements/photo_2.jpeg';
import ach3 from './assets/achivements/photo_3.jpeg';
import ach4 from './assets/achivements/photo_4.jpeg';
import ach5 from './assets/achivements/photo_5.jpeg';
import ach6 from './assets/achivements/photo_6.jpeg';
import ach7 from './assets/achivements/photo_7.jpeg';
import ach9 from './assets/achivements/photo_9.jpeg';
import ach10 from './assets/achivements/photo_10.jpeg';
import ach11 from './assets/achivements/photo_11.jpeg';
import ach12 from './assets/achivements/photo_12.jpeg';
import ach13 from './assets/achivements/photo_13.jpeg';
import ach14 from './assets/achivements/photo_14.jpeg';
import ach15 from './assets/achivements/photo_15.jpeg';
import ach16 from './assets/achivements/photo_16.jpeg';
import ach17 from './assets/achivements/photo_17.jpeg';
import ach18 from './assets/achivements/photo_18.jpeg';
import ach19 from './assets/achivements/photo_19.jpeg';
import ach20 from './assets/achivements/photo_20.jpeg';

const achievementPhotos = [
  ach1, ach2, ach3, ach4, ach5, ach6, ach7, ach9, ach10,
  ach11, ach12, ach13, ach14, ach15, ach16, ach17, ach18, ach19, ach20
];

const TESTIMONIALS_API_URL = "https://script.google.com/macros/s/AKfycbzeAxP3TOE_N4uZE40YPJ-0wxEf5mx7oB0J7hIWENxs27fb_DmbvvsYbtRo3JqS-H1w/exec";
const App = () => {
  const [lang, setLang] = useState('en');
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const content = siteContent[lang];

  useEffect(() => {
    const fetchTestimonials = async () => {
      setIsLoading(true);
      try {
        // First try to fetch from the live API
        if (TESTIMONIALS_API_URL) {
          const res = await fetch(TESTIMONIALS_API_URL);
          if (!res.ok) throw new Error("API response was not ok");
          const data = await res.json();

          if (Array.isArray(data) && data.length > 0) {
            setTestimonials(data);
            setIsLoading(false);
            return;
          }
        }

        // Fallback to local data if API is not set, empty, or fails
        const localData = await import('./data/testimonials.json');
        setTestimonials(localData.default);
      } catch (error) {
        console.error("Using local data fallback due to fetch error:", error);
        const localData = await import('./data/testimonials.json');
        setTestimonials(localData.default);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'cn' : 'en'));
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-tm-maroon tracking-tight">
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
            <p className="text-xl md:text-2xl bg-tm-maroon rounded-2xl text-white mb-8 italic pl-6 py-2 leading-relaxed">
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
            <div className='mt-10'>
              <h1 className="text-4xl font-bold mb-4">{lang === 'en' ? 'Vote for Change Vote 🗳️ for Cheng Boon' : '为改变投一票 🗳️ 把这一票投给林政雯卓越讲员'}</h1>
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

      {/* Achievements Carousel */}
      <section id="achievements" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-tm-maroon mb-4">{content.achievements.title}</h2>
          <p className="text-slate-600">{content.achievements.subtitle}</p>
        </div>

        <div className="flex overflow-hidden group">
          <motion.div
            className="flex gap-6 px-6"
            animate={{ x: [0, -7752] }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {[...achievementPhotos, ...achievementPhotos].map((photo, index) => (
              <div key={index} className="w-80 h-60 md:w-96 md:h-72 shrink-0 rounded-2xl shadow-lg border-4 border-white overflow-hidden">
                <img src={photo} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-tm-maroon font-bold tracking-widest text-sm mb-2 uppercase">{content.testimonials.overline}</p>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">{content.testimonials.title}</h2>
              <p className="text-slate-600">{content.testimonials.subtitle}</p>
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfMC-y0Vo9oUsa_sRvtlDY6mGEXHx3QuJbHKf0Y2zxYmbFA4w/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-tm-maroon text-white font-bold rounded-full flex items-center gap-2 hover:bg-tm-maroon/90 transition-all shadow-lg active:scale-95 w-fit"
            >
              <PenLine size={18} />
              {content.testimonials.buttonText}
            </a>
          </div>

          <div className="min-h-[400px] relative">
            {isLoading ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-tm-maroon/40 gap-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Loader2 size={48} />
                </motion.div>
                <p className="font-medium animate-pulse">Loading Testimonials...</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                <AnimatePresence>
                  {testimonials.map((testi, idx) => (
                    <motion.div
                      key={testi.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative group hover:shadow-xl transition-all"
                    >
                      <Quote className="absolute top-8 right-8 text-tm-maroon/5 w-12 h-12 group-hover:text-tm-maroon/10 transition-colors" />
                      <p className="text-slate-700 italic leading-relaxed text-lg mb-8 relative z-10">
                        "{lang === 'en' ? testi.quote_en : testi.quote_cn}"
                      </p>
                      <div className="pt-6 border-t border-slate-50">
                        <h4 className="font-bold text-slate-900 text-lg mb-1">{lang === 'en' ? testi.name : testi.name_cn}</h4>
                        <p className="text-tm-maroon text-sm font-semibold mb-1 uppercase tracking-tight">
                          {lang === 'en' ? testi.club_en : testi.club_cn}
                        </p>
                        <div className="flex items-center justify-between text-slate-400 text-xs">
                          <span>{lang === 'en' ? testi.role_en : testi.role_cn}</span>
                          <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-500 font-bold">{testi.district}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
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
              <h3 className="text-2xl font-bold mb-4">{lang === 'en' ? 'Vote for Cheng Boon' : '请投林政雯一票'}</h3>
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
