import Image from "next/image";

const logos = [
    { src: "/vercel.svg", alt: "Vercel", width: 90 },
    { src: "/next.svg", alt: "Next.js", width: 90 },
    { src: "/globe.svg", alt: "Globe", width: 90 },
    { src: "/window.svg", alt: "Window", width: 90 },
    { src: "/file.svg", alt: "File", width: 90 },
];

export function SocialProof() {
    return (
        <section aria-labelledby="social-proof" className="py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 id="social-proof" className="sr-only">Social proof</h2>
                <div className="glass rounded-2xl py-6 px-4">
                    <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
                        {logos.map((l) => (
                            <div key={l.src} className="relative h-6 w-24">
                                <Image src={l.src} alt={l.alt} fill className="object-contain" sizes="120px" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
