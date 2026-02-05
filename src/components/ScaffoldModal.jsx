import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, ArrowRight, Phone, Video, User, GraduationCap } from 'lucide-react';

/**
 * ScaffoldModal - Pure Renderer Component
 * 
 * All state is owned by the parent (App.jsx).
 * This component just renders what it's given.
 * 
 * Props:
 *   messages: Array<{id, text, sender, type, url?}>
 *   options: Array<{text, correct, feedback}>
 *   notification: {title, body, isCorrect} | null
 *   onOptionSelect: (option) => void
 *   onDismissNotification: () => void
 */
export default function ScaffoldModal({
    messages,
    options,
    notification,
    onOptionSelect,
    onDismissNotification
}) {
    const scrollRef = useRef(null);

    // Auto-scroll when messages change
    useEffect(() => {
        if (scrollRef.current) {
            setTimeout(() => {
                scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            }, 100);
        }
    }, [messages, notification]);

    return (
        <div className="absolute inset-x-0 bottom-0 top-16 z-50 bg-white rounded-t-3xl shadow-2xl flex flex-col overflow-hidden border-t border-gray-100 font-sans">

            {/* NOTIFICATION OVERLAY */}
            <AnimatePresence>
                {notification && (
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className="absolute top-4 left-4 right-4 z-[60] bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 p-4 flex gap-3 cursor-pointer"
                        onClick={onDismissNotification}
                    >
                        <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${notification.isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                            {notification.isCorrect ? <GraduationCap size={24} /> : <Stethoscope size={24} />}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline mb-0.5">
                                <h4 className="font-bold text-gray-900 text-sm">Clinical Mentor</h4>
                                <span className="text-[10px] text-gray-400 uppercase font-bold">now</span>
                            </div>
                            <p className="text-sm font-medium text-gray-600 leading-snug">
                                {notification.body}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CHAT HEADER */}
            <div className="bg-white p-4 flex items-center gap-3 border-b border-gray-100 shadow-sm z-10">
                <div className="relative">
                    <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center text-gray-600 font-bold overflow-hidden">
                        <User size={24} />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1">
                    <h3 className="font-bold text-gray-900 leading-none">Current Patient</h3>
                    <span className="text-xs text-green-500 font-medium flex items-center gap-1">
                        Active Now
                    </span>
                </div>
                <div className="flex gap-4 text-gray-400">
                    <Phone size={20} />
                    <Video size={20} />
                </div>
            </div>

            {/* CHAT AREA */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 scroll-smooth">
                <AnimatePresence initial={false}>
                    {messages.map((msg) => {
                        if (msg.type === 'divider') {
                            return (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                    className="flex justify-center my-6"
                                >
                                    <span className="bg-gray-200 text-gray-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                                        {msg.text}
                                    </span>
                                </motion.div>
                            );
                        }

                        return (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                className={`flex w-full ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                            >
                                {msg.type === 'image' ? (
                                    <div className="max-w-[70%] rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-white">
                                        <img src={msg.url} alt="Clinical Media" className="w-full h-auto" />
                                    </div>
                                ) : (
                                    <div
                                        className={`max-w-[85%] p-3 px-4 rounded-2xl text-sm leading-relaxed shadow-sm relative
                      ${msg.sender === 'me'
                                                ? 'bg-blue-600 text-white rounded-br-none'
                                                : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                                            }
                    `}
                                    >
                                        {msg.text}
                                        <div className={`text-[9px] mt-1 text-right opacity-60 ${msg.sender === 'me' ? 'text-blue-100' : 'text-gray-400'}`}>
                                            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
                <div className="h-4"></div>
            </div>

            {/* INPUT AREA (Options) */}
            <div className="bg-white p-4 border-t border-gray-100 flex flex-col gap-2 pb-8 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                {!notification && options.length > 0 && (
                    <>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 ml-1">
                            Your Reply
                        </div>
                        {options.map((opt, idx) => (
                            <button
                                key={idx}
                                onClick={() => onOptionSelect(opt)}
                                className="w-full text-left p-3.5 bg-gray-50 hover:bg-blue-50 active:bg-blue-100 border border-gray-200 hover:border-blue-200 rounded-xl transition-all flex items-center justify-between group"
                            >
                                <span className="text-gray-700 font-medium text-sm group-hover:text-blue-700">{opt.text}</span>
                                <div className="bg-white p-1.5 rounded-full border border-gray-200 group-hover:border-blue-300 shadow-sm">
                                    <ArrowRight size={14} className="text-gray-300 group-hover:text-blue-500" />
                                </div>
                            </button>
                        ))}
                    </>
                )}
                {notification && (
                    <div className="text-center text-xs text-gray-400 py-4 italic animate-pulse">
                        Mentor is reviewing...
                    </div>
                )}
            </div>
        </div>
    );
}
