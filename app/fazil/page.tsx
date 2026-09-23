'use client'

import { useState } from 'react'

type KanjiCard = {
  id: number
  kanji: string
  hiragana: string
  meaning: string
}

const kanjiData: KanjiCard[] = [
  { id: 1, kanji: 'raden', hiragana: 'えき', meaning: 'Stasiun' },
  { id: 2, kanji: '電車', hiragana: 'でんしゃ', meaning: 'Kereta' },
  { id: 3, kanji: '旅行', hiragana: 'りょこう', meaning: 'Perjalanan' },
  { id: 4, kanji: '切符', hiragana: 'きっぷ', meaning: 'Tiket' },
  { id: 5, kanji: '予約', hiragana: 'よやく', meaning: 'Pemesanan' }
]

export default function FlashcardApp() {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isFlipped, setIsFlipped] = useState<boolean>(false)

  const handleNext = (): void => {
    setIsFlipped(false)
    setCurrentIndex((prev) => (prev + 1) % kanjiData.length)
  }

  const handleFlip = (): void => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6 text-slate-800">Latihan Kanji N4</h1>
        
        <div 
          onClick={handleFlip}
          className="w-full h-64 bg-indigo-50 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 transform hover:shadow-md"
        >
          {!isFlipped ? (
            <span className="text-7xl font-bold text-slate-800">
              {kanjiData[currentIndex].kanji}
            </span>
          ) : (
            <div className="text-center">
              <p className="text-3xl font-semibold text-slate-700 mb-2">
                {kanjiData[currentIndex].hiragana}
              </p>
              <p className="text-xl text-slate-600">
                {kanjiData[currentIndex].meaning}
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 flex gap-4 w-full">
          <button 
            onClick={handleFlip}
            className="flex-1 bg-indigo-100 text-indigo-700 py-3 rounded-lg font-semibold hover:bg-indigo-200 transition-colors"
          >
            Putar Kartu
          </button>
          <button 
            onClick={handleNext}
            className="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Berikutnya
          </button>
        </div>
      </div>
    </div>
  )
}