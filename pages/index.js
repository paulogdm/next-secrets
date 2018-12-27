const Index = (props) => (
    <a href="/_logs">Visit the logs.</a>
)

Index.getInitialProps = () => {
  console.log(process.env)
  return {}
}

export default Index