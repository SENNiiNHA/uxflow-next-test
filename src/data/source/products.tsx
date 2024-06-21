// The following function is shared
// with getStaticProps and API routes
// from a `lib/` directory
export async function loadProductsList() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://my-json-server.typicode.com/SENNiiNHA/uxflow-next-test/products')
  const data = await res.json()

  return data
}
