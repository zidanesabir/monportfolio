import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Linkedin, Mail, Phone, MapPin, Github, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

// --- Data & Translations ---
const translations = {
  en: {
    sectionTitle: "Contact",
    formTitle: "Send me a message",
    formName: "Name and Surname",
    formEmail: "Email",
    formMessage: "Message",
    formSubmit: "SEND",
    formSending: "SENDING...",
    detailsTitle: "Contact Details",
    successMessage: "Message sent successfully! I will get back to you soon.",
    errorMessage: "Failed to send message. Please try again later.",
  },
  fr: {
    sectionTitle: "Contact",
    formTitle: "Envoyez-moi un message",
    formName: "Nom et Prénom",
    formEmail: "Email",
    formMessage: "Message",
    formSubmit: "ENVOYER",
    formSending: "ENVOI...",
    detailsTitle: "Coordonnées",
    successMessage: "Message envoyé avec succès ! Je vous répondrai bientôt.",
    errorMessage: "Échec de l'envoi du message. Veuillez réessayer plus tard.",
  },
};

const contactDetails = [
    { icon: Linkedin, text: 'sabir zidane', href: 'https://www.linkedin.com/in/sabir-zidane-7aa987262/' },
    { icon: Mail, text: 'sabirzidane0@gmail.com', href: 'mailto:sabirzidane0@gmail.com' },
    { icon: Phone, text: '+212 610592544', href: 'tel:+212610592544' },
    { icon: MapPin, text: 'Marrakech, Morocco', href: '#' },
    { icon: Github, text: 'zidanesabir', href: 'https://github.com/zidanesabir' },
];

// --- Component ---
const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // ✨ 1. State for the notification message
  const [notification, setNotification] = useState<{type: 'success' | 'error', message: string} | null>(null);

  // ✨ 2. Effect to automatically hide the notification after 5 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setIsSending(true);

    emailjs.sendForm(
      'service_06cxi6z',
      'template_igbab9j',
      form.current,
      'TymIMjpCMxboXxF2d'
    )
    .then(() => {
        // ✨ 3. Set success notification instead of alert
        setNotification({ type: 'success', message: t.successMessage });
        setFormData({ name: '', email: '', message: '' });
    }, () => {
        // ✨ 4. Set error notification instead of alert
        setNotification({ type: 'error', message: t.errorMessage });
    })
    .finally(() => {
        setIsSending(false);
    });
  };

  return (
    <section id="contact" className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12">
          <div className="inline-flex items-center space-x-4">
            <h2 id="contact-heading" className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl font-mono m-0">
              <span className="text-yellow-400">#</span>
              <span className="text-white">{t.sectionTitle}</span>
            </h2>
            <div className="h-0.5 w-24 sm:w-40 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="bg-amber-800 border border-yellow-500/20 rounded-xl p-6 sm:p-8">
            <h3 className="text-center text-lg font-semibold text-amber-100 mb-6 relative quote-title">{t.formTitle}</h3>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} className="custom-input peer" placeholder=" " required />
                  <label htmlFor="name" className="custom-label">{t.formName}</label>
                </div>
                <div className="relative">
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} className="custom-input peer" placeholder=" " required />
                  <label htmlFor="email" className="custom-label">{t.formEmail}</label>
                </div>
              </div>
              <div className="relative">
                <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleInputChange} className="custom-input peer" placeholder=" " required></textarea>
                <label htmlFor="message" className="custom-label">{t.formMessage}</label>
              </div>
              <div className="text-center">
                <button type="submit" className="px-10 py-3 font-semibold text-amber-900 bg-yellow-400 rounded-lg shadow-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105 disabled:bg-yellow-600/50 disabled:cursor-not-allowed" disabled={isSending}>
                  {isSending ? t.formSending : t.formSubmit}
                </button>
              </div>
            </form>
          </div>
          <div className="bg-amber-800 border border-yellow-500/20 rounded-xl p-6 sm:p-8">
            <h3 className="text-center text-lg font-semibold text-amber-100 mb-6 relative quote-title">{t.detailsTitle}</h3>
            <div className="space-y-4">
              {contactDetails.map(({ icon: Icon, text, href }) => (
                <a key={text} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <Icon className="h-6 w-6 text-yellow-400/80 group-hover:text-yellow-300 transition-colors" />
                  <span className="text-amber-200 group-hover:text-amber-100 transition-colors">{text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ✨ 5. The Notification Component */}
      {notification && (
        <div className={`fixed bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-3 rounded-lg shadow-lg text-white animate-slide-in-out z-50
          ${notification.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}
        >
          {notification.type === 'success' ? <CheckCircle className="h-6 w-6" /> : <XCircle className="h-6 w-6" />}
          <p className="font-semibold">{notification.message}</p>
        </div>
      )}

      <style>{`
        .quote-title::before, .quote-title::after { content: '"'; position: absolute; font-family: serif; font-size: 2.5rem; line-height: 1; color: rgba(252, 211, 77, 0.3); }
        .quote-title::before { top: -0.5rem; left: -0.5rem; }
        .quote-title::after { bottom: -1.5rem; right: -0.5rem; }
        .custom-input { width: 100%; padding: 0.75rem; background-color: transparent; border: 1px solid rgba(252, 211, 77, 0.3); border-radius: 0.5rem; color: white; transition: border-color 0.3s; }
        .custom-input:focus { outline: none; border-color: rgba(251, 191, 36, 1); }
        .custom-label { position: absolute; top: 0.75rem; left: 0.75rem; color: rgba(217, 119, 6, 0.7); background-color: transparent; padding: 0 0.25rem; transition: all 0.2s ease-out; pointer-events: none; }
        .peer:focus ~ .custom-label,
        .peer:not(:placeholder-shown) ~ .custom-label {
          transform: translateY(-1.75rem) scale(0.85);
          background-color: #92400e;
          color: rgba(251, 191, 36, 1);
        }
        
        /* ✨ 6. Animation for the notification */
        @keyframes slide-in-out {
          0% { transform: translate(-50%, 100px); opacity: 0; }
          15%, 85% { transform: translate(-50%, 0); opacity: 1; }
          100% { transform: translate(-50%, 100px); opacity: 0; }
        }
        .animate-slide-in-out {
          animation: slide-in-out 5s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Contact;