'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Apple, ArrowRight, Bell, CheckCircle, Crown, Flame, Flower2, Heart, Play, Share2, Sparkles, Users } from 'lucide-react';

interface FlowerPostProps {
  icon: React.ReactNode;
  type: string;
  from: string;
  to: string;
  text: string;
  color: 'gold' | 'orange' | 'pink';
}

interface FeatureProps { icon: React.ReactNode; title: string; text: string; }
interface FlowerTypeProps { emoji: string; title: string; text: string; }
interface CheckItemProps { text: string; }
interface StatProps { value: string; label: string; }

const flowerTypes: FlowerTypeProps[] = [
  { emoji: '👑', title: 'Crown Flower', text: 'For leadership, greatness, and major impact.' },
  { emoji: '🌻', title: 'Respect Flower', text: 'For character, loyalty, and deep respect.' },
  { emoji: '🌼', title: 'Appreciation Flower', text: 'For everyday kindness that matters.' },
  { emoji: '🔥', title: 'Legendary Flower', text: 'For unforgettable moments and real impact.' },
  { emoji: '🌸', title: 'Bloom Flower', text: 'For growth, support, and positivity.' },
];

export default function BloommeLandingPage(): JSX.Element {
  return (
    <div className="min-h-screen overflow-hidden bg-[#07070C] text-white">
      <BackgroundGlow />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a className="text-pink-400" href="#home">Home</a>
          <a className="transition hover:text-white" href="#flowers">Flowers</a>
          <a className="transition hover:text-white" href="#how">How it works</a>
          <a className="transition hover:text-white" href="#waitlist">Waitlist</a>
        </nav>
        <a href="#waitlist" className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 text-sm font-semibold shadow-lg shadow-purple-900/30">Join Waitlist</a>
      </header>

      <main className="relative z-10" id="home">
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 md:grid-cols-2 md:pt-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-100">
              <Sparkles className="h-4 w-4 text-pink-400" /> A new kind of social app
            </div>
            <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Give people their <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-orange-300 bg-clip-text text-transparent">flowers.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70 md:text-xl">
              Bloomme is the social app built around appreciation, positivity, and meaningful connection.
            </p>
            <div className="mt-8 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-4">
              <MiniValue icon={<Heart />} label="Appreciation" />
              <MiniValue icon={<Users />} label="Connection" />
              <MiniValue icon={<Sparkles />} label="Positivity" />
              <MiniValue icon={<Flower2 />} label="Growth" />
            </div>
            <form className="mt-8 flex max-w-xl flex-col gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-3 sm:flex-row">
              <input aria-label="Email address" type="email" placeholder="Enter your email" className="h-14 flex-1 rounded-2xl border border-white/10 bg-[#0D0E15] px-5 text-white outline-none placeholder:text-white/35" />
              <button type="button" className="h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 px-7 font-semibold">Join the Waitlist</button>
            </form>
            <div className="mt-7 flex flex-wrap gap-3">
              <StoreButton icon={<Apple />} label="Download on the" store="App Store" />
              <StoreButton icon={<Play />} label="Get it on" store="Google Play" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-purple-500/40 to-pink-500/30 blur-3xl" />
            <div className="relative grid gap-5 sm:grid-cols-2">
              <PhoneMockup tilt="left" />
              <PhoneMockup tilt="right" compact />
            </div>
          </motion.div>
        </section>

        <section id="flowers" className="mx-auto max-w-7xl px-6 py-14">
          <div className="mb-8 text-center"><p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">Our Flowers</p></div>
          <div className="grid gap-5 md:grid-cols-5">{flowerTypes.map((flower) => <FlowerType key={flower.title} {...flower} />)}</div>
        </section>

        <section id="how" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">How <span className="text-pink-400">Bloomme</span> Works</p></div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Feature icon={<Users />} title="Choose someone" text="Pick a friend, family member, mentor, coworker, or creator who deserves recognition." />
            <Feature icon={<Flower2 />} title="Send a flower" text="Select the perfect flower and add a meaningful personal message." />
            <Feature icon={<Heart />} title="Make their day" text="They receive it, feel valued, and your connection grows." />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-white/40">Your profile. Your impact.</p>
              <h2 className="text-4xl font-bold md:text-6xl">Build your wall of <span className="text-pink-400">appreciation.</span></h2>
              <p className="mt-5 text-lg leading-8 text-white/65">Every flower you send and receive lives on your profile wall, creating a positive record of impact.</p>
              <div className="mt-6 space-y-3 text-white/80">
                <CheckItem text="Track your impact" />
                <CheckItem text="See flowers you’ve received" />
                <CheckItem text="Inspire and be inspired" />
                <CheckItem text="Climb appreciation ranks" />
              </div>
            </div>
            <ProfileCard />
          </div>
        </section>

        <section id="waitlist" className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/[0.05] to-purple-500/10 p-8 md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
              <div className="relative h-28 w-28 overflow-hidden rounded-3xl"><Image src="/bloomme-icon.png" alt="Bloomme app icon" fill className="object-cover" /></div>
              <div><h2 className="text-3xl font-bold md:text-4xl">Kindness looks good on you.</h2><p className="mt-3 text-white/60">Join Bloomme and help build a more positive social world.</p></div>
              <a href="#home" className="inline-flex h-14 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 px-8 text-base font-semibold">Join the Waitlist</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
          <Logo />
          <div className="flex gap-6 text-sm text-white/45"><a href="#home">Privacy Policy</a><a href="#home">Terms of Service</a><a href="#waitlist">Contact</a></div>
          <div className="flex gap-3 text-white/70"><span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-bold">IG</span><span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-bold">X</span><span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-bold">YT</span></div>
        </div>
      </footer>
    </div>
  );
}

