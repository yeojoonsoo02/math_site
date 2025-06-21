"use client";
import { useState, useMemo } from "react";
import Image from "next/image";

export default function Problems() {
  const [grade, setGrade] = useState<string>("");
  const [level, setLevel] = useState<string>("");

  const imgSrc = useMemo(() => {
    if (!grade || !level) return null;
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='160'>` +
      `<rect width='300' height='160' fill='#ede9fe'/>` +
      `<text x='150' y='80' font-size='24' text-anchor='middle' dominant-baseline='middle' fill='#4c1d95'>${grade}학년 ${level}</text>` +
      `</svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }, [grade, level]);

  return (
    <div className="flex flex-col items-center min-h-screen gap-6 p-4 bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <h1 className="text-3xl font-bold">문제 모음</h1>
      <div className="flex gap-4">
        <select
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          className="border rounded p-2 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
        >
          <option value="">학년 선택</option>
          <option value="1">1학년</option>
          <option value="2">2학년</option>
          <option value="3">3학년</option>
          <option value="4">4학년</option>
          <option value="5">5학년</option>
          <option value="6">6학년</option>
        </select>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="border rounded p-2 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
        >
          <option value="">난이도 선택</option>
          <option value="쉬움">쉬움</option>
          <option value="보통">보통</option>
          <option value="어려움">어려움</option>
        </select>
      </div>
      {imgSrc && (
        <Image src={imgSrc} alt="문제 태그" width={300} height={160} />
      )}
    </div>
  );
}
