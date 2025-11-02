
import React from 'react';

const ScheduleSection: React.FC = () => {
    return (
        <section id="schedule" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">Your Weekly Schedule</h2>
            <p className="text-lg text-stone-600 text-center max-w-3xl mx-auto mb-8">
                This is your baseline weekly schedule, designed to be consistent and sustainable. It balances work, personal time, and focused study.
            </p>
            <div className="grid grid-cols-1 gap-8 items-start">
                <div className="bg-white p-6 rounded-lg shadow-lg overflow-x-auto">
                    <h3 className="text-xl font-semibold mb-4 text-center text-stone-800">Schedule Template</h3>
                    <table className="w-full min-w-max text-left">
                        <thead>
                            <tr className="border-b border-stone-200">
                                <th className="p-3 font-semibold text-stone-500 uppercase text-sm">Day</th>
                                <th className="p-3 font-semibold text-stone-500 uppercase text-sm">Time</th>
                                <th className="p-3 font-semibold text-stone-500 uppercase text-sm">Activity</th>
                                <th className="p-3 font-semibold text-stone-500 uppercase text-sm">Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-stone-200">
                                <td className="p-3 font-medium" rowSpan={2}>Mon - Fri</td>
                                <td className="p-3">12:00 PM - 8:00 PM</td>
                                <td className="p-3">Work</td>
                                <td className="p-3 text-stone-500">(8.0 hrs)</td>
                            </tr>
                            <tr className="border-b border-stone-200">
                                <td className="p-3 font-semibold text-emerald-700">10:00 PM - 12:30 AM</td>
                                <td className="p-3 font-semibold text-emerald-700">Focused Study</td>
                                <td className="p-3 font-semibold text-emerald-700">(2.5 hrs)</td>
                            </tr>
                            <tr className="border-b border-stone-200 bg-stone-50">
                                <td className="p-3 font-medium" rowSpan={3}>Saturday</td>
                                <td className="p-3 font-semibold text-indigo-600">~2:00 PM - 5:00 PM</td>
                                <td className="p-3 font-semibold text-indigo-600">Focused Study</td>
                                <td className="p-3 font-semibold text-indigo-600">(3.0 hrs)</td>
                            </tr>
                            <tr className="border-b border-stone-200 bg-stone-50">
                                <td className="p-3">5:00 PM - 5:30 PM</td>
                                <td className="p-3">Break</td>
                                <td className="p-3 text-stone-500">(0.5 hrs)</td>
                            </tr>
                            <tr className="border-b border-stone-200 bg-stone-50">
                                <td className="p-3">5:30 PM - 7:30 PM</td>
                                <td className="p-3">Job Hunt & Apps</td>
                                <td className="p-3 text-stone-500">(2.0 hrs)</td>
                            </tr>
                            <tr className="border-b border-stone-200">
                                <td className="p-3 font-medium" rowSpan={3}>Sunday</td>
                                <td className="p-3 font-semibold text-emerald-700">~2:00 PM - 6:00 PM</td>
                                <td className="p-3 font-semibold text-emerald-700">Focused Study</td>
                                <td className="p-3 font-semibold text-emerald-700">(4.0 hrs)</td>
                            </tr>
                             <tr className="border-b border-stone-200">
                                <td className="p-3">6:00 PM - 6:30 PM</td>
                                <td className="p-3">Break</td>
                                <td className="p-3 text-stone-500">(0.5 hrs)</td>
                            </tr>
                            <tr>
                                <td className="p-3">6:30 PM - 7:30 PM</td>
                                <td className="p-3">Weekly Review</td>
                                <td className="p-3 text-stone-500">(1.0 hr)</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="text-center text-stone-600 mt-6">
                        <span className="font-bold text-stone-800">Total Study:</span> 19.5 hours/week<br />
                        <span className="font-bold text-stone-800">Total Job Hunt:</span> 2 hours/week
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ScheduleSection;
