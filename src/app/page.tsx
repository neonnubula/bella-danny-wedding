import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sans min-h-screen">
      {/* Sticky nav */}
      <div className="sticky top-4 z-50 flex justify-center px-2 sm:px-4">
        <nav className="backdrop-blur-sm border border-foreground/10 bg-white/90 rounded-full shadow-md px-2 sm:px-4 py-2 flex gap-1 sm:gap-2 items-center overflow-x-auto max-w-full whitespace-nowrap" aria-label="Primary" role="navigation">
          <a href="#top" className="px-3 py-1 rounded-full hover:opacity-90 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#fbb1c9]/30">Home</a>
          <a href="#attire" className="px-3 py-1 rounded-full hover:opacity-90 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#fbb1c9]/30">Attire</a>
          <a href="#food-drinks" className="px-3 py-1 rounded-full hover:opacity-90 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#fbb1c9]/30">Food/Drinks</a>
          <a href="#location" className="px-3 py-1 rounded-full hover:opacity-90 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#fbb1c9]/30">Directions</a>
          <a href="#gifts" className="px-3 py-1 rounded-full hover:opacity-90 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#fbb1c9]/30">Gifts</a>
        </nav>
      </div>

      {/* Hero */}
      <section id="top" className="pt-20 pb-10 sm:pt-28 sm:pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <div className="inline-flex items-center justify-center gap-2 rounded-full px-3 py-1 bg-white/80 border border-foreground/10 uppercase tracking-wider text-xs sm:text-sm text-foreground/60">
            <span>Bella & Danny</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-4" style={{fontFamily:"var(--font-display)"}}>We&apos;re Getting Married</h1>
          <p className="mt-3 text-base sm:text-lg text-foreground/70">Sunday 5th October from 2pm (until 8:30pm)</p>
          <p className="mt-4 text-foreground/70">Thank you so much for joining us — your presence means the world to us and we can’t wait to celebrate together.</p>
          <p className="sr-only">Guest Information</p>
        </div>
      </section>
      {/* Attire */}
      <section id="attire" className="pb-6 sm:pb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="rounded-3xl shadow-xl backdrop-blur-md border border-foreground/10 bg-white/90 p-6 sm:p-8 relative">
            <span className="section-chip">Attire</span>
            <h2 className="text-2xl sm:text-3xl font-semibold gradient-title">Dress to Impress</h2>
            <ul className="list-disc list-inside mt-4 space-y-2 marker:text-[#f58bb0]">
              <li>Colours: No wrong answers, except white dresses 😉</li>
              <li>Dress Code: Cocktail/Formal (Gents this just means Suit Up)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Food & Drinks */}
      <section id="food-drinks" className="pb-6 sm:pb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="rounded-3xl shadow-xl backdrop-blur-md border border-foreground/10 bg-white/90 p-6 sm:p-8 relative">
            <span className="section-chip">Food & Drinks</span>
            <h2 className="text-2xl sm:text-3xl font-semibold gradient-title">Eat, Sip, Celebrate</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <div className="font-medium">Complimentary:</div>
                <ul className="list-disc list-inside mt-2 space-y-1 marker:text-[#f58bb0]">
                  <li>Canapes</li>
                  <li>3 Course Meal</li>
                  <li>Cake</li>
                  <li>Beer & Wine</li>
                  <li>Soft Drinks, Tea & Coffee</li>
                </ul>
              </div>
              <div>
                <div className="font-medium">Available to purchase:</div>
                <ul className="list-disc list-inside mt-2 space-y-1 marker:text-[#f58bb0]">
                  <li>Spirits</li>
                  <li>Cocktails</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Timing */}
      <section id="timing" className="pb-6 sm:pb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="rounded-3xl shadow-xl backdrop-blur-md border border-foreground/10 bg-white/90 p-6 sm:p-8 relative">
            <span className="section-chip">Timing</span>
            <h2 className="text-2xl sm:text-3xl font-semibold gradient-title">The Flow Of The Day</h2>
            <ul className="list-disc list-inside mt-3 space-y-2 marker:text-[#f58bb0]">
              <li>The Ceremony starts at 2:00 PM.</li>
              <li>After the ceremony, we will take a group photo, then most people can head up the hill for drinks and nibbles.</li>
              <li>We will all then go inside for food, speeches and dancing.</li>
              <li>The venue is booked until 8:30 PM, with service shutting off 8:15 PM.</li>
              <li><strong>Optional:</strong> Wedding After Party TBC, will be in or near CBD after end of the Reception for those who want to kick on (after the bride and groom have left).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Photos (above Directions) */}
      <section id="photos" className="pb-6 sm:pb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="rounded-3xl shadow-xl backdrop-blur-md border border-foreground/10 bg-white/90 p-6 sm:p-8 relative">
            <span className="section-chip">Photos</span>
            <h2 className="text-2xl sm:text-3xl font-semibold gradient-title">Share Your Pics & Videos</h2>
            <ul className="list-disc list-inside mt-3 space-y-2 marker:text-[#f58bb0] text-foreground/80">
              <li>
                Scan this QR code or use
                {" "}
                <a className="text-[#f58bb0] underline" href="https://my.guestpix.com/guest/access/121775/MHK9CG1u" target="_blank" rel="noopener noreferrer">this link</a>
                {" "}
                to upload and share any photos or videos.
          </li>
              <li>You can also view everything from the day at the same link.</li>
            </ul>
            <div className="mt-4 grid grid-cols-1 gap-4 place-items-center">
              <div className="rounded-xl border border-foreground/10 bg-white/70 aspect-square overflow-hidden mx-auto w-64 sm:w-80">
                <Image src="/photosqrcode.jpeg" alt="Upload photos QR" width={320} height={320} className="w-full h-full object-contain" />
              </div>
              <div className="flex justify-center">
                <a className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-[#f58bb0] text-white font-medium hover:opacity-90 w-full sm:w-auto" href="https://my.guestpix.com/guest/access/121775/MHK9CG1u" target="_blank" rel="noopener noreferrer">Open upload & gallery</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section id="location" className="pb-6 sm:pb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="rounded-3xl shadow-xl backdrop-blur-md border border-foreground/10 bg-white/90 p-6 sm:p-8 relative">
            <span className="section-chip">Directions</span>
            <h2 className="text-2xl sm:text-3xl font-semibold gradient-title">Address</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-6 items-start">
              <div>
                <div className="mt-2">Chateau Wyuna</div>
                <div>170 Swansea Road</div>
                <div>Mt Evelyn</div>
                <div>VIC 3140</div>
              </div>
              <div className="space-y-4">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-foreground/10">
                  <iframe
                    title="Chateau Wyuna Map"
                    src="https://www.google.com/maps?q=Chateau%20Wyuna%20170%20Swansea%20Road%20Mt%20Evelyn%20VIC%203140&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="rounded-2xl p-[1px] bg-gradient-to-r from-[#f58bb0] to-[#b39bff] shadow-lg">
                  <form action="https://www.google.com/maps/dir/" method="GET" target="_blank" rel="noopener noreferrer" className="grid gap-3 rounded-2xl bg-white p-4">
                    <input type="hidden" name="api" value="1" />
                    <input type="hidden" name="destination" value="Chateau Wyuna 170 Swansea Road Mt Evelyn VIC 3140" />
                    <label className="text-sm text-foreground/70 font-semibold">Directions</label>
                    <input name="origin" placeholder="Enter address or suburb" className="h-11 rounded-xl border border-foreground/20 px-3 bg-white/90 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#fbb1c9]/30" required />
                    <label className="text-sm text-foreground/70">Travel mode</label>
                    <select name="travelmode" className="h-11 rounded-xl border border-foreground/20 px-3 bg-white/90 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#fbb1c9]/30">
                      <option value="driving">Driving</option>
                      <option value="walking">Walking</option>
                      <option value="transit">Transit</option>
                      <option value="bicycling">Bicycling</option>
                    </select>
                    <button type="submit" className="mt-1 h-11 rounded-xl bg-[#f58bb0] text-white font-medium hover:opacity-90">Get Directions</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events (final) */}
      <section id="events" className="pb-6 sm:pb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="rounded-3xl shadow-xl backdrop-blur-md border border-foreground/10 bg-white/90 p-6 sm:p-8 relative">
            <span className="section-chip">Events</span>
            <h2 className="text-2xl sm:text-3xl font-semibold gradient-title">What&apos;s On This Week</h2>
            <p className="mt-3 text-foreground/70">Anyone is welcome to attend any of these events!</p>
            <ul className="list-disc list-inside mt-3 space-y-2 marker:text-[#f58bb0] text-foreground/80">
              <li>Wednesday 1st October 7:30 PM — Catch Up Drinks at Storyville</li>
              <li>Saturday 4th October 7:30 PM — Bledisloe Cup at Turf Bar</li>
              <li>Sunday 5th October — Wedding After Party at <a className="text-[#f58bb0] underline" href="https://barbambi.com.au/" target="_blank" rel="noopener noreferrer">Bar Bambi</a> for those who wish to kick on after the end of reception.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Transport */}
      <section id="transport" className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="rounded-3xl shadow-xl backdrop-blur-md border border-foreground/10 bg-white/90 p-6 sm:p-8 relative">
            <span className="section-chip">Transport</span>
            <h2 className="text-2xl sm:text-3xl font-semibold gradient-title">Getting There (And Back)</h2>
            <p className="mt-3 text-foreground/70">It&apos;s about a 45 minute drive east  of &apos;Melbourne&apos;, depending on traffic. It is the last day of School Holidays so check google maps for an up-to-date estimate</p>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              <div>
                <div className="uppercase tracking-wider text-xs sm:text-sm text-foreground/60">Driving</div>
                <p className="mt-2 text-foreground/70">If you are or have a sober driver, we certainly recommend hiring or taking your car and being able to explore the area a bit!</p>
              </div>
              <div>
                <div className="uppercase tracking-wider text-xs sm:text-sm text-foreground/60">Uber/Taxi</div>
                <p className="mt-2 text-foreground/70">On the way back, the venue recommends pre-booking your Uber as if we all try to book at once, it can get messy. Taxis are available, though Uber is usually easier there.</p>
              </div>
              <div>
                <div className="uppercase tracking-wider text-xs sm:text-sm text-foreground/60">Carpool/Uber with Guests</div>
                <p className="mt-2 text-foreground/70">If you are interested in sharing an Uber with other guests, or if you can take someone in your car, or you are looking for a ride let us know!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gifts (final) */}
      <section id="gifts" className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="rounded-3xl shadow-xl backdrop-blur-md border border-foreground/10 bg-white/90 p-6 sm:p-8 relative">
            <span className="section-chip">Gifts</span>
            <h2 className="text-2xl sm:text-3xl font-semibold gradient-title">A Wishing Well for Our First Home</h2>
            <p className="mt-3 text-foreground/70">We aren&apos;t having a registry. We&apos;re so grateful you&apos;re celebrating with us — your presence is already a present!</p>
            <p className="mt-3 text-foreground/70">Contributing a gift is totally optional. If you&apos;re open to it, there will be a wishing well on the night to help us save towards our home deposit — or you may transfer using the details below.</p>
            <div className="mt-4 rounded-2xl border border-foreground/10 bg-white/70 p-4">
              <div className="font-medium mb-2">Optional bank transfer details</div>
              <div className="flex flex-col gap-2 text-sm text-foreground/80">
                <div><span className="font-medium">PayID:</span> <span className="font-mono">dpage@up.me</span> <span className="mx-2">or</span> <span className="font-mono">0403037339</span></div>
                <div><span className="font-medium">BSB:</span> <span className="font-mono">633 123</span> <span className="mx-2">—</span> <span className="font-medium">Account:</span> <span className="font-mono">215 854 704</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
  );
}
