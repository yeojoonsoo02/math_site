import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-between min-h-screen p-4 bg-gradient-to-br from-white to-purple-50">
      <div className="flex flex-col items-center justify-center flex-1 gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight">수학 학습 사이트</h1>
        <Image src="/next.svg" alt="logo" width={180} height={38} className="dark:invert" />
        <p className="max-w-md text-lg">
          이 웹사이트는 다양한 수학 문제와 설명을 제공하여 학습을 돕기 위한 곳입니다.
        </p>
      </div>
      <div className="flex justify-center pb-8">
        <input
          type="text"
          placeholder="프롬프트를 입력하세요"
          className="border rounded p-2 w-full max-w-md shadow"
        />
      </div>
    </main>
  );
}