function BackgroundGlow(): JSX.Element { return <div className="absolute inset-0 pointer-events-none"><div className="absolute top-[-160px] left-[-120px] h-[420px] w-[420px] rounded-full bg-purple-700/30 blur-3xl" /><div className="absolute top-[240px] right-[-140px] h-[360px] w-[360px] rounded-full bg-pink-600/20 blur-3xl" /><div className="absolute bottom-[120px] left-[20%] h-[300px] w-[300px] rounded-full bg-orange-500/10 blur-3xl" /></div>; }
function Logo(): JSX.Element { return <div className="flex items-center gap-3"><div className="relative h-11 w-11 overflow-hidden rounded-2xl shadow-lg shadow-purple-900/40"><Image src="/bloomme-icon.png" alt="Bloomme logo" fill className="object-cover" /></div><span className="text-2xl font-semibold tracking-tight">bloom<span className="text-pink-400">me</span></span></div>; }
function MiniValue({ icon, label }: { icon: React.ReactNode; label: string }): JSX.Element { return <div className="text-center text-white/70"><div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center text-pink-400">{icon}</div><p className="text-xs">{label}</p></div>; }
function StoreButton({ icon, label, store }: { icon: React.ReactNode; label: string; store: string }): JSX.Element { return <button className="flex items-center gap-3 rounded-xl border border-white/15 bg-black/30 px-4 py-2 text-left transition hover:bg-white/10"><span>{icon}</span><span><span className="block text-[10px] text-white/50">{label}</span><span className="block text-sm font-semibold">{store}</span></span></button>; }
function PhoneMockup({ compact = false, tilt }: { compact?: boolean; tilt: 'left' | 'right' }): JSX.Element { const rotate = tilt === 'left' ? 'md:-rotate-6' : 'md:rotate-6'; return <div className={`rounded-[2.5rem] border border-white/10 bg-[#10111A] p-3 shadow-2xl ${rotate}`}><div className="rounded-[2rem] border border-white/10 bg-[#090A10] p-4"><div className="mb-4 flex items-center justify-between"><LogoSmall /><Bell className="h-4 w-4 text-purple-300" /></div><div className="mb-4 flex gap-2 text-xs"><span className="rounded-full bg-purple-600 px-3 py-1">For You</span><span className="rounded-full border border-white/10 px-3 py-1 text-white/50">Recent</span></div><FlowerPost icon={<Crown className="h-4 w-4" />} type="Crown Flower" from="Sarah" to="Alex" text="You inspire so many people every day." color="gold" />{!compact && <FlowerPost icon={<Flame className="h-4 w-4" />} type="Legendary Flower" from="Jordan" to="Taylor" text="For showing up when it mattered most." color="orange" />}</div></div>; }
function LogoSmall(): JSX.Element { return <span className="text-sm font-semibold">bloom<span className="text-pink-400">me</span></span>; }
function FlowerPost({ icon, type, from, to, text, color }: FlowerPostProps): JSX.Element { const colorClass: Record<FlowerPostProps['color'], string> = { gold: 'border-yellow-400/30 bg-yellow-400/10 text-yellow-300', orange: 'border-orange-400/30 bg-orange-400/10 text-orange-300', pink: 'border-pink-400/30 bg-pink-400/10 text-pink-300' }; return <div className="mb-4 rounded-3xl border border-white/10 bg-white/[0.04] p-4"><div className="flex items-center gap-3"><div className="h-9 w-9 rounded-full bg-purple-900/60" /><div><p className="text-sm font-semibold">{from} <span className="text-white/40">→</span> <span className="text-purple-300">{to}</span></p><p className="text-xs text-white/35">2h ago</p></div></div><div className={`mx-auto mt-4 flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs ${colorClass[color]}`}>{icon}{type}</div><p className="mt-4 rounded-2xl bg-black/20 p-4 text-sm italic leading-6 text-white/90">“{text}”</p><div className="mt-4 flex items-center gap-4 text-white/55"><Heart className="h-5 w-5" /><span className="text-sm">12</span><Share2 className="h-5 w-5" /></div></div>; }
function Feature({ icon, title, text }: FeatureProps): JSX.Element { return <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-white"><div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-purple-500/15 text-purple-300">{icon}</div><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-white/60">{text}</p></div>; }
function FlowerType({ emoji, title, text }: FlowerTypeProps): JSX.Element { return <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-center transition hover:-translate-y-1 hover:bg-white/[0.07]"><div className="text-5xl">{emoji}</div><h3 className="mt-4 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/50">{text}</p></div>; }
function CheckItem({ text }: CheckItemProps): JSX.Element { return <div className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-purple-300" /><span>{text}</span></div>; }
function ProfileCard(): JSX.Element { return <div className="rounded-3xl border border-white/10 bg-[#11121B] p-6 text-white shadow-2xl shadow-purple-950/30"><div className="flex items-center gap-5"><div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 via-pink-500 to-purple-600 p-[2px]"><div className="flex h-full w-full items-center justify-center rounded-full bg-[#11121B] text-xl font-bold">AS</div></div><div><h3 className="text-3xl font-semibold">Abraham Smith</h3><p className="text-white/50">@abrahamsmith</p></div></div><div className="mt-6 grid grid-cols-3 gap-4 text-center"><Stat value="428" label="Flowers Sent" /><Stat value="1.2K" label="Received" /><Stat value="#12" label="Rank" /></div><div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4"><div className="grid grid-cols-5 gap-3 text-center"><FlowerCounter emoji="👑" value="180" /><FlowerCounter emoji="🌻" value="234" /><FlowerCounter emoji="🌼" value="312" /><FlowerCounter emoji="🔥" value="156" /><FlowerCounter emoji="🌸" value="98" /></div></div></div>; }
function Stat({ value, label }: StatProps): JSX.Element { return <div><div className="text-2xl font-bold">{value}</div><div className="text-xs uppercase tracking-wider text-white/40">{label}</div></div>; }
function FlowerCounter({ emoji, value }: { emoji: string; value: string }): JSX.Element { return <div className="rounded-2xl bg-black/20 p-3"><div className="text-3xl">{emoji}</div><p className="mt-2 text-sm font-semibold">{value}</p></div>; }
