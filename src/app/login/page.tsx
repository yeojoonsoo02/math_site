export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-4 bg-gradient-to-br from-purple-50 to-white">
      <h1 className="text-3xl font-bold">로그인</h1>
      <div className="grid w-full max-w-md grid-cols-1 gap-6 md:grid-cols-2">
        <form className="flex flex-col gap-3 rounded border p-4 shadow">
          <h2 className="text-xl font-semibold mb-2">회원가입</h2>
          <input type="text" placeholder="아이디" className="border p-2 rounded" />
          <input type="email" placeholder="이메일" className="border p-2 rounded" />
          <input type="password" placeholder="비밀번호" className="border p-2 rounded" />
          <button type="submit" className="mt-2 rounded bg-purple-600 py-2 text-white hover:bg-purple-700">
            가입하기
          </button>
        </form>
        <form className="flex flex-col gap-3 rounded border p-4 shadow">
          <h2 className="text-xl font-semibold mb-2">로그인</h2>
          <input type="text" placeholder="아이디" className="border p-2 rounded" />
          <input type="password" placeholder="비밀번호" className="border p-2 rounded" />
          <button type="submit" className="mt-2 rounded bg-violet-600 py-2 text-white hover:bg-violet-700">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}
