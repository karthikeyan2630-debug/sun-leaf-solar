import React, { useEffect, useRef, useState } from 'react';

interface AiConsultantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiConsultantModal: React.FC<AiConsultantModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [userQuery, setUserQuery] = useState<string>('');
  const [propertyType, setPropertyType] = useState<string>('Industrial');
  const [loading, setLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<
    Array<{ role: 'user' | 'assistant'; content: string }>
  >([
    {
      role: 'assistant',
      content:
        'Welcome to Sun Leaf Solar Engineering AI Assistant. I can assist you with system sizing, 580W TOPCon panel efficiency analysis, string vs. micro-inverter topology, battery storage calculations, and net-metering standards.',
    },
  ]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading, isOpen]);

  if (!isOpen) return null;

  const handleSend = async () => {
    if (!userQuery.trim()) return;

    const newMsg = { role: 'user' as const, content: userQuery };
    setMessages((prev) => [...prev, newMsg]);
    const currentQuery = userQuery;
    setUserQuery('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai-consultant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: currentQuery,
          propertyType,
          loadRequirements: 'Custom load consultation',
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.details || data.error || `AI request failed (${res.status})`);
      }

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.reply,
        },
      ]);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unable to contact the AI service.';
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `AI service error: ${message}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const samplePrompts = [
    'How do I calculate payback time for a 100kW industrial roof in Bangalore?',
    'What is the difference between string inverters and microinverters for residential villas?',
    'How much battery storage is needed for 6 hours of off-grid agricultural pump backup?',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#f9f9fc] border border-white/60 rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative flex flex-col h-[620px]">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#fd9412]/20 text-[#8d4f00] flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">psychology</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#004870]">
                AI Solar Systems Engineer
              </h3>
              <p className="text-xs text-slate-500">
                Powered by Gemini AI Engine & Sun Leaf Engineering Knowledge
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Chat Message List */}
        <div className="flex-grow overflow-y-auto py-4 space-y-4 px-1">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${
                m.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {m.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-[#004870] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-1">
                  SL
                </div>
              )}
              <div
                className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-[#006194] text-white rounded-br-none'
                    : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm'
                }`}
              >
                <div className="whitespace-pre-line">{m.content}</div>
              </div>
            </div>
          ))}

          <div ref={messagesEndRef} />

          {loading && (
            <div className="flex gap-3 items-center text-xs text-slate-500">
              <div className="w-8 h-8 rounded-full bg-[#004870] text-white flex items-center justify-center text-xs font-bold animate-pulse">
                SL
              </div>
              <div className="bg-white px-4 py-3 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-sm animate-spin text-[#006194]">
                  sync
                </span>
                Analyzing array configuration & yield equations...
              </div>
            </div>
          )}
        </div>

        {/* Sample Prompt Chips */}
        <div className="py-2 flex gap-2 overflow-x-auto no-scrollbar border-t border-slate-200/60 pt-3">
          {samplePrompts.map((p, i) => (
            <button
              key={i}
              onClick={() => setUserQuery(p)}
              className="text-[11px] whitespace-nowrap bg-white border border-slate-200 hover:border-[#006194] text-slate-600 hover:text-[#006194] px-3 py-1.5 rounded-full transition-colors cursor-pointer shrink-0"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="pt-2 flex gap-2">
          <input
            type="text"
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Ask engineering question e.g. recommended tilt angle for Bangalore..."
            className="flex-grow text-xs md:text-sm p-3.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#006194]"
          />
          <button
            onClick={handleSend}
            disabled={loading || !userQuery.trim()}
            className="bg-[#006194] hover:bg-[#004870] disabled:bg-slate-300 text-white px-5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">send</span>
          </button>
        </div>

      </div>
    </div>
  );
};
