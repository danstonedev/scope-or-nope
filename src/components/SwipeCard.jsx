import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { MapPin, FileText, Pill, Activity, User, ArrowLeft, ArrowRight, Check, X, ClipboardList } from 'lucide-react';

// SORTABLE ITEM COMPONENT
const SortableItem = ({ item, status, onDecide }) => {
    const x = useMotionValue(0);
    const bgColor = useTransform(x, [-100, 0, 100], ['#fef2f2', '#ffffff', '#f0fdf4']);
    const leftOpacity = useTransform(x, [-80, -30], [1, 0]);
    const rightOpacity = useTransform(x, [30, 80], [0, 1]);

    const handleDragEnd = (_, info) => {
        if (status !== 'PENDING') return;
        const threshold = 60;
        if (info.offset.x > threshold) {
            onDecide(item.id, 'TREAT');
        } else if (info.offset.x < -threshold) {
            onDecide(item.id, 'REFER');
        }
    };

    const isCorrect = status === 'CORRECT';
    const isWrong = status === 'WRONG';

    return (
        <div className="relative overflow-hidden rounded-xl mb-2">
            {/* BACKGROUND HINTS */}
            <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                <motion.div style={{ opacity: leftOpacity }} className="text-green-500 font-bold text-xs flex items-center gap-1">
                    <Check size={16} strokeWidth={3} /> SCOPE
                </motion.div>
                <motion.div style={{ opacity: rightOpacity }} className="text-red-500 font-bold text-xs flex items-center gap-1">
                    NOPE <X size={16} strokeWidth={3} />
                </motion.div>
            </div>

            <motion.div
                drag={status === 'PENDING' ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.3}
                onDragEnd={handleDragEnd}
                style={{ x, backgroundColor: bgColor, touchAction: "pan-y" }}
                whileTap={{ scale: 1.01 }}
                className={`relative z-10 p-4 border-2 rounded-xl flex items-center justify-between transition-colors
                    ${isCorrect ? 'border-green-400 bg-green-50' :
                        isWrong ? 'border-red-400 bg-red-50' : 'border-gray-100 bg-white'}
                `}
            >
                {/* LEFT ARROW (Scope/Treat) */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isCorrect && item.bucket === 'TREAT' ? 'bg-green-500 text-white' : 'bg-green-50 text-green-400'}`}>
                    <Check size={16} strokeWidth={2.5} />
                </div>

                {/* TEXT */}
                <span className={`flex-1 text-center font-bold text-sm px-2 ${isCorrect ? (item.bucket === 'REFER' ? 'text-red-700' : 'text-green-700') : 'text-gray-800'}`}>
                    {item.text}
                </span>

                {/* RIGHT ARROW (Nope/Refer) */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isCorrect && item.bucket === 'REFER' ? 'bg-red-500 text-white' : 'bg-red-50 text-red-400'}`}>
                    <X size={16} strokeWidth={2.5} />
                </div>

                {/* STATUS ICONS */}
                {isCorrect && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -right-1 -top-1 bg-green-500 text-white rounded-full p-0.5">
                        <Check size={12} strokeWidth={3} />
                    </motion.div>
                )}
                {isWrong && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -right-1 -top-1 bg-red-500 text-white rounded-full p-0.5">
                        <X size={12} strokeWidth={3} />
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

// MAIN SWIPE CARD COMPONENT
export default function SwipeCard({ data, onSwipe, onSortingComplete }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotate = useTransform(x, [-200, 200], [-15, 15]);
    const opacityRight = useTransform(x, [50, 150], [0, 1]);
    const opacityLeft = useTransform(x, [-50, -150], [0, 1]);

    // Sorting State (if case has sorting_items)
    const hasSorting = data.sorting_items && data.sorting_items.length > 0;
    const [itemStates, setItemStates] = useState(
        hasSorting ? data.sorting_items.reduce((acc, item) => ({ ...acc, [item.id]: 'PENDING' }), {}) : {}
    );
    const [completedCount, setCompletedCount] = useState(0);

    // Ref to track if we've already called onSortingComplete (prevents multiple calls)
    const sortingCompleteCalledRef = useRef(false);
    // Ref to store the callback (avoids dependency array issues)
    const onSortingCompleteRef = useRef(onSortingComplete);
    onSortingCompleteRef.current = onSortingComplete;

    const handleSortDecide = (itemId, choice) => {
        const item = data.sorting_items.find(i => i.id === itemId);
        const isCorrect = item.bucket === choice;

        if (isCorrect) {
            setItemStates(prev => ({ ...prev, [itemId]: 'CORRECT' }));
            if (navigator.vibrate) navigator.vibrate(30);
        } else {
            setItemStates(prev => ({ ...prev, [itemId]: 'WRONG' }));
            if (navigator.vibrate) navigator.vibrate([40, 40, 40]);
            setTimeout(() => {
                setItemStates(prev => ({ ...prev, [itemId]: 'PENDING' }));
            }, 800);
        }
    };

    useEffect(() => {
        if (!hasSorting) return;
        const correctCount = Object.values(itemStates).filter(s => s === 'CORRECT').length;
        setCompletedCount(correctCount);

        // Only call once when all items are sorted
        if (correctCount === data.sorting_items.length && !sortingCompleteCalledRef.current) {
            sortingCompleteCalledRef.current = true;
            // All sorted! Auto-advance after brief celebration
            setTimeout(() => {
                onSortingCompleteRef.current && onSortingCompleteRef.current();
            }, 800);
        }
    }, [itemStates, hasSorting, data.sorting_items?.length]);

    const handleDragEnd = (_, info) => {
        // If this card has sorting items, don't allow main card swipe until all sorted
        if (hasSorting && completedCount < data.sorting_items.length) return;

        const threshold = 100;
        if (info.offset.x > threshold) {
            onSwipe('right');
        } else if (info.offset.x < -threshold) {
            onSwipe('left');
        }
    };

    // const { quick_facts: qf } = data; // DEPRECATED

    return (
        <motion.div
            drag={!hasSorting ? "x" : false}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.8}
            onDragEnd={handleDragEnd}
            style={{ x, y, rotate, touchAction: "none" }}
            className="absolute w-[95%] max-w-md h-[70dvh] max-h-[600px] bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col justify-between"
        >
            {/* SWIPE INDICATORS (Only show for non-sorting cards) */}
            {!hasSorting && (
                <>
                    <motion.div
                        style={{ opacity: opacityLeft }}
                        className="absolute top-1/3 left-1/2 -translate-x-1/2 z-10 border-4 border-green-500 text-green-500 font-black text-3xl px-6 py-2 rounded-lg bg-white/90 backdrop-blur-sm shadow-xl"
                    >
                        SCOPE ✓
                    </motion.div>
                    <motion.div
                        style={{ opacity: opacityRight }}
                        className="absolute top-1/3 left-1/2 -translate-x-1/2 z-10 border-4 border-red-500 text-red-500 font-black text-3xl px-6 py-2 rounded-lg bg-white/90 backdrop-blur-sm shadow-xl"
                    >
                        NOPE ✗
                    </motion.div>
                </>
            )}

            {/* HEADER */}
            <div
                className="p-6 pb-6 text-white relative overflow-visible"
                style={{ background: data.bg_gradient || 'linear-gradient(135deg, #667eea, #764ba2)' }}
            >
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1.5 text-white/90 text-xs font-bold uppercase tracking-wider bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                        <MapPin size={12} /> {data.setting}
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {/* COMPACT AVATAR */}
                    <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-sm font-black text-gray-800 shrink-0 border-2 border-white/30">
                        {data.dating_profile.username.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                        <h2 className="text-lg font-bold leading-tight drop-shadow-sm">{data.dating_profile.username}</h2>
                        <div className="flex items-center gap-1.5 text-white/80 text-[10px] font-semibold">
                            <span>{data.dating_profile.age}</span> • <span>{data.dating_profile.sex}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-grow flex flex-col justify-evenly gap-3 py-3">
                {/* BIO - NOW FIRST AND PROMINENT */}
                <div className="px-5 py-3 mx-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                        <User size={12} /> About Me
                    </div>
                    <p className="text-gray-800 text-base leading-relaxed font-semibold">
                        {data.dating_profile.bio}
                    </p>
                </div>

                {/* LOOKING FOR - NOW SECOND */}
                <div className="px-6 py-1">
                    <div className="flex items-center gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-1">
                        <Activity size={12} /> Looking For
                    </div>
                    <p className="text-purple-600 font-bold text-sm leading-snug">
                        {data.dating_profile.looking_for}
                    </p>
                </div>

                {/* FACTS/BAGGAGE */}
                <div className="px-6 py-2">
                    <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
                        <Pill size={14} /> My Baggage & ICF
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {/* BAGGAGE */}
                        {(data.dating_profile.baggage || []).map((item, i) => (
                            <span key={`bag-${i}`} className="bg-red-50 text-red-700 px-3 py-1.5 rounded-lg font-bold text-xs shadow-sm border border-red-100">
                                {item}
                            </span>
                        ))}
                        {/* ICF TAGS */}
                        {(data.dating_profile.icf_tags || []).map((item, i) => (
                            <span key={`icf-${i}`} className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg font-bold text-xs shadow-sm border border-blue-100">
                                {item.split(' ').slice(1).join(' ')}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* OPENING QUESTION */}
            <div className="px-6 pt-2 pb-8 mt-auto">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl rounded-tl-none border border-blue-100 shadow-sm relative ml-2">
                    <div className="absolute -top-3 -left-2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transform -rotate-2">
                        ASKING YOU
                    </div>
                    <p className="text-blue-900 font-bold text-xl leading-snug mt-1">
                        "{data.level1_question}"
                    </p>
                </div>
            </div>

            {/* SORTING SECTION (If applicable) */}
            {
                hasSorting && (
                    <div className="px-4 pb-6 pt-2 border-t border-gray-100 bg-gray-50/50">
                        <div className="flex items-center justify-between mb-3 px-2">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 rounded-lg bg-purple-100 text-purple-600">
                                    <ClipboardList size={14} />
                                </div>
                                <span className="font-bold text-xs uppercase tracking-wider text-purple-600">Sort Clinical Needs</span>
                            </div>
                            <div className="text-sm font-black text-gray-400">
                                {completedCount}<span className="text-gray-300">/{data.sorting_items.length}</span>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 h-1.5 rounded-full mb-3 overflow-hidden">
                            <motion.div
                                className="h-full bg-purple-500"
                                initial={{ width: 0 }}
                                animate={{ width: `${(completedCount / data.sorting_items.length) * 100}%` }}
                            />
                        </div>

                        {/* Sortable Items */}
                        {data.sorting_items.map((item) => (
                            <SortableItem
                                key={item.id}
                                item={item}
                                status={itemStates[item.id]}
                                onDecide={handleSortDecide}
                            />
                        ))}

                        {completedCount === data.sorting_items.length && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center text-green-600 font-bold text-sm mt-2 py-3 bg-green-50 rounded-xl flex items-center justify-center gap-2"
                            >
                                <Check size={16} strokeWidth={3} /> All sorted!
                            </motion.div>
                        )}
                    </div>
                )
            }
        </motion.div >
    );
}
