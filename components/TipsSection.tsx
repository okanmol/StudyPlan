
import React from 'react';
import { TIPS } from '../constants';

const TipCard: React.FC<{ title: string, content: string }> = ({ title, content }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-stone-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <h4 className="text-xl font-semibold mb-3 text-stone-800">{title}</h4>
        <p className="text-stone-700" dangerouslySetInnerHTML={{ __html: content }}></p>
    </div>
);

const TipsSection: React.FC = () => {
    return (
        <section id="tips" className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 text-center mb-4">Tips for Success</h2>
            <p className="text-lg text-stone-600 text-center max-w-3xl mx-auto mb-12">
                Following a long-term plan can be tough. Keep these tips in mind to stay motivated, avoid burnout, and make the most of your study time.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TIPS.map((tip) => (
                    <TipCard key={tip.title} title={tip.title} content={tip.content} />
                ))}
            </div>
        </section>
    );
};

export default TipsSection;
