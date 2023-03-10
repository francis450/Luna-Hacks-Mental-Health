import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Form from '@/components/Form';
import bg from '../../public/bgim.jpg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { data: session } = useSession();
  let name = "";
  let email = "";
  if (session) {
    email = session.user.email
    name = session.user.name.split(" ")[0]
  }
  let [number, setNumber] = useState(0);

  const [symptom, setSymptom] = useState("")
  const [quotes, setQuotes] = useState([])

  async function getQuotes() {
    const quotes = await fetch("/api/get-quotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        symptom: symptom
      })
    }).then(r => r.json());
    setQuotes(quotes)
  }

  useEffect(() => {
    if (symptom) getQuotes()
    setSymptom("")
  }, [symptom])
  console.log('symptom', symptom);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mh.png" />
      </Head>
      <main className={`${styles.main}`}>
        <nav className='nav' style={{display: "flex", flexFlow: "row", alignItems: "center", font: "2rem", justifyContent: "space-between", height: "70px", backgroundColor: "whitesmoke"}}>
          <div><h1>Mental health</h1></div>
          <div style={{display: "flex", flexFlow: "row", alignItems: "center", gap:"16px"}}>
          {(session) &&
            <>
              <Link href="/">
                <li style={{ listStyle: "none" }} className="ml-10 text-sm uppercase hover:border-b">
                  <p className="hidden md:block mr-6">Welcome, {name}!</p>
                </li>
              </Link>
              <Link href="/" >
                <Image
                  src={session.user.image}
                  alt="/"
                  width="40"
                  height="40"
                  className="rounded-full ml-3 group-hover:opacity-20"
                />
              </Link>
              <Link href="/" onClick={signOut}>{(session) &&
                <button>Logout</button>
              }
              </Link>
            </>
          }
          <Link href="/" onClick={signIn}>{(!session) &&
            <button>Login</button>
          }
          </Link>
          </div>
        </nav>
        <Form setSymptom={setSymptom} />
        {quotes.map((q, id) => {
          return (<div key={id} className="quote--div" style={{display: "flex", justifyContent: "center", position:"relative", marginTop: "1rem"}}>
            <Image src={bg} alt="background image" style={{position:"relative"}} />
            <div style={{position: "absolute", color: "white", top:"10%", fontSize: "2rem", margin: "auto", width: "50%"}}>{q.quote}</div></div>)
        })}
      </main>
    </>
  )
}
