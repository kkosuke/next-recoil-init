
import Link from "next/link";
import { useRecoilState } from "recoil";
import { countState, userState } from "../components/atoms";


const Home = () => {
  //atomの値の操作を定義（read,write)
  const [count, setCount] = useRecoilState(countState);
  const [user, setUser] = useRecoilState(userState);
  //count increment処理
  const increment = c => {
    return c + 1;
  }
  //userのageをカウントアップ（機能としては意味無し）
  const updateUser = u => {
    return { ...u, ...{ age: u.age + 1 } };
  }
  const resetUser = u => {
    return { ...u, ...{ age: 0 } };
  }
  return (
    <>
      <h1>Home</h1>
      <div>
        <p>
          参考：<br/>
          Recoil最低限 Next編 （2021年9月）<br />
          https://qiita.com/zaburo/items/225d0731faeaa6966ea9<br/>
          Next.jsでRecoilの永続化<br />
          https://qiita.com/dende-h/items/16d8d65d52361000cef7<br/>
        </p>
        <p>count:{count}</p>
        <button onClick={() => setCount(increment)}>count increment</button>
        <hr />
        <p>user.name:{user.name}</p>
        <p suppressHydrationWarning>user.age:{user.age}</p>
        <button onClick={() => setUser(updateUser)} style={{marginRight: "5px"}}>age increment</button>
        <button onClick={() => setUser(resetUser)}>age to 0</button>
        <p>
          Unhandled Runtime Error<br/>
          Error: Text content does not match server-rendered HTML.<br/>
          See more info here: https://nextjs.org/docs/messages/react-hydration-error<br/>
          参考：<br/>
          https://weev.media/article/717<br/>
          https://blog.hey3.dev/posts/nextjs-spa
        </p>
      </div>
      <hr />
      <div>
        <Link href="/about">About</Link>
      </div>
    </>
  );
}

export default Home;