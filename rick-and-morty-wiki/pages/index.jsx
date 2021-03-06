// Home page 
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const defaultEndpoint = 'https://rickandmortyapi.com/api/character'

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}

export default function Home({ data }) {
  const { info, results: defaultResults = [] } = data
  const [results, updateResults] = useState(defaultResults)


  const [page, updatePage] = useState({
    ...info,
    current: defaultEndpoint
  });

  const { current } = page;

  useEffect(() => {
    // Don't bother making a request if it's the default endpoint as we
    // received that on the server

    if (current === defaultEndpoint) return;

    // In order to use async/await, we need an async function, and you can't
    // make the `useEffect` function itself async, so we can create a new
    // function inside to do just that
    async function request() {
      const res = await fetch(current)
      const nextData = await res.json();

      updatePage({
        current,
        ...nextData.info
      });

      // If we don't have `prev` value, that means that we're on our "first page"
      // of results, so we want to replace the results and start fresh
      if (!nextData.info?.prev) {
        updateResults(nextData.results);
        return;
      }

      // Otherwise we want to append our results
      updateResults(prev => {
        return [
          ...prev,
          ...nextData.results
        ]
      });
    }

    request();
  }, [current]);


  //load more function
  function loadMore() {
    updatePage(prev => {
      return {
        ...prev,
        current: page?.next
      }
    })
  }

  // search function 
  function onSubmitSearch(e) {
    e.preventDefault();

    const { currentTarget = {} } = e;
    const fields = Array.from(currentTarget?.elements);
    const fieldQuery = fields.find(field => field.name === 'query');

    const value = fieldQuery.value || '';
    const endpoint = `https://rickandmortyapi.com/api/character/?name=${value}`;

    updatePage({
      current: endpoint
    });
  }


  console.log(data);
  return (
    <div>
      <Head>
        <title>Wubba Lubba Dub Dub!!!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <h1>
          Wubba Lubba Dub Dub!!!
        </h1>


        <p >
          Rick and Morty.
        </p>

        <form
          onSubmit={onSubmitSearch}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              name="query"
              type="search"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <button
              className="btn btn-primary mt-3"
              // onClick={}
            >
             Search
            </button>
          </div>
        </form>

        <div className="container">
          <div className="row">
            {results.map(result => {
              const { id, name, image } = result;

              return (
                <div key={id} className="col-12 col-md-6 col-lg-4 p-3">
                  <div className="card">
                    <Link href='/character/[id]' as={`/character/${id}`}>
                    <a>
                      <img className="card-img-top" src={image} alt={`${name} thumbnail`} />
                      <h5 class="card-title">{name}</h5>
                      <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </a>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <p>
          <button
            className="btn btn-primary m-3"
            onClick={loadMore}
          >
            Load More
          </button>
        </p>


      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
