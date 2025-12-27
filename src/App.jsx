import React, { useState } from 'react';
import { Sparkles, Zap, Repeat, Check, X, ArrowRight, Loader2, MessageCircle, TrendingUp } from 'lucide-react';
import { supabase } from './supabaseClient';

function App() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [showModal, setShowModal] = useState(false);

  const handleJoin = async (e) => {
    e.preventDefault();
    setStatus('loading');
    console.log("Saving:", email);

    const { error } = await supabase.from('leads').insert([{ email: email }]);

    if (error) {
      if (error.code === '23505') setStatus('registered'); // Already joined
      else { 
        console.error(error);
        setStatus('error');
      }
    } else {
      setStatus('success');
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-purple-500/30">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 backdrop-blur-xl border-b border-white/5 bg-black/60">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-white">
            <div className="w-6 h-6 bg-purple-600 rounded-full blur-[2px] animate-pulse"></div>
            Ghost.
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="hidden md:block text-sm font-medium text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hidden md:block text-sm font-medium text-gray-400 hover:text-white transition-colors">Pricing</a>
            <button onClick={() => setShowModal(true)} className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-all">
              Get Access
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 pb-32 px-6 flex flex-col items-center text-center max-w-5xl mx-auto">
        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-900/20 blur-[120px] rounded-full -z-10"></div>
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-purple-300 text-xs font-medium mb-8">
          <Sparkles size={12} />
          v2.0 Public Beta is Live
        </div>

        <h1 className="text-5xl md:text-8xl font-medium mb-8 leading-[1.05] tracking-tight text-white">
          Social growth on <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">autopilot.</span>
        </h1>
        
        <p className="text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
          Ghost builds your personal brand while you sleep. Our AI writes, schedules, and engages with your audience 24/7.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button onClick={() => setShowModal(true)} className="h-14 px-8 rounded-full bg-white text-black font-bold text-lg hover:bg-purple-50 transition-all flex items-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            Start Automation <ArrowRight size={18} />
          </button>
        </div>
      </header>

      {/* Features - Bento Grid Style */}
      <section id="features" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-medium text-white mb-16 text-center">Your new digital brain.</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
            {/* Large Card */}
            <div className="md:col-span-2 bg-[#0F0F0F] border border-white/5 p-8 rounded-3xl hover:border-purple-500/30 transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Sparkles size={120} />
                </div>
                <div className="w-12 h-12 bg-purple-900/20 rounded-xl flex items-center justify-center text-purple-400 mb-6">
                    <Zap />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Content Generation</h3>
                <p className="text-gray-400 leading-relaxed max-w-md">
                    Stop staring at a blank page. Ghost analyzes your niche and generates 
                    viral-ready threads, posts, and polls instantly.
                </p>
            </div>

            {/* Tall Card */}
            <div className="bg-[#0F0F0F] border border-white/5 p-8 rounded-3xl hover:border-purple-500/30 transition-all">
                <div className="w-12 h-12 bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                    <TrendingUp />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Viral Predictions</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Our algorithm scans millions of posts to tell you exactly what topics are trending before they peak.
                </p>
            </div>

            {/* Small Card */}
            <div className="bg-[#0F0F0F] border border-white/5 p-8 rounded-3xl hover:border-purple-500/30 transition-all">
                <div className="w-12 h-12 bg-green-900/20 rounded-xl flex items-center justify-center text-green-400 mb-6">
                    <Repeat />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Auto-Recycle</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Automatically retweet your best performing content after 6 months.
                </p>
            </div>

             {/* Large Card */}
             <div className="md:col-span-2 bg-[#0F0F0F] border border-white/5 p-8 rounded-3xl hover:border-purple-500/30 transition-all">
                <div className="w-12 h-12 bg-pink-900/20 rounded-xl flex items-center justify-center text-pink-400 mb-6">
                    <MessageCircle />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Smart Engagement</h3>
                <p className="text-gray-400 leading-relaxed max-w-md">
                    Ghost identifies big accounts in your niche and drafts intelligent replies to their posts, 
                    driving traffic back to your profile.
                </p>
            </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12 text-center">
                <div>
                    <div className="text-5xl font-black text-white/10 mb-4">01</div>
                    <h3 className="text-white font-bold text-lg mb-2">Connect Accounts</h3>
                    <p className="text-gray-500 text-sm">Securely link Twitter/X and LinkedIn via official APIs.</p>
                </div>
                <div>
                    <div className="text-5xl font-black text-white/10 mb-4">02</div>
                    <h3 className="text-white font-bold text-lg mb-2">Set Topics</h3>
                    <p className="text-gray-500 text-sm">Tell Ghost what you talk about (e.g., "SaaS", "Marketing").</p>
                </div>
                <div>
                    <div className="text-5xl font-black text-white/10 mb-4">03</div>
                    <h3 className="text-white font-bold text-lg mb-2">Go to Sleep</h3>
                    <p className="text-gray-500 text-sm">Ghost writes, posts, and engages. You wake up to new followers.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-20">
            <h2 className="text-4xl font-medium text-white mb-4">Simple Pricing</h2>
            <p className="text-gray-400">Cancel anytime. No hidden fees.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard name="Starter" price="29" features={['1 Account', 'Drafts Only', 'Basic Analytics']} />
            <PricingCard name="Pro" price="49" recommended={true} features={['3 Accounts', 'Auto-Posting', 'Smart Scheduling', 'Priority Support']} />
            <PricingCard name="Agency" price="199" features={['Unlimited Accounts', 'White-label Reports', 'Team Access', 'API Access']} />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-white/10 text-gray-600 text-sm">
        <p>&copy; 2025 Ghost Inc. Automated Growth.</p>
      </footer>

      {/* Modal - The Money Capture */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          <div className="relative bg-[#0A0A0A] border border-white/10 p-8 rounded-3xl max-w-md w-full shadow-2xl shadow-purple-900/20">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-500 hover:text-white"><X /></button>
            
            <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center text-purple-400 mb-6">
                <Sparkles size={24} />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Join the access list</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
                We are gradually rolling out access to ensure server stability. 
                Join 4,200+ others waiting for Ghost.
            </p>
            
            {status === 'success' || status === 'registered' ? (
              <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl text-green-400 flex items-center gap-3">
                <Check /> 
                {status === 'success' ? "You're on the list! Watch your inbox." : "You are already registered!"}
              </div>
            ) : (
              <form onSubmit={handleJoin} className="flex flex-col gap-4">
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button disabled={status === 'loading'} className="bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-all flex justify-center items-center gap-2">
                  {status === 'loading' ? <Loader2 className="animate-spin" /> : <>Join Waitlist <ArrowRight size={18} /></>}
                </button>
              </form>
            )}
            <p className="text-xs text-gray-600 mt-4 text-center">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      )}
    </div>
  );
}

// Components
function PricingCard({ name, price, features, recommended = false }) {
    return (
        <div className={`p-8 rounded-3xl border flex flex-col ${recommended ? 'bg-purple-900/10 border-purple-500/50 relative' : 'bg-[#0F0F0F] border-white/5'}`}>
            {recommended && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Most Popular</span>}
            <h3 className="text-lg font-medium text-gray-300 mb-2">{name}</h3>
            <div className="text-4xl font-bold text-white mb-6">€{price}<span className="text-lg text-gray-500 font-normal">/mo</span></div>
            <ul className="space-y-4 mb-8 flex-grow">
                {features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                        <Check size={16} className={recommended ? "text-purple-400" : "text-gray-600"} /> {f}
                    </li>
                ))}
            </ul>
            <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${recommended ? 'bg-white text-black hover:bg-gray-200' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                Join Waitlist
            </button>
        </div>
    )
}

export default App;