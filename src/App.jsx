import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Zap, Check, ArrowRight, Loader2, ShieldCheck, Youtube, Edit3, Globe, X, Play, CheckCircle2, TrendingUp, Clock, Users, MessageSquare, BarChart3, Calendar, Send, Linkedin, Twitter } from 'lucide-react';
import { supabase } from './supabaseClient';

function App() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleJoin = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await supabase.from('leads').insert([{ email: email }]);
    if (error) {
      if (error.code === '23505') setStatus('registered');
      else setStatus('error');
    } else {
      setStatus('success');
    }
  };

  const openModal = () => setShowModal(true);

  return (
    <div className="min-h-screen bg-[#09090b] text-gray-200 font-sans overflow-x-hidden">

      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 backdrop-blur-2xl border-b border-white/[0.05] bg-[#09090b]/70">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-3 font-semibold text-xl tracking-tight text-white">
            <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-purple-500/25">
              G
            </div>
            Ghost
          </div>
          <div className="flex items-center gap-8">
            <a href="#features" className="hidden md:block text-sm text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hidden md:block text-sm text-gray-400 hover:text-white transition-colors">Pricing</a>
            <a href="https://ghost-dashboard.vercel.app" className="text-sm text-gray-400 hover:text-white transition-colors">Sign In</a>
            <button onClick={openModal} className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all shadow-lg shadow-white/10">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className={`relative pt-36 pb-16 px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto text-center relative z-10">

          {/* Floating Logo */}
          <div className="mb-10 inline-block animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                G
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
            AI Content Platform for{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
                your personal brand.
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 100 2 150 6C200 10 250 4 298 8" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a855f7"/>
                    <stop offset="100%" stopColor="#f472b6"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Ghost monitors trends, repurposes your videos, and manages your entire LinkedIn & X presence — all on autopilot.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-10">
            <button onClick={openModal} className="group h-14 px-8 rounded-full bg-white text-black font-semibold text-lg transition-all flex items-center gap-3 justify-center shadow-xl shadow-white/10 hover:shadow-white/20 hover:scale-[1.02]">
              Sign up for Beta
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-gray-500 text-sm">
            <span className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check size={12} className="text-green-400" />
              </div>
              Free 14-day trial
            </span>
            <span className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check size={12} className="text-green-400" />
              </div>
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check size={12} className="text-green-400" />
              </div>
              Cancel anytime
            </span>
          </div>
        </div>
      </header>

      {/* Dashboard Mockup */}
      <section className={`px-6 pb-32 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-3xl blur-2xl"></div>

            <div className="relative bg-[#111113] rounded-2xl border border-white/[0.08] shadow-2xl overflow-hidden">
              {/* Browser Chrome */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.05] bg-[#0c0c0e]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-2 bg-white/[0.05] rounded-lg px-4 py-1.5 text-xs text-gray-500">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    app.ghost.io/dashboard
                  </div>
                </div>
                <div className="w-16"></div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 bg-gradient-to-b from-[#111113] to-[#0d0d0f]">
                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <DashboardStat icon={<TrendingUp size={18} />} value="24.8K" label="Impressions" change="+32%" up />
                  <DashboardStat icon={<Users size={18} />} value="1,247" label="New Followers" change="+18%" up />
                  <DashboardStat icon={<MessageSquare size={18} />} value="89" label="Engagements" change="+24%" up />
                  <DashboardStat icon={<BarChart3 size={18} />} value="4.2%" label="Engagement Rate" change="+0.8%" up />
                </div>

                {/* Main Content Area */}
                <div className="grid md:grid-cols-3 gap-4">
                  {/* Scheduled Posts */}
                  <div className="md:col-span-2 bg-[#0a0a0c] rounded-xl border border-white/[0.05] p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-medium text-white flex items-center gap-2">
                        <Calendar size={16} className="text-purple-400" />
                        Scheduled Posts
                      </h3>
                      <span className="text-xs text-gray-500">This week</span>
                    </div>

                    <div className="space-y-3">
                      <ScheduledPost
                        platform="linkedin"
                        time="Today, 9:00 AM"
                        content="Just shipped a major update to our platform..."
                        status="scheduled"
                      />
                      <ScheduledPost
                        platform="twitter"
                        time="Today, 2:00 PM"
                        content="The secret to building in public? Consistency..."
                        status="scheduled"
                      />
                      <ScheduledPost
                        platform="linkedin"
                        time="Tomorrow, 10:00 AM"
                        content="3 lessons from scaling to 10K users..."
                        status="draft"
                      />
                    </div>
                  </div>

                  {/* AI Assistant - Animated Chat */}
                  <AnimatedChat />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Examples Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              <CheckCircle2 size={14} />
              Real Examples
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Content Ghost actually writes
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
              These are real examples of AI-generated posts. Your brand voice, amplified.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* LinkedIn Example */}
            <div className="bg-[#111113] rounded-2xl border border-white/[0.05] p-6 hover:border-white/[0.1] transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Linkedin size={18} className="text-blue-400" />
                </div>
                <div>
                  <span className="text-sm font-medium text-white">LinkedIn Post</span>
                  <span className="block text-xs text-gray-500">Generated from blog article</span>
                </div>
                <span className="ml-auto text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-400">AI Generated</span>
              </div>
              <div className="text-gray-300 text-sm leading-relaxed space-y-3">
                <p>I used to spend 4 hours writing LinkedIn posts.</p>
                <p>Now I spend 10 minutes.</p>
                <p>Here's what changed:</p>
                <p>I stopped trying to be perfect and started being consistent.</p>
                <p>The best post you'll ever write is the one you actually publish.</p>
                <p>3 things I learned:</p>
                <p>→ Done beats perfect<br/>→ Consistency builds trust<br/>→ Your audience wants authenticity, not polish</p>
                <p>What's holding you back from posting more?</p>
                <p className="text-purple-400">#personalbrand #contentcreation #linkedin</p>
              </div>
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/[0.05] text-xs text-gray-500">
                <span>👍 247 likes</span>
                <span>💬 32 comments</span>
                <span>🔄 18 reposts</span>
              </div>
            </div>

            {/* Twitter Thread Example */}
            <div className="bg-[#111113] rounded-2xl border border-white/[0.05] p-6 hover:border-white/[0.1] transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center">
                  <Twitter size={18} className="text-sky-400" />
                </div>
                <div>
                  <span className="text-sm font-medium text-white">Twitter Thread</span>
                  <span className="block text-xs text-gray-500">Generated from YouTube video</span>
                </div>
                <span className="ml-auto text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-400">AI Generated</span>
              </div>
              <div className="text-gray-300 text-sm leading-relaxed space-y-4">
                <div className="pb-3 border-b border-white/[0.05]">
                  <p>I interviewed 50 founders who hit $1M ARR.</p>
                  <p className="mt-2">They all said the same 5 things.</p>
                  <p className="mt-2">🧵 Thread:</p>
                </div>
                <div className="pb-3 border-b border-white/[0.05]">
                  <p className="text-gray-500 text-xs mb-1">1/5</p>
                  <p><strong>Ship fast, fix later.</strong></p>
                  <p className="mt-1 text-gray-400">Not one of them waited for "perfect." They launched MVPs, got feedback, and iterated. Speed wins.</p>
                </div>
                <div className="pb-3 border-b border-white/[0.05]">
                  <p className="text-gray-500 text-xs mb-1">2/5</p>
                  <p><strong>Talk to users daily.</strong></p>
                  <p className="mt-1 text-gray-400">Not weekly. Daily. The founders who scaled fastest were obsessed with customer feedback.</p>
                </div>
                <div className="text-gray-500 text-xs">+ 3 more tweets in thread</div>
              </div>
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/[0.05] text-xs text-gray-500">
                <span>❤️ 1.2K likes</span>
                <span>🔄 389 retweets</span>
                <span>💬 94 replies</span>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            ✨ All examples generated by Ghost AI based on real user content
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <Sparkles size={14} />
              Powerful Features
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Everything you need to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                grow your brand
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
              Powerful AI tools that work while you sleep. No complexity, just results.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Edit3 size={24} />}
              iconBg="from-blue-500 to-cyan-500"
              title="Magic Editor"
              description="Transform rough notes into polished, engaging posts. Ghost formats, adds hooks, and suggests hashtags automatically."
              features={['AI-powered formatting', 'Hook generation', 'Smart hashtags']}
            />
            <FeatureCard
              icon={<Youtube size={24} />}
              iconBg="from-red-500 to-orange-500"
              title="Content Repurposing"
              description="Paste a YouTube link or blog URL. Ghost extracts insights and creates LinkedIn carousels or Twitter threads."
              features={['YouTube to social', 'Blog to threads', 'Carousel creator']}
            />
            <FeatureCard
              icon={<Globe size={24} />}
              iconBg="from-green-500 to-emerald-500"
              title="Trend Monitor"
              description="Stay ahead of the curve. Ghost scans news in your niche and drafts timely reaction posts automatically."
              features={['Real-time scanning', 'Auto-draft posts', 'Niche targeting']}
            />
            <FeatureCard
              icon={<Zap size={24} />}
              iconBg="from-purple-500 to-pink-500"
              title="Full Autopilot"
              description="Set it and forget it. Ghost researches, writes, creates images, and schedules posts around the clock."
              features={['24/7 automation', 'AI images', 'Smart scheduling']}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              Simple Pricing
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Start free, scale as you grow
            </h2>
            <p className="text-xl text-gray-400 font-light">No hidden fees. Cancel anytime.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <PricingCard
              name="Starter"
              price="19"
              description="Perfect for getting started"
              features={['1 social account', '100 AI posts per month', 'Content calendar', 'Basic analytics', 'Email support']}
              onSignup={openModal}
            />
            <PricingCard
              name="Pro"
              price="39"
              description="For serious creators"
              features={['3 social accounts', 'Unlimited AI posts', 'Auto-posting', 'Trend monitoring', 'YouTube repurposing', 'Priority support']}
              recommended
              onSignup={openModal}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-3xl blur-2xl"></div>
            <div className="relative bg-[#111113] rounded-2xl border border-white/[0.08] p-12 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Ready to grow your brand?
              </h2>
              <p className="text-xl text-gray-400 mb-8 font-light">
                Join thousands of creators using Ghost to build their personal brand.
              </p>
              <button onClick={openModal} className="group h-14 px-10 rounded-full bg-white text-black font-semibold text-lg transition-all flex items-center gap-3 justify-center mx-auto shadow-xl shadow-white/10 hover:shadow-white/20 hover:scale-[1.02]">
                Get Started Free
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/[0.05] relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 text-white font-semibold">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-sm font-bold">G</div>
              Ghost
            </div>
            <div className="flex items-center gap-8 text-sm text-gray-500">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/refund" className="hover:text-white transition-colors">Refunds</Link>
              <a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://x.com/YOUR_PROFILE" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-gray-600">
            © 2025 Ghost Inc. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          <div className="relative bg-[#111113] border border-white/[0.08] p-8 rounded-2xl max-w-md w-full shadow-2xl animate-scaleIn">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
              <X size={16} />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
                <Sparkles size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Join the Beta</h3>
              <p className="text-gray-400">Get early access to Ghost and start growing your brand.</p>
            </div>

            {status === 'success' || status === 'registered' ? (
              <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl text-green-400 flex items-center justify-center gap-3">
                <CheckCircle2 size={20} />
                <span>You're on the list! We'll be in touch soon.</span>
              </div>
            ) : (
              <form onSubmit={handleJoin} className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  disabled={status === 'loading'}
                  className="w-full h-12 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-all flex justify-center items-center gap-2 disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>Join Waitlist <ArrowRight size={18} /></>
                  )}
                </button>
                <p className="text-xs text-gray-500 text-center">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function AnimatedChat() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const chatRef = useRef(null);

  const conversation = [
    { type: 'ai', text: "I noticed your last post got 3x more engagement. Want me to analyze why?", delay: 500 },
    { type: 'user', text: "Yes, please!", delay: 1500 },
    { type: 'ai', text: "Your post performed well because:", delay: 800 },
    { type: 'ai', text: "• Posted at 9 AM (your audience peak time)\n• Used a story hook in the first line\n• Asked a question to drive comments", delay: 1200 },
    { type: 'user', text: "Can you write a similar post for tomorrow?", delay: 2000 },
    { type: 'ai', text: "Done! I've drafted 3 variations and scheduled the best one for 9 AM tomorrow. Check your queue!", delay: 1000 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasPlayed) {
          setHasPlayed(true);
          playConversation();
        }
      },
      { threshold: 0.5 }
    );

    if (chatRef.current) {
      observer.observe(chatRef.current);
    }

    return () => observer.disconnect();
  }, [hasPlayed]);

  const playConversation = async () => {
    setMessages([]);
    for (let i = 0; i < conversation.length; i++) {
      const msg = conversation[i];
      if (msg.type === 'ai') {
        setIsTyping(true);
        await new Promise(r => setTimeout(r, 800));
        setIsTyping(false);
      }
      await new Promise(r => setTimeout(r, msg.delay));
      setMessages(prev => [...prev, { type: msg.type, text: msg.text }]);
    }
  };

  return (
    <div ref={chatRef} className="bg-[#0a0a0c] rounded-xl border border-white/[0.05] p-5 flex flex-col min-h-[320px]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Sparkles size={14} className="text-white" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-white">Ghost AI</h3>
            <span className="text-xs text-green-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              Online
            </span>
          </div>
        </div>
        <button
          onClick={() => { setHasPlayed(false); setTimeout(() => { setHasPlayed(true); playConversation(); }, 100); }}
          className="text-xs text-gray-500 hover:text-purple-400 transition-colors"
        >
          Replay
        </button>
      </div>

      <div className="flex-1 space-y-3 mb-4 overflow-y-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`animate-messageIn ${
              msg.type === 'ai'
                ? 'bg-purple-500/10 rounded-lg rounded-tl-none p-3 text-sm text-gray-300 mr-4'
                : 'bg-white/5 rounded-lg rounded-tr-none p-3 text-sm text-gray-300 ml-auto max-w-[80%]'
            }`}
            style={{ whiteSpace: 'pre-line' }}
          >
            {msg.text}
          </div>
        ))}
        {isTyping && (
          <div className="bg-purple-500/10 rounded-lg rounded-tl-none p-3 text-sm text-gray-400 mr-4 w-16 animate-pulse">
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 bg-white/[0.03] rounded-lg p-2 border border-white/[0.05]">
        <input type="text" placeholder="Ask Ghost anything..." className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 outline-none px-2" />
        <button className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center hover:bg-purple-600 transition-colors">
          <Send size={14} className="text-white" />
        </button>
      </div>
    </div>
  );
}

function DashboardStat({ icon, value, label, change, up }) {
  return (
    <div className="bg-[#0a0a0c] rounded-xl p-4 border border-white/[0.05]">
      <div className="flex items-center justify-between mb-2">
        <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center text-gray-400">
          {icon}
        </div>
        <span className={`text-xs font-medium ${up ? 'text-green-400' : 'text-red-400'}`}>
          {change}
        </span>
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
}

function ScheduledPost({ platform, time, content, status }) {
  const platformIcon = platform === 'linkedin' ? <Linkedin size={14} /> : <Twitter size={14} />;
  const platformColor = platform === 'linkedin' ? 'text-blue-400 bg-blue-400/10' : 'text-sky-400 bg-sky-400/10';

  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.03] hover:border-white/[0.08] transition-all">
      <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${platformColor}`}>
        {platformIcon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs text-gray-500">{time}</span>
          <span className={`text-[10px] px-2 py-0.5 rounded-full ${status === 'scheduled' ? 'bg-green-400/10 text-green-400' : 'bg-yellow-400/10 text-yellow-400'}`}>
            {status}
          </span>
        </div>
        <p className="text-sm text-gray-300 truncate">{content}</p>
      </div>
    </div>
  );
}

function FeatureCard({ icon, iconBg, title, description, features }) {
  return (
    <div className="group bg-[#111113] rounded-2xl border border-white/[0.05] p-8 hover:border-white/[0.1] transition-all hover:-translate-y-1">
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${iconBg} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {features.map((feature, i) => (
          <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-white/[0.05] text-gray-300">
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
}

function PricingCard({ name, price, description, features, recommended = false, lifetime = false, onSignup }) {
  return (
    <div className={`relative rounded-2xl border p-8 flex flex-col transition-all hover:-translate-y-1 ${
      recommended
        ? 'bg-gradient-to-b from-purple-500/10 to-transparent border-purple-500/30'
        : 'bg-[#111113] border-white/[0.05] hover:border-white/[0.1]'
    }`}>
      {recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-300 mb-1">{name}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>

      <div className="mb-6">
        <span className="text-5xl font-bold text-white">€{price}</span>
        {!lifetime && <span className="text-gray-500 ml-1">/month</span>}
        {lifetime && <span className="block text-sm text-purple-400 mt-1">One-time payment</span>}
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
            <CheckCircle2 size={16} className={recommended ? 'text-purple-400' : 'text-gray-600'} />
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={onSignup}
        className={`w-full h-12 rounded-xl font-semibold text-sm transition-all ${
          recommended
            ? 'bg-white text-black hover:bg-gray-100'
            : 'bg-white/[0.05] text-white hover:bg-white/[0.1] border border-white/[0.05]'
        }`}
      >
        Get Started
      </button>
    </div>
  );
}

export default App;
