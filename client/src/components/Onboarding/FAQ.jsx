import { useState } from "react";
import { NavLink } from "react-router-dom";

const faqItems = [
	{
		question: "1. What's Your Photography Style?",
		answer: (
			<p>
				At he Story Creators & Films, our style of wedding photography is candid and journalistic. We aim to
				capture the authentic essence of your love story as it naturally unfolds amidst the presence of your beloved
				family and friends. We believe in preserving genuine moments without intruding or staging scenes. However,
				during couple portraits or family portraits, we provide gentle guidance to ensure we capture the most
				flattering and candid shots possible.
			</p>
		),
	},
	{
		question: "2. What to Expect on Your Wedding Day?",
		answer: (
			<div className="space-y-3">
				<p>At he Story Creators & Films, we’re all about creating wonderful memories on your big day. Here’s a peek at what we do:</p>
				<p>
					<strong>Early Start:</strong> We kick things off bright and early so we can catch all the fun moments leading up to your wedding.
					This way, everyone gets used to us being around, and we capture all the excitement before the main event.
				</p>
				<p>
					<strong>Getting Ready Shots:</strong> We snap pics while the bride puts on her finishing touches of makeup and the groom makes sure he
					looks just right. It’s all about capturing the beauty, the excitement, and those last-minute nerves before the ceremony begins.
				</p>
				<p>
					<strong>Capturing the Party Vibes:</strong> Weddings are all about having a blast, and we make sure to capture all the fun moments with
					your guests. Whether it’s laughter, dancing, or just enjoying each other’s company, we’ll capture the joy and energy of your special day.
				</p>
				<p>
					<strong>Ceremony Moments:</strong> We’ll quietly capture the special moments of your ceremony, like when you exchange vows and rings.
					It’s a time filled with tradition and love, and we’ll make sure to preserve those memories forever.
				</p>
				<p>
					<strong>Reception Fun:</strong> After the ceremony, it’s time to celebrate! We’ll capture all the smiles, hugs, and laughter as you enjoy
					your reception with friends and family. From the delicious food to the lively dancing, we’ll capture it all.
				</p>
				<p>Plus, we add a special touch to our wedding films by including background sound, making your memories even more magical and unforgettable.</p>
			</div>
		),
	},
	{
		question: "3. What's Included in Our Wedding Coverage?",
		answer: (
			<p>
				When you choose us for your wedding, you’ll have us by your side for the entire celebration—from getting ready
				to the ceremony, reception, dance, and party! Our coverage is thorough, and there are no restrictions on the
				time we spend or the number of photos we take. We’ll take care of capturing every special moment creatively,
				ensuring that your wedding day memories are beautifully preserved.
			</p>
		),
	},
	{
		question: "4. What are the occasions that you cover?",
		answer: (
			<ul className="list-disc list-inside space-y-1">
				<li>Wedding & engagement</li>
				<li>Engagement photography</li>
				<li>Mehndi & sangeet</li>
				<li>Couple pre-wedding</li>
				<li>Parties</li>
				<li>Corporate events</li>
				<li>Maternity shoot</li>
				<li>Baby shoot</li>
			</ul>
		),
	},
	{
		question: "5. What shooting capabilities do you provide?",
		answer: (
			<ul className="list-disc list-inside space-y-1">
				<li>Traditional Photography</li>
				<li>Traditional Videography</li>
				<li>Candid</li>
				<li>Cinematographic</li>
				<li>Drone Shoots</li>
				<li>Photobooth</li>
				<li>Live Screening</li>
				<li>Live Editing</li>
				<li>360 Round camera</li>
			</ul>
		),
	},
	{
		question: "6. Do you travel outstation?",
		answer: <p>Yes, we have more than 50+ photography teams in different cities across India.</p>,
	},
	{
		question: "7. Which forms of payment do you accept?",
		answer: (
			<ul className="list-disc list-inside space-y-1">
				<li>Net banking</li>
				<li>Cash</li>
				<li>Cheque / DD</li>
				<li>Debit / Credit cards</li>
				<li>Mobile wallets</li>
				<li>UPI</li>
			</ul>
		),
	}
];

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(-1);

	const toggleIndex = (index) => {
		setOpenIndex((prev) => (prev === index ? -1 : index));
	};

	return (
		<section className="w-full bg-white px-4 sm:px-6 lg:px-12 mb-15 mt-16 md:mt-20 ">
			<div className="mx-auto max-w-5xl space-y-8">
				<div className="mb-6 md:mb-10">
					<h1 
						className="text-3xl md:text-5xl font-bold text-center text-black"
            style={{ fontFamily: "'Playfair Display', serif" }}
					>FAQ'S</h1>
				</div>

				<div className="max-w-2xl mx-auto p-1 md:p-0 space-y-4 text-left">
					{faqItems.map((item, index) => {
						const isOpen = openIndex === index;
						return (
							<div
								key={item.question}
								className="faq-item font-light hover:border border-gray-200 md:text-lg cursor-pointer transition-all rounded-md p-4"
							>
								<div className="flex justify-between items-center">
									<h3 
										className="w-5/6 font-extralight"
										onClick={() => toggleIndex(index)}
									>
										{item.question}
									</h3>
									<button 
										className="toggle bg-special-red/10 w-8 h-8 flex items-center justify-center rounded-full"
										onClick={() => toggleIndex(index)}
									>
										<svg 
											xmlns="http://www.w3.org/2000/svg" 
											width="22" 
											height="22" 
											viewBox="0 0 24 24" 
											fill="none" 
											stroke="currentColor" 
											strokeWidth="2" 
											strokeLinecap="round" 
											strokeLinejoin="round" 
											className="lucide lucide-chevron-up text-special-red" 
											aria-hidden="true"
											style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
										>
											<path d="m18 15-6-6-6 6"></path>
										</svg>
									</button>
								</div>
								{isOpen && (
									<div className="mt-3 text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 font-extralight">
										{item.answer}
									</div>
								)}
							</div>
						);
					})}
				</div>
				{/* <div className="mt-8 flex justify-center">
					<a
						href="/service"
						className="px-5 py-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition font-extralight"
					>
						Explor Our Services
					</a>
				</div> */}
			</div>
		</section>
	);
};

export default FAQ;
